import { BookEntenty } from "./book.entity";

export class AuthorEntenty {
  public id: string;
  public name: string;
  public lastname: string;
  public bio: string;
  public birthdate: Date;

  constructor({ id, name, lastname, bio, birthdate }: AuthorEntenty) {
    this.id = id;
    this.name = name;
    this.lastname = lastname;
    this.bio = bio;
    this.birthdate = birthdate;
  }
  static fromObject( author: AuthorEntenty): AuthorEntenty {
    return new AuthorEntenty(author);
  }
}
