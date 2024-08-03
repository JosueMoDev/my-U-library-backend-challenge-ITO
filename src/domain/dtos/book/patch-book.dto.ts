import { CustomValidatorErrors } from '@handler-errors';
import {
  IsISO8601,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
  Min,
} from 'class-validator';

export class PatchBookDto {
  @IsNotEmpty()
  @IsMongoId()
  public id!: string;

  @IsOptional()
  @IsString()
  public title?: string;

  @IsOptional()
  @IsISO8601({ strict: true })
  public publicationDate?: string;

  @IsOptional()
  @IsString()
  public description?: string;

  @IsOptional()
  @IsPositive()
  @Min(0)
  public stock?: number;

  @IsOptional()
  @IsMongoId()
  public authorId?: string;

  @IsOptional()
  @IsMongoId()
  public genreId?: string;

  constructor(args: PatchBookDto) {
    Object.assign(this, args);
  }

  static validate(object: PatchBookDto): [undefined | string[], PatchBookDto?] {
    const createDto = new PatchBookDto(object);

    const [errors, dto] = CustomValidatorErrors.validateDto<PatchBookDto>(createDto);

    if (errors) return [errors];

    return [undefined, dto];
  }
}
