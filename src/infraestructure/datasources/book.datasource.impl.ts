import { prisma } from '@config';
import { BookDataSource } from '@domain/datasources';
import { CreateBookDto, PatchBookDto, PaginationDto } from '@domain/dtos';
import { BookEntenty, PaginationEntity } from '@domain/entities';
import { CustomError } from '@handler-errors';
import { Prisma } from '@prisma/client';

export class BookDataSourceImpl implements BookDataSource {
  public includes = {
    author: {
      select: {
        id: true,
        name: true,
        lastName: true,
      },
    },
    genre: {
      select: { name: true, id: true },
    },
  };
  async create(dto: CreateBookDto): Promise<BookEntenty> {
    try {
      const book = await prisma.book.create({
        data: dto,
        include: this.includes,
      });
      return BookEntenty.fromObject(book);
    } catch (error) {
      throw CustomError.internalServer(`${error}`);
    }
  }
  async patch({ id, ...rest }: PatchBookDto): Promise<BookEntenty> {
    await this.findOne(id);
    if (!Object.keys(rest).length)
      throw CustomError.badRequest('There is nothing to modify');

    try {
      const book = await prisma.book.update({
        where: { id },
        data: { ...rest },
        include: this.includes,
      });
      return BookEntenty.fromObject(book);
    } catch (error) {
      throw CustomError.internalServer(`${error}`);
    }
  }
  async changeRecordStatus(id: string): Promise<Object> {
    const { isActive, title } = await this.findOne(id);
    try {
      await prisma.book.update({
        where: { id },
        data: { isActive: !isActive },
      });
      return {
        message: `The Book ${title} ${
          isActive ? 'disabled' : 'enabled'
        } succesfully`,
      };
    } catch (error) {
      throw CustomError.internalServer(`${error}`);
    }
  }

  async findOne(id: string): Promise<BookEntenty> {
    try {
      const book = await prisma.book.findFirst({
        where: { id },
        include: this.includes,
      });
      if (!book) throw CustomError.badRequest('Book not found');

      return BookEntenty.fromObject(book);
    } catch (error) {
      throw CustomError.internalServer(`${error}`);
    }
  }
  async findMany(
    dto: PaginationDto,
  ): Promise<{ pagination: PaginationEntity; books: BookEntenty[] }> {
    const where: Prisma.BookWhereInput = {};
    const { page, pageSize, search } = dto;
    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { author: { name: { contains: search, mode: 'insensitive' } } },
        { genre: { name: { contains: search, mode: 'insensitive' } } },
      ];
    }
    const [books, total] = await Promise.all([
      prisma.book.findMany({
        skip: PaginationEntity.dinamycOffset(page, pageSize!),
        take: pageSize,
        where,
      }),

      prisma.book.count({ where }),
    ]);

    const pagination = PaginationEntity.setPagination({
      ...dto,
      total,
    });
    const booksMapped = books.map(BookEntenty.fromObject);
    return { pagination, books: booksMapped };
  }
}
