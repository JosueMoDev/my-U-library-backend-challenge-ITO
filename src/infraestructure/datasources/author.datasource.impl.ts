import { prisma } from '@config';
import { AuthorDataSource } from '@domain/datasources';
import { CreateAuthorDto, PatchAuthorDto, PaginationDto } from '@domain/dtos';
import { AuthorEntenty, PaginationEntity } from '@domain/entities';
import { CustomError } from '@handler-errors';

export class AuthorDataSourceImpl implements AuthorDataSource {
  async create(dto: CreateAuthorDto): Promise<AuthorEntenty> {
    try {
      const author = await prisma.author.create({
        data: dto,
      });
      return AuthorEntenty.fromObject(author);
    } catch (error) {
      throw CustomError.internalServer(`${error}`);
    }
  }
  async patch({ id, ...rest }: PatchAuthorDto): Promise<AuthorEntenty> {
    if (!Object.keys(rest).length)
      throw CustomError.badRequest('There is nothing to modify');
    try {
      await this.findOne(id);
      const author = await prisma.author.update({
        where: { id },
        data: { ...rest },
      });
      return AuthorEntenty.fromObject(author);
    } catch (error) {
      throw CustomError.internalServer(`${error}`);
    }
  }

  async changeRecordStatus(id: string): Promise<Object> {
    const { isActive, name, lastName } = await this.findOne(id);
    try {
      await prisma.author.update({
        where: { id },
        data: { isActive: !isActive },
      });
      return {
        message: `The Author ${name} ${lastName} ${
          isActive ? 'disabled' : 'enabled'
        } succesfully`,
      };
    } catch (error) {
      throw CustomError.internalServer(`${error}`);
    }
  }

  async findOne(id: string): Promise<AuthorEntenty> {
    try {
      const author = await prisma.author.findUnique({ where: { id } });
      if (!author) throw CustomError.badRequest('author not found');
      return AuthorEntenty.fromObject(author);
    } catch (error) {
      throw CustomError.internalServer(`${error}`);
    }
  }
  async findMany(
    dto: PaginationDto,
  ): Promise<{ pagination: PaginationEntity; authors: AuthorEntenty[] }> {
    const { page, pageSize } = dto;
    const [authors, total] = await Promise.all([
      prisma.author.findMany({
        skip: PaginationEntity.dinamycOffset(page, pageSize),
        take: pageSize,
      }),
      prisma.author.count(),
    ]);

    const pagination = PaginationEntity.setPagination({ ...dto, total });
    const authorsMapped = authors.map(AuthorEntenty.fromObject);
    return { pagination, authors: authorsMapped };
  }
}
