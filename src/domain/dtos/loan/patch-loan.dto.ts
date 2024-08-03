import { CustomValidatorErrors } from '@handler-errors';
import { IsMongoId, IsNotEmpty, IsOptional } from 'class-validator';

export class PatchLoanDto {
  @IsNotEmpty()
  @IsMongoId()
  public id!: string;

  @IsOptional()
  @IsMongoId()
  public userId!: string;

  @IsOptional()
  @IsMongoId()
  public bookId!: string;

  constructor(args: PatchLoanDto) {
    Object.assign(this, args);
  }

  static validate(
    object: PatchLoanDto,
  ): [undefined | string[], PatchLoanDto?] {
    const createDto = new PatchLoanDto(object);

    const [errors, dto] = CustomValidatorErrors.validateDto<PatchLoanDto>(createDto);

    if (errors) return [errors];

    return [undefined, dto];
  }
}
