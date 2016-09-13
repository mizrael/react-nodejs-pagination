/// <reference path="../_all.d.ts" />
import express = require("express");

let cors: express.RequestHandler = (
    request: express.Request,
    response: express.Response,
    next: express.NextFunction
) => {
    response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    next();
};

export = cors;