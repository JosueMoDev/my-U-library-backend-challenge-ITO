import { AuthorDataSource } from "@domain/datasources";
import { CreateAuthorDto, PatchAuthorDto,  PaginationDto } from "@domain/dtos";
import { AuthorEntenty, PaginationEntity } from "@domain/entities";

export class AuthorDataSourceImpl implements AuthorDataSource {
    create(dto: CreateAuthorDto): Promise<AuthorEntenty> {
        throw new Error("Method not implemented.");
    }
    patch(dto: PatchAuthorDto): Promise<AuthorEntenty> {
        throw new Error("Method not implemented.");
    }
    softDelete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    hardDelete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    findOne(id: string): Promise<AuthorEntenty> {
        throw new Error("Method not implemented.");
    }
    findMany(dto: PaginationDto): Promise<{ pagination: PaginationEntity; authors: AuthorEntenty[]; }> {
        throw new Error("Method not implemented.");
    }
 
    
}