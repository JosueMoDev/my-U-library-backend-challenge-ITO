import { BookDataSource } from "@domain/datasources";
import { CreateBookDto, PatchBookDto, MongoId, PaginationDto } from "@domain/dtos";
import { BookEntenty, PaginationEntity } from "@domain/entities";

export class BookDataSourceImpl implements BookDataSource {
    create(dto: CreateBookDto): Promise<BookEntenty> {
        throw new Error("Method not implemented.");
    }
    patch(dto: PatchBookDto): Promise<BookEntenty> {
        throw new Error("Method not implemented.");
    }
    softDelete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    hardDelete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    findOne(id: string): Promise<BookEntenty> {
        throw new Error("Method not implemented.");
    }
    findMany(dto: PaginationDto): Promise<{ pagination: PaginationEntity; books: BookEntenty[]; }> {
        throw new Error("Method not implemented.");
    }
 
    
}