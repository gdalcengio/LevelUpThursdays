import { RequestHandler } from 'express';
import { Operation } from 'express-openapi';
import express from 'express';

const router = express.Router();

//add a POST operation that takes a param from url and responds with json

//process's data sent in post req
//new route to respond to http post req's
//should take a param from the url
//in route handler respond w json

const postFact: RequestHandler = async (req, res, next) => {
  if(!req.body) {
    return res.status(400).send();
  };
  //access data from request body
  const catFact = req.body;
  //response to client
  return res.status(201).json({ message: 'success', fact: catFact });
}

//operation defines endpoint
const POST: Operation = {
  post: postFact,
};

//post api endpoint
POST.post.apiDoc = {
  summary: "",
  requestBody: {
    content: {
      json: "",
      schema: "",
      $ref: "",
    },
  },
  responses: {
    201: {
      description: "",
      content: {
        json: "",
        schema: "",
        $ref: "",
      },
    },
  },
};

router.post('/', POST.post);

export default router;
