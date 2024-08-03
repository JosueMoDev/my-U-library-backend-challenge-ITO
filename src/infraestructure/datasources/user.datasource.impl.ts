import { BcryptJsPlugin, prisma } from '@config';
import { UserDataSource } from '@domain/datasources';
import {
  CreateUserDto,
  PatchUserDto,
  PaginationDto,
} from '@domain/dtos';
import { UserEntity, PaginationEntity } from '@domain/entities';
import { CustomError } from '@handler-errors';

export class UserDataSourceImpl implements UserDataSource {
  async create(dto: CreateUserDto): Promise<UserEntity> {
     await this.findOne(dto.email);

     try {
       const hashPassword = BcryptJsPlugin.hashPassword(dto.password);
       const saveAccount = await prisma.user.create({
         data: {
           ...dto,
           password: hashPassword,
         }
       });
       return UserEntity.fromObject(saveAccount);
     } catch (error) {
       throw CustomError.internalServer(`${error}`);
     }
  }
  patch(dto: PatchUserDto): Promise<UserEntity> {
    throw new Error('Method not implemented.');
  }
  hardDelete(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  SoftDelete(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  async findOne(id: string): Promise<UserEntity> {
      const existUser = await prisma.user.findFirst({
        where: {id},
      });
      if (!existUser) throw CustomError.badRequest('Any user was found');
      return UserEntity.fromObject(existUser);
  }
  findMany(dto: PaginationDto): Promise<{ pagination: PaginationEntity; user: UserEntity[]; }> {
    throw new Error('Method not implemented.');
  }
 
}
