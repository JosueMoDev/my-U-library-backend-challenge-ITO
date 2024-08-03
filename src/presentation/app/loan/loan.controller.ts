import {
  CreateLoanDto,
  MongoId,
  PaginationDto,
  PatchLoanDto,
} from '@domain/dtos';
import { LoanService } from './loan.service';
import { HandlerError } from '@handler-errors';
import { Request, Response } from 'express';

export class LoanController {
  constructor(private readonly service: LoanService) {}

  create = (request: Request, response: Response) => {
    const [error, dto] = CreateLoanDto.validate(request.body);
    if (error) return response.status(400).json({ error });
    this.service
      .create(dto!)
      .then((data) => response.json(data))
      .catch((error) => {
        const { statusCode, errorMessage } = HandlerError.hasError(error);
        return response.status(statusCode).json({ error: errorMessage });
      });
  };
  patch = (request: Request, response: Response) => {
    const [error, dto] = PatchLoanDto.validate(request.body);
    if (error) return response.status(400).json({ error });
    this.service
      .patch(dto!)
      .then((data) => response.json(data))
      .catch((error) => {
        const { statusCode, errorMessage } = HandlerError.hasError(error);
        return response.status(statusCode).json({ error: errorMessage });
      });
  };
  return = (request: Request, response: Response) => {
    const [error, id] = MongoId.validate(request.params.id);
    if (error) return response.status(400).json({ error });
    this.service
      .return(id!)
      .then((data) => response.json(data))
      .catch((error) => {
        const { statusCode, errorMessage } = HandlerError.hasError(error);
        return response.status(statusCode).json({ error: errorMessage });
      });
  };
  findOne = (request: Request, response: Response) => {
    const [error, id] = MongoId.validate(request.params.id);
    if (error) return response.status(400).json({ error });
    this.service
      .findOne(id!)
      .then((data) => response.json(data))
      .catch((error) => {
        const { statusCode, errorMessage } = HandlerError.hasError(error);
        return response.status(statusCode).json({ error: errorMessage });
      });
  };
  findMany = (request: Request, response: Response) => {
    const [error, dto] = PaginationDto.validate(
      request.body,
      request.originalUrl,
    );
    if (error) return response.status(400).json({ error });
    this.service
      .findMany(dto!)
      .then((data) => response.json(data))
      .catch((error) => {
        const { statusCode, errorMessage } = HandlerError.hasError(error);
        return response.status(statusCode).json({ error: errorMessage });
      });
  };
}
