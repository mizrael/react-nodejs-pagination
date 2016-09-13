"use strict";

import express = require("express");
import Server from "./server";
import ServerUtils from "./utils/ServerUtils";

let port = ServerUtils.normalizePort(process.env.PORT || 8080);
var server = new Server(port);