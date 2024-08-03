import { CreateUserDto,PaginationDto, PatchUserDto } from "@domain/dtos";
import { LoanEntity, PaginationEntity, UserEntity } from "@domain/entities";

export abstract class UserDataSource {
  abstract create(dto: CreateUserDto): Promise<UserEntity>;
  abstract patch(dto: PatchUserDto): Promise<UserEntity>;
  abstract hardDelete(id: string): Promise<Object>;
  abstract SoftDelete(id: string): Promise<Object>;
  abstract findOne(id: string): Promise<UserEntity>;
  abstract findMany(dto: PaginationDto): Promise<{ pagination: PaginationEntity, users: UserEntity[] }>;
  abstract getLoanBooks(dto:PaginationDto): Promise<{pagination: PaginationEntity, loans: LoanEntity[]}>
}