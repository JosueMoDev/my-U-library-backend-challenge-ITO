import { validationMetadatasToSchemas } from "class-validator-jsonschema";
import { APISwagger } from './api-swagger.interfa';

export class FromSchemasToDTOS {
  static getSchemas(): APISwagger {
    const schemas = validationMetadatasToSchemas();
    const  { PaginationDto, MongoId, ...rest  } = schemas as APISwagger;
    return rest
  }
}