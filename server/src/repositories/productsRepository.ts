/// <reference path="../_all.d.ts" />
import Product from "../models/product";
import PagedCollection from "../models/PagedCollection";
import uuid = require("node-uuid");

export default class ProductsRepository{
    private products:Product[];

    constructor(){
        this.products = this.generateProducts(100);
    }

    private generateProducts(count: number){
        let products = new Array<Product>();
        for(var i=0;i!==count;++i){
            var id = uuid.v4(),
                title = "Product " + (i+1);
            products.push(new Product(id, title));
        }
        return products;
    }

    public readProducts(page:number, pageSize:number):Promise<PagedCollection<Product>>{
        var offset = page * pageSize,
            paged = this.products.slice(offset, offset + pageSize),
            totalPages = Math.floor(this.products.length / pageSize),
            result = new PagedCollection<Product>(paged, page, totalPages, this.products.length);
        return Promise.resolve(result);
    }
}