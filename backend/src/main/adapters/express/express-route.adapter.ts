import { Request, Response } from 'express';
import { Controller, HttpRequest } from '../../../controllers/protocols';

export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body,
      query: req.query,
    };
    if (req.user) {
      httpRequest.user = {
        email: req.user.email || null,
        role: req.user.role || null,
        id: req.user.id || null,
      };
    }
    const httpResponse = await controller.handle(httpRequest);
    if (httpResponse.statusCode >= 200 || httpResponse.statusCode <= 299) {
      res.status(httpResponse.statusCode).json(httpResponse.body);
    } else {
      res.status(httpResponse.statusCode).json({
        error: httpResponse.body.message,
      });
    }
  };
};
