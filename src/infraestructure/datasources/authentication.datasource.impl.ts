import { AuthenticationDataSource } from "@domain/datasources";
import { LoginDto } from "@domain/dtos";
import { UserEntity } from "@domain/entities";

export class AuthenticationDataSourceImpl implements AuthenticationDataSource {
    loginWithEmailAndPassword(dto: LoginDto): Promise<{ token: string; user: UserEntity; }> {
        throw new Error("Login No implementado.");
    }
    validateToken(token: string): Promise<{ token: string; user: UserEntity; }> {
        throw new Error("Method not implemented.");
    }

}