import { CustomValidatorErrors } from '@handler-errors';
import { IsMongoId, IsNotEmpty } from 'class-validator';

export class MongoId {
  @IsNotEmpty()
  @IsMongoId()
  public id!: string;

  constructor(args: MongoId) {
    Object.assign(this, args);
  }

  static validate(object: MongoId): [undefined | string[], MongoId?] {
    const createDto = new MongoId(object);

    const [errors, dto] = CustomValidatorErrors.validateDto<MongoId>(createDto);

    if (errors) return [errors];

    return [undefined, dto];
  }
}
