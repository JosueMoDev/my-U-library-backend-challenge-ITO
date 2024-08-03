import { CustomValidatorErrors } from '@handler-errors';
import {
  IsISO8601,
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
  @IsISO8601({ strict: true })
  public birthdate?: string;

  constructor(args: PatchAuthorDto) {
    Object.assign(this, args);
  }

  static validate(
    object: PatchAuthorDto,
  ): [undefined | string[], PatchAuthorDto?] {
    const createDto = new PatchAuthorDto(object);

    const [errors, dto] = CustomValidatorErrors.validateDto<PatchAuthorDto>(createDto);

    if (errors) return [errors];

    return [undefined, dto];
  }
}
