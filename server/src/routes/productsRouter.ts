/// <reference path="../_all.d.ts" />
"use strict";
import express = require("express");
import ProductsRepository from "../repositories/ProductsRepository";
import PagedCollection from "../models/PagedCollection";
import Product from "../models/Product";

let repo = new ProductsRepository(), 
     productsRouter = express.Router();

productsRouter.get("/", (request: express.Request, response: express.Response) => {
    let page = parseInt(request.query["page"]) || 0,
        pageSize = Math.min(parseInt(request.query["pageSize"]) || 10, 100),
        products = repo.readProducts(page, pageSize).then(function(p:PagedCollection<Product>){
                response.json(p);
    });
});

export = productsRouter;