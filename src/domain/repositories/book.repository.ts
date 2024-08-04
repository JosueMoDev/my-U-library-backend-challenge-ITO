import { CreateBookDto, PatchBookDto, PaginationDto } from "@domain/dtos";
import { BookEntenty, PaginationEntity } from "@domain/entities";

export abstract class BookRepository {
  abstract create(dto: CreateBookDto): Promise<BookEntenty>;
  abstract patch(dto: PatchBookDto): Promise<BookEntenty>;
  abstract changeRecordStatus(id: string): Promise<Object>;
  abstract findOne(id: string): Promise<BookEntenty>;
  abstract findMany(
    dto: PaginationDto,
  ): Promise<{ pagination: PaginationEntity; books: BookEntenty[] }>;
}
