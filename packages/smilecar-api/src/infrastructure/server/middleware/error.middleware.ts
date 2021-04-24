import { NextFunction, Request, Response } from 'express';

export const errorMiddleware = async (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    return next(err);
  }
  return res.status(500).send({ message: 'Internal Server Error' });
};
