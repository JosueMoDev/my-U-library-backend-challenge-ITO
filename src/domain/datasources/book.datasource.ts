import {
  CreateBookDto,
  MongoId,
  PaginationDto,
  PatchBookDto,
} from '@domain/dtos';
import { BookEntenty, PaginationEntity } from '@domain/entities';

export abstract class BookDataSource {
  abstract create(dto: CreateBookDto): Promise<BookEntenty>;
  abstract patch(dto: PatchBookDto): Promise<BookEntenty>;
  abstract softDelete(id: MongoId): Promise<boolean>;
  abstract hardDelete(id: MongoId): Promise<boolean>;
  abstract findOne(id: MongoId): Promise<BookEntenty>;
  abstract findMany(
    dto: PaginationDto,
  ): Promise<{ pagination: PaginationEntity; books: BookEntenty[] }>;
}
