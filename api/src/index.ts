import express from "express";
import { initialize } from "express-openapi";
import apiDoc from "../api-doc";
import * as bodyParser from "body-parser";

const port = 7080;

const app: express.Express = express();

app.use(bodyParser.json());

console.log("about to initialize");
initialize({
  validateApiDoc: false,
  app,
  apiDoc: apiDoc,
  paths: "./src/paths",
  routesGlob: "*****.{ts,js}", // updated default to allow .ts
  routesIndexFileRegExp: /(?:index)?\.[tj]s$/, // updated default to allow .ts
});

console.log("initialized");
if (port) {
  console.log("about to listen");
  app.listen(port);
  console.log("listening");
}
