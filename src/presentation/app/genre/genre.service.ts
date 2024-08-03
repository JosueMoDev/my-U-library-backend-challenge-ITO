import { CreateGenderDto, PatchGenderDto, MongoId, PaginationDto } from "@domain/dtos";
import { GenreEntenty, PaginationEntity } from "@domain/entities";
import { GenreRepository } from "@domain/repositories";

export class GenreService {
  constructor(private readonly repository: GenreRepository) {}
  async create(dto: CreateGenderDto): Promise<GenreEntenty> {
    return await this.repository.create(dto);
  }
  async patch(dto: PatchGenderDto): Promise<GenreEntenty> {
    return await this.repository.patch(dto);
  }
  async softDelete(id: MongoId): Promise<boolean> {
    return await this.repository.softDelete(id);
  }
  async hardDelete(id: MongoId): Promise<boolean> {
    return await this.repository.hardDelete(id);
  }
  async findOne(id: MongoId): Promise<GenreEntenty> {
    return await this.repository.findOne(id);
  }
  async findMany(
    dto: PaginationDto,
  ): Promise<{ pagination: PaginationEntity; genres: GenreEntenty[] }> {
    return await this.repository.findMany(dto);
  }
}