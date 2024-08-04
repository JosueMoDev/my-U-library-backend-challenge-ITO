import { CustomValidatorErrors } from '@handler-errors';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateGenderDto {
  
  @IsNotEmpty()
  @IsString()
  public name!: string;

  constructor(args: CreateGenderDto) {
    Object.assign(this, args);
  }

  static validate(
    object: CreateGenderDto,
  ): [undefined | string[], CreateGenderDto?] {
    const createDto = new CreateGenderDto(object);

    const [errors, dto] = CustomValidatorErrors.validateDto<CreateGenderDto>(createDto);

    if (errors) return [errors];

    return [undefined, dto];
  }
}
