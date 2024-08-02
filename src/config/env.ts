import { get } from 'env-var';
export class EnvironmentVariables {
  static PORT: number = get('PORT').required().asPortNumber();
}