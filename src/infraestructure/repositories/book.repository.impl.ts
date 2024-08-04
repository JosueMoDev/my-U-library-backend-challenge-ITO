import { BookDataSource } from '@domain/datasources';
import { BookRepository } from '@domain/repositories';
import {
  CreateBookDto,
  PaginationDto,
  PatchBookDto,
} from '@domain/dtos';
import { BookEntenty, PaginationEntity } from '@domain/entities';

export class BookRepositoryImpl implements BookRepository {
  constructor(private readonly datasource: BookDataSource) {}
  async create(dto: CreateBookDto): Promise<BookEntenty> {
    return await this.datasource.create(dto);
  }
  async patch(dto: PatchBookDto): Promise<BookEntenty> {
    return await this.datasource.patch(dto);
  }
  async changeRecordStatus(id: string): Promise<Object> {
    return await this.datasource.changeRecordStatus(id);
  }

  async findOne(id: string): Promise<BookEntenty> {
    return await this.datasource.findOne(id);
  }
  async findMany(
    dto: PaginationDto,
  ): Promise<{ pagination: PaginationEntity; books: BookEntenty[] }> {
    return await this.datasource.findMany(dto);
  }
}
