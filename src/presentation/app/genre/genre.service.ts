import { CreateGenderDto, PatchGenderDto, PaginationDto } from "@domain/dtos";
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
  async changeRecordStatus(id: string): Promise<Object> {
    return await this.repository.changeRecordStatus(id);
  }

  async findOne(id: string): Promise<GenreEntenty> {
    return await this.repository.findOne(id);
  }
  async findMany(
    dto: PaginationDto,
  ): Promise<{ pagination: PaginationEntity; genres: GenreEntenty[] }> {
    return await this.repository.findMany(dto);
  }
}