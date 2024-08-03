import { CreateGenderDto, MongoId, PaginationDto, PatchGenderDto } from "@domain/dtos";
import { GenreService } from "./genre.service";
import { Request, Response } from "express";
import { HandlerError } from "@handler-errors";

export class GenreController {
  constructor(private readonly service: GenreService) {}

  create = (request: Request, response: Response) => {
    const [error, dto] = CreateGenderDto.validate(request.body);
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
    const [error, dto] = PatchGenderDto.validate(request.body);
    if (error) return response.status(400).json({ error });
    this.service
      .patch(dto!)
      .then((data) => response.json(data))
      .catch((error) => {
        const { statusCode, errorMessage } = HandlerError.hasError(error);
        return response.status(statusCode).json({ error: errorMessage });
      });
  };

  hardDelete = (request: Request, response: Response) => {
    const [error, dto] = MongoId.validate(request.params.id as any);
    if (error) return response.status(400).json({ error });
    this.service
      .hardDelete(dto!)
      .then((data) => response.json(data))
      .catch((error) => {
        const { statusCode, errorMessage } = HandlerError.hasError(error);
        return response.status(statusCode).json({ error: errorMessage });
      });
  };

  SoftDelete = (request: Request, response: Response) => {
    const [error, dto] = MongoId.validate(request.params.id as any);
    if (error) return response.status(400).json({ error });
    this.service
      .softDelete(dto!)
      .then((data) => response.json(data))
      .catch((error) => {
        const { statusCode, errorMessage } = HandlerError.hasError(error);
        return response.status(statusCode).json({ error: errorMessage });
      });
  };

  findOne = (request: Request, response: Response) => {
    const [error, dto] = MongoId.validate(request.params.id as any);
    if (error) return response.status(400).json({ error });
    this.service
      .findOne(dto!)
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