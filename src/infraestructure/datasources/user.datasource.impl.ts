import { UserDataSource } from '@domain/datasources';
import {
  CreateUserDto,
  PatchUserDto,
  MongoId,
  PaginationDto,
} from '@domain/dtos';
import { UserEntity, PaginationEntity } from '@domain/entities';

export class UserDataSourceImpl implements UserDataSource {
  create(dto: CreateUserDto): Promise<UserEntity> {
    throw new Error('Method not implemented.');
  }
  patch(dto: PatchUserDto): Promise<UserEntity> {
    throw new Error('Method not implemented.');
  }
  hardDelete(id: MongoId): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  SoftDelete(id: MongoId): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  findOne(id: MongoId): Promise<UserEntity> {
    throw new Error('Method not implemented.');
  }
  findMany(dto: PaginationDto): Promise<{ pagination: PaginationEntity; user: UserEntity[]; }> {
    throw new Error('Method not implemented.');
  }
 
}
