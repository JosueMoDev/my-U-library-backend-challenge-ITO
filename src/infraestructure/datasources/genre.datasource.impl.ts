import { GenreDataSource } from "@domain/datasources";
import { CreateGenderDto, PatchGenderDto, MongoId, PaginationDto } from "@domain/dtos";
import { GenreEntenty, PaginationEntity } from "@domain/entities";

export class GenreDataSourceImpl implements GenreDataSource {
    create(dto: CreateGenderDto): Promise<GenreEntenty> {
        throw new Error("Method not implemented.");
    }
    patch(dto: PatchGenderDto): Promise<GenreEntenty> {
        throw new Error("Method not implemented.");
    }
    softDelete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    hardDelete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    findOne(id: string): Promise<GenreEntenty> {
        throw new Error("Method not implemented.");
    }
    findMany(dto: PaginationDto): Promise<{ pagination: PaginationEntity; genres: GenreEntenty[]; }> {
        throw new Error("Method not implemented.");
    }
    
}