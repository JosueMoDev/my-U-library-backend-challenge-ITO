import { ROLE } from "@prisma/client";

type ValidToken = {
  id: string;
  role: ROLE;
  ait: number;
  exp: number;
};
export class GlobalContext {
  static #globalContext: ValidToken | null = null;
  static setContext(context: ValidToken | null) {
    this.#globalContext = context;
  }

  static getGlobalContext() {
    return this.#globalContext;
  }
}
