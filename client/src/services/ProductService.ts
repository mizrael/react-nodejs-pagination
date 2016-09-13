import * as React from "react";
import { injectable } from "inversify";
import "reflect-metadata";
import 'whatwg-fetch';

import {IProductService} from './IProductService';
import {Product} from '../models/Product';
import {PagedCollection} from '../models/PagedCollection';

@injectable()
export class ProductService implements IProductService{
    constructor(private _apiUrl:string){}

    public readProducts(page:number, pageSize:number):Promise<PagedCollection<Product>>{
        let me = this,
            finalUrl = this._apiUrl + "?page=" + page + "&pageSize=" + pageSize,
            options:RequestInit = { 
                method: 'GET',
                mode: 'cors',
                cache: 'default' 
            };

      return fetch(finalUrl, options).then((resp:Response) =>{
          return resp.json();
      }).then(function(json: any){
          let products = me.mapProducts(json._items);
          return new PagedCollection<Product>(products, json._page, json._totalPagesCount, json._totalItemsCount);
      });
    }

    private mapProducts(jsonItems: any):Array<Product>{
        let products = new Array<Product>();
        for(var i=0;i!=jsonItems.length;++i){
            var jsonItem: any = jsonItems[i];
            products.push(new Product(jsonItem._id, jsonItem._title));
        
        }
        return products; 
    }
}