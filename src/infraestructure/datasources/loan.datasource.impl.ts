import { prisma } from '@config';
import { LoanDataSource } from '@domain/datasources';
import { CreateLoanDto, PatchLoanDto, PaginationDto } from '@domain/dtos';
import { LoanEntity, PaginationEntity } from '@domain/entities';
import { CustomError } from '@handler-errors';
import { Prisma } from '@prisma/client';

export class LoanDataSourceImpl implements LoanDataSource {
  public includes = {
    book: {
      select: {
        id: true,
        title: true,
        author: {
          select: {
            name: true,
            lastName: true,
          },
        },
      },
    },
    user: {
      select: { name: true, email: true, lastName: true },
    },
  };
  async create(dto: CreateLoanDto): Promise<LoanEntity> {
    try {
      const loan = await prisma.$transaction(async (prisma) => {
        const book = await prisma.book.findUnique({
          where: { id: dto.bookId },
        });
        if (!book) throw CustomError.badRequest('Book not found.');
        const { isActive, title, stock } = book;
        if (!isActive || stock < 1)
          throw CustomError.badRequest(
            `The book '${title}' is not available for loan.`,
          );

        const newLoan = await prisma.loan.create({
          data: dto,
          include: this.includes,
        });
        await prisma.book.update({
          where: { id: newLoan.book.id },
          data: {
            stock: stock - 1,
            isActive: stock - 1 < 0,
          },
        });

        return newLoan;
      });
      return LoanEntity.fromObject(loan);
    } catch (error) {
      throw CustomError.internalServer(`${error}`);
    }
  }
  async patch({ id, ...rest }: PatchLoanDto): Promise<LoanEntity> {
    await this.findOne(id);
    if (!Object.keys(rest).length)
      throw CustomError.badRequest('There is nothing to modify');

    try {
      const loan = await prisma.loan.update({
        where: { id },
        data: { ...rest },
        include: this.includes,
      });
      return LoanEntity.fromObject(loan);
    } catch (error) {
      throw CustomError.internalServer(`${error}`);
    }
  }
  async return(id: string): Promise<Object> {
    await this.findOne(id);
    try {
      const { user, book } = await prisma.$transaction(async (prisma) => {
        const updatedLoan = await prisma.loan.update({
          where: { id },
          data: { loanState: 'RETURNED', returnedAt: new Date() },
          include: {
            ...this.includes,
            book: {
              select: { stock: true, isActive: true, id: true, title: true },
            },
          },
        });
        await prisma.book.update({
          where: { id: updatedLoan.book.id },
          data: {
            stock: updatedLoan.book.stock + 1,
            isActive: updatedLoan.book.stock + 1 >= 1,
          },
        });

        return updatedLoan;
      });
      return {
        messege: `user '${user.email}' has returned book '${book.title}'`,
      };
    } catch (error) {
      throw CustomError.internalServer(`${error}`);
    }
  }
  async findOne(id: string): Promise<LoanEntity> {
    try {
      const loan = await prisma.loan.findFirst({
        where: { id },
        include: this.includes,
      });
      if (!loan) throw CustomError.badRequest('Loan not found');
      return LoanEntity.fromObject(loan);
    } catch (error) {
      throw CustomError.internalServer(`${error}`);
    }
  }
  async findMany(
    dto: PaginationDto,
  ): Promise<{ pagination: PaginationEntity; loans: LoanEntity[] }> {
    const { page, pageSize, search } = dto;
    const where: Prisma.LoanWhereInput = search
      ? {
          loanState: 'BORROWED',
          user: { name: { contains: search, mode: 'insensitive' } },
        }
      : {};
    
    const [loans, total] = await Promise.all([
      prisma.loan.findMany({
        skip: PaginationEntity.dinamycOffset(page, pageSize!),
        take: pageSize,
        where,
        include: this.includes,
      }),
      prisma.loan.count({where}),
    ]);

    const pagination = PaginationEntity.setPagination({
      ...dto,
      total,
    });
    const loansMapped = loans.map(LoanEntity.fromObject);
    return { pagination, loans: loansMapped };
  }
}
