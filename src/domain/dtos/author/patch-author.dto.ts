import { CustomValidatorErrors } from '@handler-errors';
import {
  IsDate,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class PatchAuthorDto {
  @IsNotEmpty()
  @IsMongoId()
  public id!: string;

  @IsOptional()
  @IsString()
  public name?: string;

  @IsOptional()
  @IsString()
  public lastName?: string;

  @IsOptional()
  @IsString()
  public bio?: string;

  @IsOptional()
  @IsDate(
    { message: 'Date must be in the format YYYY-MM-DD' },
  )
  public birthdate?: Date;

  constructor(args: PatchAuthorDto) {
    Object.assign(this, args);
    if(args.birthdate) this.birthdate = new Date(this.birthdate!)
  }

  static validate(
    object: PatchAuthorDto,
  ): [undefined | string[], PatchAuthorDto?] {
    const createDto = new PatchAuthorDto(object);

    const [errors, dto] =
      CustomValidatorErrors.validateDto<PatchAuthorDto>(createDto);

    if (errors) return [errors];

    return [undefined, dto];
  }
}
