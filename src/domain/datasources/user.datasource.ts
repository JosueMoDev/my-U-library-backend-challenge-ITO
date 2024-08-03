import { CreateUserDto, MongoId, PaginationDto, PatchUserDto } from "@domain/dtos";
import { PaginationEntity, UserEntity } from "@domain/entities";

export abstract class UserDataSource {
  abstract create(dto: CreateUserDto): Promise<UserEntity>;
  abstract patch(dto: PatchUserDto): Promise<UserEntity>;
  abstract hardDelete(id: MongoId): Promise<boolean>;
  abstract SoftDelete(id: MongoId): Promise<boolean>;
  abstract findOne(id: MongoId): Promise<UserEntity>;
  abstract findMany(
    dto: PaginationDto,
  ): Promise<{ pagination: PaginationEntity; user: UserEntity[] }>;
}