// src/lib/init-middleware.ts

import { NextApiRequest, NextApiResponse } from 'next';
import Cors from 'cors';

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function initMiddleware(middleware: any) {
  return (req: NextApiRequest, res: NextApiResponse) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result: any) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    });
}

// Initialize the CORS middleware
const cors = initMiddleware(
  Cors({
    methods: ['GET', 'POST', 'OPTIONS'],
    origin: '*', // Allow all origins
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  })
);

export default cors;
