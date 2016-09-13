/// <reference path="./_all.d.ts" />
"use strict";

import express = require("express");

import productsRouter = require("./routes/productsRouter");
import cors = require("./middlewares/cors");
import requestLogger = require("./middlewares/requestLogger");

export default class Server {
  private _app: express.Application;

  constructor(private _port: any) {
    this._app = express();
    this._app.listen(this._port);  

    this.configureMiddlewares();
    this.configureRoutes();
  }

  private configureRoutes() {
    this._app.use("/api/products", productsRouter );
  }

  private configureMiddlewares() {
    this._app.use(cors);
    this._app.use(requestLogger);
  }
}