import { CreateAuthorDto, PaginationDto, PatchAuthorDto } from "@domain/dtos";
import { AuthorEntenty, PaginationEntity } from "@domain/entities";

export abstract class AuthorRepository {
  abstract create(dto: CreateAuthorDto): Promise<AuthorEntenty>;
  abstract patch(dto: PatchAuthorDto): Promise<AuthorEntenty>;
  abstract changeRecordStatus(id: string): Promise<Object>;
  abstract findOne(id: string): Promise<AuthorEntenty>;
  abstract findMany(
    dto: PaginationDto,
  ): Promise<{ pagination: PaginationEntity; authors: AuthorEntenty[] }>;
}