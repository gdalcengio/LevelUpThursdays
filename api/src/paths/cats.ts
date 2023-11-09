import { Operation } from "express-openapi";
import { RequestHandler } from "express";

export const GET: Operation = [getCats()];

GET.apiDoc = {
  summary: "Returns cat facts.",
  // operationId: "getCats",
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

function getCats(): RequestHandler {
  return async (req, res) => {
    console.log("am I hitting this endpojntioneroitnre");
    res.status(200).json({ message: "test" });
  };
}
