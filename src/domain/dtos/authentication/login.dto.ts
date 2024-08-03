import { CustomValidatorErrors } from '@handler-errors';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  @IsEmail()
  public email!: string;

  @IsNotEmpty()
  @MinLength(8, { message: 'Password should be at least 8 characters long' })
  public password!: string;
  constructor(args: LoginDto) {
    Object.assign(this, args);
  }
  static validate(object: LoginDto): [undefined | string[], LoginDto?] {
    const createDto = new LoginDto(object);

    const [errors, dto] = CustomValidatorErrors.validateDto<LoginDto>(createDto);

    if (errors) return [errors];

    return [undefined, dto];
  }
}
