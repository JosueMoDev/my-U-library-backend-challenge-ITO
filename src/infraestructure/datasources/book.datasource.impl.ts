import { prisma } from '@config';
import { BookDataSource } from '@domain/datasources';
import { CreateBookDto, PatchBookDto, PaginationDto } from '@domain/dtos';
import { BookEntenty, PaginationEntity } from '@domain/entities';
import { CustomError } from '@handler-errors';

export class BookDataSourceImpl implements BookDataSource {
  async create(dto: CreateBookDto): Promise<BookEntenty> {
    try {
      const book = await prisma.book.create({
        data: dto,
        include: { author: true, genre: true },
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
        include: { author: true, genre: true },
      });
      return BookEntenty.fromObject(book);
    } catch (error) {
      throw CustomError.internalServer(`${error}`);
    }
  }
  async softDelete(id: string): Promise<Object> {
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
  async hardDelete(id: string): Promise<Object> {
    const { title } = await this.findOne(id);
    try {
      await prisma.author.delete({ where: { id } });
      return {
        message: `The Book ${title} deleted successfully`,
      };
    } catch (error) {
      throw CustomError.internalServer(`${error}`);
    }
  }
  async findOne(id: string): Promise<BookEntenty> {
    try {
      const book = await prisma.book.findFirst({
        where: { id },
        include: { author: true, genre: true },
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
    const { page, pageSize } = dto;
    const [books, total] = await Promise.all([
      prisma.book.findMany({
        skip: PaginationEntity.dinamycOffset(page, pageSize),
        take: pageSize,
        include: {
          author: true,
          genre: true,
        },
      }),
      prisma.book.count(),
    ]);

    const pagination = PaginationEntity.setPagination({
      ...dto,
      total,
    });
    const booksMapped = books.map(BookEntenty.fromObject);
    return { pagination, books: booksMapped };
  }
}
