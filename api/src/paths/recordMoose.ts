import { Operation } from "express-openapi";
import { RequestHandler } from "express";
import { openDb } from "../Db/db";

function postMoose(): RequestHandler {
  return async (req, res) => {
    console.log(req.body);
    const dbConnection = await openDb();
    res.status(200).json(req.body);
  };
}

export const POST: Operation = postMoose();

POST.apiDoc = {
  summary: "Uploads moose group data",
  requestBody: {
    content: {
      "application/json": {
        schema: {
          type: "object",
          required: ["clientID", "date", "location", "moose"],
          properties: {
            clientID: {
              type: "number",
            },
            date: {
              type: "string",
            },
            location: {
              type: "array",
              items: {
                type: "number",
                maxLength: 2,
                minLength: 2,
              },
            },
            moose: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  lifestage: {
                    type: "string",
                  },
                  health: {
                    type: "string",
                  },
                  gender: {
                    type: "string",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: "A success response",
      // schema: {
      //   type: "json",
      //   properties: {},
      // },
    },
    default: {
      description: "An error occurred",
      // schema: {
      //   additionalProperties: true,
      // },
    },
  },
};
