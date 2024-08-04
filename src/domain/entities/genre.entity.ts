export class GenreEntenty {
  public id: string;
  public name: string;
  constructor({ id, name }: GenreEntenty) {
    this.id = id;
    this.name = name;
  }
  static fromObject(book: GenreEntenty): GenreEntenty {
    return new GenreEntenty(book);
  }
}
