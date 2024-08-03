import { CreateAuthorDto, MongoId, PaginationDto, PatchAuthorDto } from "@domain/dtos";
import { AuthorEntenty, PaginationEntity } from "@domain/entities";
import { AuthorRepository } from "@domain/repositories";

export class AuthorService {
  constructor(private readonly repository: AuthorRepository) {}
  async create(dto: CreateAuthorDto): Promise<AuthorEntenty> {
    return await this.repository.create(dto);
  }
  async patch(dto: PatchAuthorDto): Promise<AuthorEntenty> {
    return await this.repository.patch(dto);
  }
  async softDelete(id: MongoId): Promise<boolean> {
    return await this.repository.softDelete(id);
  }
  async hardDelete(id: MongoId): Promise<boolean> {
    return await this.repository.hardDelete(id);
  }
  async findOne(id: MongoId): Promise<AuthorEntenty> {
    return await this.repository.findOne(id);
  }
  async findMany(
    dto: PaginationDto,
  ): Promise<{ pagination: PaginationEntity; authors: AuthorEntenty[] }> {
    return await this.repository.findMany(dto);
  }
}