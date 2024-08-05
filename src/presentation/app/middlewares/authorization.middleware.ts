import { CustomError } from '@handler-errors';
import { ROLE } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';
import { GlobalContext } from './globalContext';

export class AuthorizationMidddleware {
  static get hasPermission() {
    return (request: Request, response: Response, next: NextFunction) => {
      const user = GlobalContext.getGlobalContext();
      if (!user) return response.status(401).json({ error: 'User not authenticated' });;
      if ( ROLE.LIBRARIAN !== user.role) {
        return response.status(403).json({ error: 'Access denied' });
      }
      next();
    };
  }
}
