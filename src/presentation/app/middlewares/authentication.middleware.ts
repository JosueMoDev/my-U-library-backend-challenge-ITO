import { NextFunction, Request, Response } from "express";
import { JsonWebTokenPlugin } from '@config';
import { GlobalContext } from "./globalContext";

export class AuthenticacationMiddleware {
  public static async validateAccessToken(
    request: Request,
    response: Response,
    next: NextFunction,
  ) {
    if (request.path.startsWith('/authentication')) return next();
    const bearerToken = request.headers['authorization'];
    if (!bearerToken)
      return response.status(400).json({ error: 'You should provide a token' });
    const bearer = bearerToken.split(' ');
    const token = bearer[1];
    const isTokenValid = await JsonWebTokenPlugin.validateToken(token!);
    if (!isTokenValid)
        return response.status(401).json({ error: 'Token not valid!!' });
    GlobalContext.setContext(isTokenValid);
    next();
  }
}
