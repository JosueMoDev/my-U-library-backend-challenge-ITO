import {
  CreateBookDto,
  PaginationDto,
  PatchBookDto,
} from '@domain/dtos';
import { BookEntenty, PaginationEntity } from '@domain/entities';

export abstract class BookDataSource {
  abstract create(dto: CreateBookDto): Promise<BookEntenty>;
  abstract patch(dto: PatchBookDto): Promise<BookEntenty>;
  abstract softDelete(id: string): Promise<Object>;
  abstract hardDelete(id: string): Promise<Object>;
  abstract findOne(id: string): Promise<BookEntenty>;
  abstract findMany(
    dto: PaginationDto,
  ): Promise<{ pagination: PaginationEntity; books: BookEntenty[] }>;
}
