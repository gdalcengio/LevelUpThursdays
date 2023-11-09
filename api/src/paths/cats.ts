import { Operation } from "express-openapi";
import { RequestHandler } from "express";

function getCatsHandler(): RequestHandler {
  console.log("about to return hanlder");
  return async (req, res) => {
    console.log("am I hitting this endpojntioneroitnre");
    res.status(200).json({ message: "CATSSSS" });
  };
};

export const GET: Operation = getCatsHandler();

GET.apiDoc = {
  summary: "Returns cat facts.",
  // parameters: [
  //   {
  //     in: 'query',
  //     name: 'worldName',
  //     required: true,
  //     type: 'string'
  //   }
  // ],
  responses: {
    200: {
      description: "A list of cat stuff.",
      schema: {
        type: "object",
        // properties: {},
      },
    },
    default: {
      description: "An error occurred",
      // schema: {
      //   additionalProperties: true,
      // },
    },
  },
};
