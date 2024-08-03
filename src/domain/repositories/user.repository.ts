import { CreateUserDto, PatchUserDto, MongoId, PaginationDto } from "@domain/dtos";
import { UserEntity, PaginationEntity } from "@domain/entities";

export abstract class UserRopository {
  abstract create(dto: CreateUserDto): Promise<UserEntity>;
  abstract patch(dto: PatchUserDto): Promise<UserEntity>;
  abstract hardDelete(id: MongoId): Promise<boolean>;
  abstract SoftDelete(id: MongoId): Promise<boolean>;
  abstract findOne(id: MongoId): Promise<UserEntity>;
  abstract findMany(
    dto: PaginationDto,
  ): Promise<{ pagination: PaginationEntity; user: UserEntity[] }>;
}
