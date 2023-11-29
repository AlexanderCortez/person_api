import { Request, Response, NextFunction } from 'express';

const responses = (_: Request, res: Response, next: NextFunction) => {

  res.sendSuccess = (content: unknown) => {
    const data = content || {
      message: 'Success',
    };

    return res.send({ data });
  };

  res.sendNotFound = (content: unknown) => {
    const message = content || 'Not found';

    return res.status(404).send({
      message,
    });
  };

  res.sendError = (content: unknown) => {
    const message = content || 'Server error';

    return res.status(500).send({ message });
  };

  next();
};

export default responses;
