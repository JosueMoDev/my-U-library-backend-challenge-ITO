import { UserDataSource } from "@domain/datasources";
import { UserRopository } from "@domain/repositories";
import { CreateUserDto, PatchUserDto, PaginationDto } from "@domain/dtos";
import { UserEntity, PaginationEntity, LoanEntity } from "@domain/entities";

export class UserRepositoryImpl implements UserRopository {
  constructor(private readonly datasource: UserDataSource) {}

  create(dto: CreateUserDto): Promise<UserEntity> {
    return this.datasource.create(dto);
  }
  patch(dto: PatchUserDto): Promise<UserEntity> {
    return this.datasource.patch(dto);
  }
  hardDelete(id: string): Promise<Object> {
    return this.datasource.hardDelete(id);
  }
  SoftDelete(id: string): Promise<Object> {
    return this.datasource.SoftDelete(id);
  }
  findOne(id: string): Promise<UserEntity> {
    return this.datasource.findOne(id);
  }
  findMany(
    dto: PaginationDto,
  ): Promise<{ pagination: PaginationEntity; users: UserEntity[] }> {
    return this.datasource.findMany(dto);
  }

  getLoanBooks(dto: PaginationDto): Promise<{
    pagination: PaginationEntity;
    loans: LoanEntity[];
  }> {
    return this.datasource.getLoanBooks(dto);
  }
}