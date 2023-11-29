import { Operation } from "express-openapi";
import { RequestHandler } from "express";
import { openDb, findUserMeese } from "../Db/db";

function findUserMeeseHandler(): RequestHandler {
  return async (req, res) => {
    console.log(req.body);
    const dbConnection = await openDb();
    await findUserMeese(dbConnection, req.cookies);
    res.status(200).json(req.cookies);
  };
}

export const GET: Operation = findUserMeeseHandler();
