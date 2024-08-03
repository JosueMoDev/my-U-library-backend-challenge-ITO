import { UserDataSource } from "@domain/datasources";
import { UserRopository } from "@domain/repositories";
import { CreateUserDto, PatchUserDto, MongoId, PaginationDto } from "@domain/dtos";
import { UserEntity, PaginationEntity } from "@domain/entities";

export class UserRepositoryImpl implements UserRopository {
  constructor(private readonly datasource: UserDataSource) {}
  async create(dto: CreateUserDto): Promise<UserEntity> {
    return await this.datasource.create(dto);
  }
  async patch(dto: PatchUserDto): Promise<UserEntity> {
    return await this.datasource.patch(dto);
  }
  async hardDelete(id: MongoId): Promise<boolean> {
    return await this.datasource.hardDelete(id);
  }
  async SoftDelete(id: MongoId): Promise<boolean> {
    return await this.datasource.SoftDelete(id);
  }
  async findOne(id: MongoId): Promise<UserEntity> {
    return await this.datasource.findOne(id);
  }
  async findMany(
    dto: PaginationDto,
  ): Promise<{ pagination: PaginationEntity; user: UserEntity[] }> {
    return await this.datasource.findMany(dto);
  }
}