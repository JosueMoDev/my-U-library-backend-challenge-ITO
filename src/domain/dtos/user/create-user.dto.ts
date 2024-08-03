import { CustomValidatorErrors } from '@handler-errors';
import { ROLE } from '@prisma/client';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  public name!: string;

  @IsNotEmpty()
  @IsString()
  public lastName!: string;

  @IsNotEmpty()
  @IsEmail()
  public email!: string;

  @IsNotEmpty()
  @IsEnum(ROLE, { message: 'Role is not valid' })
  public role!: ROLE;

  @IsNotEmpty()
  @MinLength(8, { message: 'Password should be at least 8 characters long' })
  @IsString()  
  public password!: string;
  constructor(args: CreateUserDto) {
    Object.assign(this, args);
  }
  static validate(object: CreateUserDto): [undefined | string[], CreateUserDto?] {
    const createDto = new CreateUserDto(object);

    const [errors, dto] = CustomValidatorErrors.validateDto<CreateUserDto>(createDto);

    if (errors) return [errors];

    return [undefined, dto];
  }
}
