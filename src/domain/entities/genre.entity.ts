export class GenreEntenty {
  public id: string;
  public name: string;
  public isActive?: boolean;
  constructor({ id, name, isActive }: GenreEntenty) {
    this.id = id;
    this.name = name;
    this.isActive = isActive;
  }
  static fromObject(book: GenreEntenty): GenreEntenty {
    return new GenreEntenty(book);
  }
}
