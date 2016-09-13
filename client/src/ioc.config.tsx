import { Kernel } from "inversify";
import "reflect-metadata";

import {IProductService} from "./services/IProductService";
import {ProductService} from "./services/ProductService";

let kernel = new Kernel(),
    productsServiceUrl = "http://localhost:8080/api/products";

kernel.bind<IProductService>("IProductService").toConstantValue(new ProductService(productsServiceUrl));

export default kernel;