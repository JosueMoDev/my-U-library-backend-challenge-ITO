import { CustomValidatorErrors } from '@handler-errors';
import { IsISO8601, IsNotEmpty, IsString } from 'class-validator';

export class CreateAuthorDto {
  @IsNotEmpty()
  @IsString()
  public name!: string;

  @IsNotEmpty()
  @IsString()
  public lastName!: string;

  @IsNotEmpty()
  @IsString()
  public bio!: string;

  @IsNotEmpty()
  @IsISO8601({ strict: true })
  public birthdate!: string;

  constructor(args: CreateAuthorDto) {
    Object.assign(this, args);
  }

  static validate(
    object: CreateAuthorDto,
  ): [undefined | string[], CreateAuthorDto?] {
    const createDto = new CreateAuthorDto(object);

    const [errors, dto] = CustomValidatorErrors.validateDto<CreateAuthorDto>(createDto);

    if (errors) return [errors];

    return [undefined, dto];
  }
}
