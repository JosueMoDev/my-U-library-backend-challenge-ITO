import { AuthenticationDataSource } from "@domain/datasources";
import { AuthenticationRepository } from "@domain/repositories";
import { LoginDto } from "@domain/dtos";
import { UserEntity } from "@domain/entities";

export class AuthenticationRepositoryImpl implements AuthenticationRepository {

    constructor( private readonly datasource: AuthenticationDataSource){}

    async loginWithEmailAndPassword(dto: LoginDto): Promise<{ token: string; user: UserEntity; }> {
        return await this.datasource.loginWithEmailAndPassword(dto);
    }
    async validateToken(token: string): Promise<{ token: string; user: UserEntity; }> {
        return await this.datasource.validateToken(token);
    }
    
}