import { GenreRepository } from "@domain/repositories";
import { GenreDataSource } from "@domain/datasources";
import { CreateGenderDto, PatchGenderDto, PaginationDto } from "@domain/dtos";
import { GenreEntenty, PaginationEntity } from "@domain/entities";

export class GenreRepositoryImpl implements GenreRepository {
  constructor(private readonly datasource: GenreDataSource) {}
  async create(dto: CreateGenderDto): Promise<GenreEntenty> {
    return await this.datasource.create(dto);
  }
  async patch(dto: PatchGenderDto): Promise<GenreEntenty> {
    return await this.datasource.patch(dto);
  }
  async softDelete(id: string): Promise<Object> {
    return await this.datasource.softDelete(id);
  }
  async hardDelete(id: string): Promise<Object> {
    return await this.datasource.hardDelete(id);
  }
  async findOne(id: string): Promise<GenreEntenty> {
    return await this.datasource.findOne(id);
  }
  async findMany(
    dto: PaginationDto,
  ): Promise<{ pagination: PaginationEntity; genres: GenreEntenty[] }> {
    return await this.datasource.findMany(dto);
  }
}