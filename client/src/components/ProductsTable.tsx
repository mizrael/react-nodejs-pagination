import * as React from "react";
import getDecorators from "inversify-inject-decorators";
import kernel from "../ioc.config";

import {IProductService} from "../services/IProductService";
import {Product} from "../models/Product";
import {PagedCollection} from '../models/PagedCollection';

import {Pager} from './Pager';

let { lazyInject } = getDecorators(kernel);

export interface ProductsTableProps {  }
export interface ProductsTableState { 
    products: Array<Product>;
    totalItems: number;
    totalPages: number;
    page: number;
 }

export class ProductsTable extends React.Component<ProductsTableProps, ProductsTableState> {
    constructor(props:ProductsTableProps){
        super(props);
        
        this.state = {products:[], totalItems: 0, totalPages: 0, page: 0 };
        this.refreshProducts();
    }

    @lazyInject("IProductService")
    public productService: IProductService;
    
    public onPageClick(page:number){
        // "this" is not what I was expecting.
       this.refreshProducts(page);
    }

    private refreshProducts(page:number = 0):void{
        let me = this;
        this.productService.readProducts(page, 10).then(function(p){
            let state = {
                products: p.items,
                totalItems: p.totalItemsCount,
                totalPages: p.totalPagesCount,
                page: page
            };
            me.setState(state);
        });
    }

    private renderProduct(product:Product):JSX.Element{
        return <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.title}</td>
        </tr>;
    }

    private renderProducts():Array<JSX.Element>{
        let rows = Array<JSX.Element>();

        if(!this.state.products || 0 === this.state.products.length)
            return rows;

        let count = this.state.products.length;
        for(var i=0;i!=count;++i){
            rows.push(this.renderProduct(this.state.products[i]));
        }
        
        return rows;
    }

    private renderTable():JSX.Element{
        let productsTBody = this.renderProducts();
        
        return <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                        </tr>
                    </thead>
                    <tbody>{productsTBody}</tbody>
                </table>;
    }

    public render() {
        let productsTable = this.renderTable();
    
        return <div className="row">
                  <div className="col-sm-12">{productsTable}</div>
                  
                  <div className="col-sm-12">
                    <Pager onPageClick={this.onPageClick.bind(this)} 
                           page={this.state.page} totalPages={this.state.totalPages} />
                  </div>
            </div>;
    }
}