import { CustomValidatorErrors } from '@handler-errors';
import {
  IsDate,
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
  @IsDate({ message: 'Date must be in the format YYYY-MM-DD' })
  public publicationDate?: Date;

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
    if (args.publicationDate) this.publicationDate = new Date(this.publicationDate!);
  }

  static validate(object: PatchBookDto): [undefined | string[], PatchBookDto?] {
    const createDto = new PatchBookDto(object);

    const [errors, dto] =
      CustomValidatorErrors.validateDto<PatchBookDto>(createDto);

    if (errors) return [errors];

    return [undefined, dto];
  }
}
