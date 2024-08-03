import { LoginDto } from '@domain/dtos';
import { AuthenticationService } from './authentication.service';
import { Request, Response } from 'express';
import { HandlerError } from '@handler-errors';

export class AuthenticationController {
  constructor(private readonly service: AuthenticationService) {}

  loginWithEmailAndPassword = (request: Request, response: Response) => {
    const [error, dto] = LoginDto.validate(request.body);
    if (error) return response.status(400).json({ error });
    this.service
      .loginWithEmailEndPassword(dto!)
      .then((data) => response.json(data))
      .catch((error) => {
        const { statusCode, errorMessage } = HandlerError.hasError(error);
        return response.status(statusCode).json({ error: errorMessage });
      });
  };

  validateToken = (request: Request, response: Response) => {
    const bearerToken = request.headers['authorization'];
    if (!bearerToken)
      return response.status(400).json({ error: ' NO token provided' });
    const token = bearerToken.split(' ');
    this.service
      .validateToken(token[1])
      .then((data) => response.json(data))
      .catch((error) => {
        const { statusCode, errorMessage } = HandlerError.hasError(error);
        return response.status(statusCode).json({ error: errorMessage });
      });
  };
}
