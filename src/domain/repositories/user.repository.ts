import { CreateUserDto, PatchUserDto, PaginationDto } from "@domain/dtos";
import { UserEntity, PaginationEntity, LoanEntity } from "@domain/entities";

export abstract class UserRopository {
  abstract create(dto: CreateUserDto): Promise<UserEntity>;
  abstract patch(dto: PatchUserDto): Promise<UserEntity>;
  abstract hardDelete(id: string): Promise<Object>;
  abstract SoftDelete(id: string): Promise<Object>;
  abstract findOne(id: string): Promise<UserEntity>;
  abstract findOneByEmail(email: string): Promise<UserEntity>;
  abstract findMany(dto: PaginationDto): Promise<{ pagination: PaginationEntity, users: UserEntity[] }>;
  abstract getLoanBooks(dto: PaginationDto): Promise<{ pagination: PaginationEntity, loans: LoanEntity[] }>;
}
