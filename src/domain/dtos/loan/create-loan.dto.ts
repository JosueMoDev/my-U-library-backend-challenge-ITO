import { CustomValidatorErrors } from '@handler-errors';
import { IsMongoId, IsNotEmpty } from 'class-validator';

export class CreateLoanDto {
  @IsNotEmpty()
  @IsMongoId()
  public userId!: string;

  @IsNotEmpty()
  @IsMongoId()
  public bookId!: string;

  constructor(args: CreateLoanDto) {
    Object.assign(this, args);
  }

  static validate(object: CreateLoanDto): [undefined | string[], CreateLoanDto?] {
    const createDto = new CreateLoanDto(object);

    const [errors, dto] = CustomValidatorErrors.validateDto<CreateLoanDto>(createDto);

    if (errors) return [errors];

    return [undefined, dto];
  }
}
