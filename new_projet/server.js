"use strict";
/// <reference path="node.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var server = http.createServer(function (req, res) {
    res.whiteHead(200);
    res.end('Hello from Node.js');
});
server.listen(1500);
console.log('Listening...');
