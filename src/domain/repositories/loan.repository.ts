import { CreateLoanDto, PatchLoanDto, PaginationDto } from "@domain/dtos";
import { LoanEntity, PaginationEntity } from "@domain/entities";

export abstract class LoanRepository {
  abstract create(dto: CreateLoanDto): Promise<LoanEntity>;
  abstract patch(dto: PatchLoanDto): Promise<LoanEntity>;
  abstract return(id: string): Promise<boolean>;
  abstract findOne(id: string): Promise<LoanEntity>;
  abstract findMany(
    dto: PaginationDto,
  ): Promise<{ pagination: PaginationEntity; loans: LoanEntity[] }>;
}
