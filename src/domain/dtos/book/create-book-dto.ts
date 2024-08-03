import { CustomValidatorErrors } from '@handler-errors';
import {
  IsISO8601,
  IsMongoId,
  IsNotEmpty,
  IsPositive,
  IsString,
  Min,
} from 'class-validator';

export class CreateBookDto {

  @IsNotEmpty()
  @IsString()
  public title!: string;

  @IsNotEmpty()
  @IsISO8601({ strict: true })
  public publicationDate!: string;

  @IsNotEmpty()
  @IsString()
  public description!: string;

  @IsNotEmpty()
  @IsPositive()
  @Min(1)
  public stock!: number;

  @IsNotEmpty()
  @IsMongoId()
  public authorId!: string;

  @IsNotEmpty()
  @IsMongoId()
  public genreId!: string;

  constructor(args: CreateBookDto) {
    Object.assign(this, args);
  }

  static validate(object: CreateBookDto): [undefined | string[], CreateBookDto?] {
    const createDto = new CreateBookDto(object);

    const [errors, dto] =
      CustomValidatorErrors.validateDto<CreateBookDto>(createDto);

    if (errors) return [errors];

    return [undefined, dto];
  }
}
