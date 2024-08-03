import { CreateLoanDto, MongoId, PaginationDto, PatchLoanDto } from "@domain/dtos";
import { LoanEntity, PaginationEntity } from "@domain/entities";

export abstract class LoanDataSource {
  abstract create(dto: CreateLoanDto): Promise<LoanEntity>;
  abstract patch(dto: PatchLoanDto): Promise<LoanEntity>;
  abstract return(id: MongoId): Promise<boolean>;
  abstract findOne(id: MongoId): Promise<LoanEntity>;
  abstract findMany(
    dto: PaginationDto,
  ):Promise<{pagination: PaginationEntity, loans: LoanEntity[]}>
}
