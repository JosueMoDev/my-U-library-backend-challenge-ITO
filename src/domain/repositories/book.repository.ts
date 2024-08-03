import { CreateBookDto, PatchBookDto, MongoId, PaginationDto } from "@domain/dtos";
import { BookEntenty, PaginationEntity } from "@domain/entities";

export abstract class BookRepository {
  abstract create(dto: CreateBookDto): Promise<BookEntenty>;
  abstract patch(dto: PatchBookDto): Promise<BookEntenty>;
  abstract softDelete(id: MongoId): Promise<boolean>;
  abstract hardDelete(id: MongoId): Promise<boolean>;
  abstract findOne(id: MongoId): Promise<BookEntenty>;
  abstract findMany(
    dto: PaginationDto,
  ): Promise<{ pagination: PaginationEntity; books: BookEntenty[] }>;
}
