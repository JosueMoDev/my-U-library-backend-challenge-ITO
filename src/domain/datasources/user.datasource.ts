import { CreateUserDto, MongoId, PaginationDto, PatchUserDto } from "@domain/dtos";
import { PaginationEntity, UserEntity } from "@domain/entities";

export abstract class UserDataSource {
  abstract create(dto: CreateUserDto): Promise<UserEntity>;
  abstract patch(dto: PatchUserDto): Promise<UserEntity>;
  abstract hardDelete(id: string): Promise<boolean>;
  abstract SoftDelete(id: string): Promise<boolean>;
  abstract findOne(id: string): Promise<UserEntity>;
  abstract findMany(
    dto: PaginationDto,
  ): Promise<{ pagination: PaginationEntity; user: UserEntity[] }>;
}