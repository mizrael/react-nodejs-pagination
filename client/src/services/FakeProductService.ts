import * as React from "react";
import { injectable } from "inversify";
import "reflect-metadata";

import {IProductService} from './IProductService';
import {Product} from '../models/Product';
import {PagedCollection} from '../models/PagedCollection';
import {UuidUtils} from '../utils/UuidUtils';

@injectable()
export class FakeProductService implements IProductService{
    private products:Product[];

    constructor(){
        this.products = this.generateProducts();
    }

    private generateProducts(count:number = 1000){
        let products = new Array<Product>();
        for(var i=0;i!=count;++i){
            var id = UuidUtils.generate(),
                title = "Product " + (i+1);
            products.push(new Product(id, title));
        }
        return products;
    }

    public readProducts(page:number, pageSize:number):Promise<PagedCollection<Product>>{
        var offset = page*pageSize,
            paged = this.products.slice(offset, offset + pageSize),
            totalPages = Math.floor(this.products.length / pageSize),
            result = new PagedCollection<Product>(paged, page, totalPages, this.products.length);
        return Promise.resolve(result);
    }
}