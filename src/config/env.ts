import { get } from 'env-var';
export class EnvironmentVariables {
  static PORT: number = get('PORT').required().asPortNumber();
  static SECRET_KEY_JWT: string = get('SECRET_KEY_JWT').required().asString();
  static DATABASE_URL: string = get('DATABASE_URL').required().asString();
}