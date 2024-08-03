import { LoanDataSource } from "@domain/datasources";
import { CreateLoanDto, PatchLoanDto, MongoId, PaginationDto } from "@domain/dtos";
import { LoanEntity, PaginationEntity } from "@domain/entities";

export class LoanDataSourceImpl implements LoanDataSource {
    create(dto: CreateLoanDto): Promise<LoanEntity> {
        throw new Error("Method not implemented.");
    }
    patch(dto: PatchLoanDto): Promise<LoanEntity> {
        throw new Error("Method not implemented.");
    }
    return(id: MongoId): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    findOne(id: MongoId): Promise<LoanEntity> {
        throw new Error("Method not implemented.");
    }
    findMany(dto: PaginationDto): Promise<{ pagination: PaginationEntity; loans: LoanEntity[]; }> {
        throw new Error("Method not implemented.");
    }

    
}