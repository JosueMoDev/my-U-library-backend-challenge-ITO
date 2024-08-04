import jwt from 'jsonwebtoken';
import {  EnvironmentVariables } from './env';
import { ROLE } from '@prisma/client';

const JWT_SEED = EnvironmentVariables.SECRET_KEY_JWT;
type ValidToken = {
  id: string;
  role: ROLE;
  ait: number;
  exp: number;
};
export class JsonWebTokenPlugin {
  static async generateToken(
    payload: any,
    duration: string = '2h',
  ): Promise<string | null> {
    return new Promise((resolve) => {
      jwt.sign(payload, JWT_SEED, { expiresIn: duration }, (error, token) => {
        if (error) return resolve(null);
        if (!token) return resolve(null);
        resolve(token);
      });
    });
  }

  static async validateToken<T>(token: string): Promise< ValidToken| null> {
    return new Promise((resolve) => {
      jwt.verify(token, JWT_SEED, (err, decoded) => {
        if (err) {
          return resolve(null);
        }
        resolve(decoded as ValidToken);
      });
    });
  }
}
