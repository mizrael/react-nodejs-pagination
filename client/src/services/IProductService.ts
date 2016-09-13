import {Product} from '../models/Product';
import {PagedCollection} from '../models/PagedCollection';

export interface IProductService{
    readProducts(page:number, pageSize:number):Promise<PagedCollection<Product>>;
}