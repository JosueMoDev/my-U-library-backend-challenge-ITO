import { CreateGenderDto,PaginationDto, PatchGenderDto } from "@domain/dtos";
import { GenreEntenty, PaginationEntity } from "@domain/entities";

export abstract class GenreDataSource {
  abstract create(dto: CreateGenderDto): Promise<GenreEntenty>;
  abstract patch(dto: PatchGenderDto): Promise<GenreEntenty>;
  abstract softDelete(id: string): Promise<boolean>;
  abstract hardDelete(id: string): Promise<boolean>;
  abstract findOne(id: string): Promise<GenreEntenty>;
  abstract findMany(
    dto: PaginationDto,
  ): Promise<{ pagination: PaginationEntity; genres: GenreEntenty[] }>;
}
