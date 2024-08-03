import { LoginDto } from "@domain/dtos";
import { AuthorEntenty, UserEntity } from "@domain/entities";
import { AuthenticationRepository } from "@domain/repositories";

export class AuthenticationService {
  constructor(private readonly repository: AuthenticationRepository) {}
  async loginWithEmailEndPassword(dto: LoginDto): Promise<{token: string, user: UserEntity}> {
    return await this.repository.loginWithEmailAndPassword(dto);
  }
  async validateToken(token: string): Promise<{token: string, user: UserEntity}> {
    return await this.repository.validateToken(token);
  }
}