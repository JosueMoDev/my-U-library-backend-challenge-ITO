import { CreateGenreDto,PaginationDto, PatchGenreDto } from "@domain/dtos";
import { GenreEntenty, PaginationEntity } from "@domain/entities";

export abstract class GenreDataSource {
  abstract create(dto: CreateGenreDto): Promise<GenreEntenty>;
  abstract patch(dto: PatchGenreDto): Promise<GenreEntenty>;
  abstract changeRecordStatus(id: string): Promise<Object>;
  abstract findOne(id: string): Promise<GenreEntenty>;
  abstract findMany(
    dto: PaginationDto,
  ): Promise<{ pagination: PaginationEntity; genres: GenreEntenty[] }>;
}
