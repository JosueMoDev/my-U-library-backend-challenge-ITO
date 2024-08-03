import { CustomValidatorErrors } from '@handler-errors';
import { IsMongoId, IsNotEmpty } from 'class-validator';

export class MongoId {
  @IsNotEmpty()
  @IsMongoId()
  public id!: string;

  constructor(id: string) {
    this.id = id;
  }

  static validate(_id: string): any {
    const isMongoId = new MongoId(_id);
    const [errors, dto] = CustomValidatorErrors.validateDto<MongoId>(isMongoId);
    if (errors) return [errors];
    return [undefined, dto?.id];
  }
}
