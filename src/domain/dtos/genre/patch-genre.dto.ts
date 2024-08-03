import { CustomValidatorErrors } from '@handler-errors';
import { IsNotEmpty, IsMongoId, IsOptional, IsString } from 'class-validator';

export class PatchGenderDto {
  @IsNotEmpty()
  @IsMongoId()
  public id!: string;

  @IsOptional()
  @IsString()
  public name?: string;

  constructor(args: PatchGenderDto) {
    Object.assign(this, args);
  }

  static validate(
    object: PatchGenderDto,
  ): [undefined | string[], PatchGenderDto?] {
    const createDto = new PatchGenderDto(object);

    const [errors, dto] = CustomValidatorErrors.validateDto<PatchGenderDto>(createDto);

    if (errors) return [errors];

    return [undefined, dto];
  }
}
