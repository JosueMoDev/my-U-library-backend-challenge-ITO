import { CustomValidatorErrors } from '@handler-errors';
import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
  Min,
} from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @IsInt()
  @IsPositive()
  @Min(1, { message: 'Page should be greater than 0' })
  public readonly page!: number;

  @IsOptional()
  @IsInt()
  @IsPositive()
  @Min(5, { message: 'Limit should be greater than 5' })
  public readonly pageSize!: number;

  @IsNotEmpty()
  @IsString()
  public readonly path!: string;

  private constructor(args: PaginationDto, path: string) {
    this.page = args.page ? +args.page : 1;
    this.pageSize = args.pageSize ? +args.pageSize : 5;
    this.path = path.split('?')[0].replace(/^\/api/, '');
  }

  static validate(
    object: PaginationDto,
    path: string,
  ): [undefined | string[], PaginationDto?] {
    const createDto = new PaginationDto(object, path);

    const [errors, dto] = CustomValidatorErrors.validateDto<PaginationDto>(createDto);

    if (errors) return [errors];

    return [undefined, dto];
  }
}
