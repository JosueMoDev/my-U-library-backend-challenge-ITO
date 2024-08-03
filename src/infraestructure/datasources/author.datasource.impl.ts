import { AuthorDataSource } from "@domain/datasources";
import { CreateAuthorDto, PatchAuthorDto, MongoId, PaginationDto } from "@domain/dtos";
import { AuthorEntenty, PaginationEntity } from "@domain/entities";

export class AuthorDataSourceImpl implements AuthorDataSource {
    create(dto: CreateAuthorDto): Promise<AuthorEntenty> {
        throw new Error("Method not implemented.");
    }
    patch(dto: PatchAuthorDto): Promise<AuthorEntenty> {
        throw new Error("Method not implemented.");
    }
    softDelete(id: MongoId): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    hardDelete(id: MongoId): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    findOne(id: MongoId): Promise<AuthorEntenty> {
        throw new Error("Method not implemented.");
    }
    findMany(dto: PaginationDto): Promise<{ pagination: PaginationEntity; authors: AuthorEntenty[]; }> {
        throw new Error("Method not implemented.");
    }
    
}