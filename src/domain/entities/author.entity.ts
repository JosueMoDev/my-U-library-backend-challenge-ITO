import { BookEntenty } from "./book.entity";

export class AuthorEntenty {
  public id?: string;
  public name: string;
  public lastName: string;
  public bio?: string;
  public isActive?: boolean;
  public birthdate?: Date;

  constructor({ id, name, lastName, bio, birthdate , isActive}: AuthorEntenty) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.bio = bio;
    this.isActive = isActive;
    this.birthdate = birthdate;
  }
  static fromObject( author: AuthorEntenty): AuthorEntenty {
    return new AuthorEntenty(author);
  }
}
