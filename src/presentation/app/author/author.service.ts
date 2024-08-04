import { CreateAuthorDto, PaginationDto, PatchAuthorDto } from "@domain/dtos";
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
  async changeRecordStatus(id: string): Promise<Object> {
    return await this.repository.changeRecordStatus(id);
  }

  async findOne(id: string): Promise<AuthorEntenty> {
    return await this.repository.findOne(id);
  }
  async findMany(
    dto: PaginationDto,
  ): Promise<{ pagination: PaginationEntity; authors: AuthorEntenty[] }> {
    return await this.repository.findMany(dto);
  }
}