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
    const [error, id] = MongoId.validate(request.params.id);
    if (error) return response.status(400).json({ error });
    this.service
      .hardDelete(id!)
      .then((data) => response.json(data))
      .catch((error) => {
        const { statusCode, errorMessage } = HandlerError.hasError(error);
        console.log(statusCode, errorMessage)
        return response.status(statusCode).json({ error: errorMessage });
      });
  };

  SoftDelete = (request: Request, response: Response) => {
    const [error, id] = MongoId.validate(request.params.id);
    if (error) return response.status(400).json({ error });
    this.service
      .softDelete(id!)
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
      request.query,
      request.originalUrl,
    );
    if (error) return response.status(400).json({ error });
    this.service
      .findMany(dto!)
      .then((data) => response.json(data))
      .catch((error) => {
        const { statusCode, errorMessage } = HandlerError.hasError(error);
        console.log(statusCode, error)
        return response.status(statusCode).json({ error: errorMessage });
      });
  };
}