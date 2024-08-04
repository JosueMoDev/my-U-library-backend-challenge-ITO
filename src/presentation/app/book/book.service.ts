import { CreateBookDto, PatchBookDto, PaginationDto } from "@domain/dtos";
import { BookEntenty, PaginationEntity } from "@domain/entities";
import { BookRepository } from "@domain/repositories";

export class BookService {
  constructor(private readonly repository: BookRepository) {}
  async create(dto: CreateBookDto): Promise<BookEntenty> {
    return await this.repository.create(dto);
  }
  async patch(dto: PatchBookDto): Promise<BookEntenty> {
    return await this.repository.patch(dto);
  }
  async softDelete(id: string): Promise<Object> {
    return await this.repository.softDelete(id);
  }
  async hardDelete(id: string): Promise<Object> {
    return await this.repository.hardDelete(id);
  }
  async findOne(id: string): Promise<BookEntenty> {
    return await this.repository.findOne(id);
  }
  async findMany(
    dto: PaginationDto,
  ): Promise<{ pagination: PaginationEntity; books: BookEntenty[] }> {
    return await this.repository.findMany(dto);
  }
}