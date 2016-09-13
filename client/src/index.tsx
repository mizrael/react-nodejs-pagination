import * as React from "react";
import * as ReactDOM from "react-dom";
import kernel from "./ioc.config";

import { ProductsTable } from "./components/ProductsTable";

ReactDOM.render(
    <ProductsTable />,
    document.getElementById("main-content")
);