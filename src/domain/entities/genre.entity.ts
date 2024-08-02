import { BookEntenty } from "./book.entity";
export class GenreEntenty {
  public id: string;
  public name: string;
  public books: BookEntenty[];
  constructor({ id, name, books }: GenreEntenty) {
    this.id = id;
    this.name = name;
    this.books = books;
  }
  static fromObject(book: GenreEntenty): GenreEntenty {
    return new GenreEntenty(book);
  }
}
