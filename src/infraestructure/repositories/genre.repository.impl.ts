import { GenreRepository } from "@domain/repositories";
import { GenreDataSource } from "@domain/datasources";
import { CreateGenreDto, PatchGenreDto, PaginationDto } from "@domain/dtos";
import { GenreEntenty, PaginationEntity } from "@domain/entities";

export class GenreRepositoryImpl implements GenreRepository {
  constructor(private readonly datasource: GenreDataSource) {}
  async create(dto: CreateGenreDto): Promise<GenreEntenty> {
    return await this.datasource.create(dto);
  }
  async patch(dto: PatchGenreDto): Promise<GenreEntenty> {
    return await this.datasource.patch(dto);
  }
  async changeRecordStatus(id: string): Promise<Object> {
    return await this.datasource.changeRecordStatus(id);
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