import { BcryptJsPlugin, JsonWebTokenPlugin, prisma } from '@config';
import { AuthenticationDataSource } from '@domain/datasources';
import { LoginDto } from '@domain/dtos';
import { UserEntity } from '@domain/entities';
import { CustomError } from '@handler-errors';
import { UserRepositoryImpl } from '@infraestructure/repositoriesimpl';

export class AuthenticationDataSourceImpl implements AuthenticationDataSource {
  constructor(private datasourceImpl: UserRepositoryImpl) {}
  async loginWithEmailAndPassword({
    email,
    password: passwordConfirmation,
  }: LoginDto): Promise<{ token: string; user: UserEntity }> {
    const user = await this.datasourceImpl.findOneByEmail(email);
    const hasMatch = BcryptJsPlugin.comparePassword(
      passwordConfirmation,
      user.password,
    );
    if (!hasMatch) throw CustomError.badRequest('Wrong credentials');
    const token = await JsonWebTokenPlugin.generateToken({
      id: user.id,
      role: user.role,
    });
    if (!token) throw CustomError.internalServer('Error while creating token');
    return { user, token };
  }

  async validateToken(
    token: string,
  ): Promise<{ token: string; user: UserEntity }> {
    const isValidToken = await JsonWebTokenPlugin.validateToken(token);

    if (!isValidToken) throw CustomError.badRequest('Token not valid');
    const user = await this.datasourceImpl.findOne(isValidToken.id);
    const validatedToken = await JsonWebTokenPlugin.generateToken({
      id: user.id,
      role: user.role,
    });

    if (!validatedToken) throw CustomError.internalServer('Error while creating token');

    return {
      user: UserEntity.fromObject(user),
      token: validatedToken,
    };
  }
}
