import express from "express";
import { initialize } from "express-openapi";
// import v1WorldsService from './api/services/worldsService';
import apiDoc from "../api-doc";

const port = 7080;

const app = express();
initialize({
  app,
  apiDoc: apiDoc,
  // dependencies: {
  //   worldsService: v1WorldsService
  // },
  paths: "./src/paths",
  routesGlob: "./src/paths/*.{ts,js}", // updated default to allow .ts
  routesIndexFileRegExp: /(?:index)?\.[tj]s$/, // updated default to allow .ts
});

if (port) {
  app.listen(port);
}
