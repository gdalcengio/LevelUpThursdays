import { Operation } from "express-openapi";
import { RequestHandler } from "express";

function postParamsToJSON(): RequestHandler {
  return async (req, res) => {
    console.log(JSON.stringify(req.body));
    res.status(200).json(req.body);
  };
}

export const POST: Operation = postParamsToJSON();

POST.apiDoc = {
  summary: "Returns a json body of whats sent.",
  requestBody: {
    content: {
      "application/json": {
        schema: {
          type: "object",
          required: ["name", "favcat"],
          properties: {
            name: {
              type: "string",
            },
            favcat: {
              type: "string",
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: "A json object containing your params",
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
