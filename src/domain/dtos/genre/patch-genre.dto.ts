import { CustomValidatorErrors } from '@handler-errors';
import { IsNotEmpty, IsMongoId, IsOptional, IsString } from 'class-validator';

export class PatchGenreDto {
  @IsNotEmpty()
  @IsMongoId()
  public id!: string;

  @IsOptional()
  @IsString()
  public name?: string;

  constructor(args: PatchGenreDto) {
    Object.assign(this, args);
  }

  static validate(
    object: PatchGenreDto,
  ): [undefined | string[], PatchGenreDto?] {
    const createDto = new PatchGenreDto(object);

    const [errors, dto] = CustomValidatorErrors.validateDto<PatchGenreDto>(createDto);

    if (errors) return [errors];

    return [undefined, dto];
  }
}
