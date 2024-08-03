import { CreateUserDto, PatchUserDto, PaginationDto } from "@domain/dtos";
import { UserEntity, PaginationEntity } from "@domain/entities";
import { UserRopository } from "@domain/repositories";

export class UserService {
  constructor(private readonly repository: UserRopository) {}
  async create(dto: CreateUserDto): Promise<UserEntity> {
    return await this.repository.create(dto);
  }
  async patch(dto: PatchUserDto): Promise<UserEntity> {
    return await this.repository.patch(dto);
  }
  async hardDelete(id: string): Promise<boolean> {
    return await this.repository.hardDelete(id);
  }
  async SoftDelete(id: string): Promise<boolean> {
    return await this.repository.SoftDelete(id);
  }
  async findOne(id: string): Promise<UserEntity> {
    return await this.repository.findOne(id);
  }
  async findMany(
    dto: PaginationDto,
  ): Promise<{ pagination: PaginationEntity; user: UserEntity[] }> {
    return await this.repository.findMany(dto);
  }
}