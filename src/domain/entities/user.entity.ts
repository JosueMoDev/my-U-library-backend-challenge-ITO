import { ROLE } from "@prisma/client";
import { LoanEntity } from "./loan.entity";

export class UserEntity {
  public id: string;
  public name: string;
  public lastName: string;
  public email: string;
  public role: ROLE;
  public password: string;
  public isActive: boolean;
  public createdAt: Date;
  public loans?: LoanEntity[];

  constructor({
    id,
    name,
    lastName,
    email,
    role,
    password,
    isActive,
    createdAt,
    loans,
  }: UserEntity) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.role = role;
    this.password = password;
    this.isActive = isActive;
    this.createdAt = createdAt;
    this.loans = loans;
  }
  static fromObject(user: UserEntity): UserEntity {
    return new UserEntity(user);
  }
}
