import { ROLE } from "@prisma/client";
import { IsEmail, IsEnum, IsMongoId, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { CustomValidatorErrors } from "@handler-errors";

export class PatchUserDto  {
  @IsNotEmpty()
  @IsMongoId()
  public id!: string;

  @IsOptional()
  @IsString()
  public name?: string | undefined;

  @IsOptional()
  @IsString()
  public lastName?: string;

  @IsOptional()
  @IsEmail()
  public email?: string;

  @IsOptional()
  @IsEnum(ROLE, { message: 'Role is not valid' })
  public role?: ROLE;

  constructor(args: PatchUserDto) {
    Object.assign(this, args);
  }

  static validate(object: PatchUserDto): [undefined | string[], PatchUserDto?] {
    const createDto = new PatchUserDto(object);

    const [errors, dto] =
      CustomValidatorErrors.validateDto<PatchUserDto>(createDto);

    if (errors) return [errors];

    return [undefined, dto];
  }
}