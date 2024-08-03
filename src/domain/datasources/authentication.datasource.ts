import { UserEntity } from "@domain/entities";
import { LoginDto } from '@domain/dtos';

export abstract class AuthenticationDataSource {
    abstract loginWithEmailAndPassword(dto: LoginDto): Promise<{ token: string, user: UserEntity }>
    abstract validateToken(token: string): Promise<{ token: string, user: UserEntity }>
}