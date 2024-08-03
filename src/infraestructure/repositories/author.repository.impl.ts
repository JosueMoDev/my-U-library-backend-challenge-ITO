import { AuthorDataSource } from "@domain/datasources";
import { AuthorRepository } from "@domain/repositories";
import { CreateAuthorDto, PatchAuthorDto,  PaginationDto } from "@domain/dtos";
import { AuthorEntenty, PaginationEntity } from "@domain/entities";

export class AuthorRepositoryImpl implements AuthorRepository{
    constructor(private readonly datasource: AuthorDataSource){}
    async create(dto: CreateAuthorDto): Promise<AuthorEntenty> {
        return await this.datasource.create(dto);
    }
    async patch(dto: PatchAuthorDto): Promise<AuthorEntenty> {
        return await this.datasource.patch(dto);
    }
    async softDelete(id: string): Promise<Object> {
        return await this.datasource.softDelete(id);
    }
    async hardDelete(id: string): Promise<Object> {
        return await this.datasource.hardDelete(id);
    }
    async findOne(id: string): Promise<AuthorEntenty> {
        return await this.datasource.findOne(id);
        
    }
    async findMany(dto: PaginationDto): Promise<{ pagination: PaginationEntity; authors: AuthorEntenty[]; }> {
        return await this.datasource.findMany(dto);
    }
}