import { LoginDto } from "@domain/dtos";
import { UserEntity } from "@domain/entities";

export abstract class AuthenticationRepository {
    abstract loginWithEmailAndPassword(dto: LoginDto): Promise<{ token: string, user: UserEntity }>
    abstract validateToken(token: string): Promise<{ token: string, user: UserEntity }>
}