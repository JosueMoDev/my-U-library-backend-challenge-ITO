import { CreateUserDto, PatchUserDto, PaginationDto } from "@domain/dtos";
import { UserEntity, PaginationEntity, LoanEntity } from "@domain/entities";
import { UserRopository } from "@domain/repositories";

export class UserService {
  constructor(private readonly repository: UserRopository) {}

  create(dto: CreateUserDto): Promise<UserEntity> {
    return this.repository.create(dto);
  }
  patch(dto: PatchUserDto): Promise<UserEntity> {
    return this.repository.patch(dto);
  }
  changeRecordStatus(id: string): Promise<Object> {
    return this.repository.changeRecordStatus(id);
  }

  findOne(id: string): Promise<UserEntity> {
    return this.repository.findOne(id);
  }

  findMany(
    dto: PaginationDto,
  ): Promise<{ pagination: PaginationEntity; users: UserEntity[] }> {
    return this.repository.findMany(dto);
  }

  getLoanBooks(
    dto: PaginationDto,
    token: string,
  ): Promise<{
    pagination: PaginationEntity;
    loans: LoanEntity[];
  }> {
    return this.repository.getLoanBooks(dto, token);
  }
}