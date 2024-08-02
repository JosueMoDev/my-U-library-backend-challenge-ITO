import { AuthorEntenty, GenreEntenty } from '@domain/entities';

export class BookEntenty {
  public id: string;
  public title: string;
  public publicationDate: Date;
  public description: string;
  public coverImageUrl?: string;
  public stock: number;
  public author: AuthorEntenty;
  public genres: GenreEntenty[];
  constructor({
    id,
    title,
    publicationDate,
    description,
    coverImageUrl,
    stock,
    author,
    genres,
  }: BookEntenty) {
    this.id = id;
    this.title = title;
    this.publicationDate = publicationDate;
    this.description = description;
    this.coverImageUrl = coverImageUrl;
    this.stock = stock;
    this.author = author;
    this.genres = genres;
  }
  static fromObject(book: BookEntenty): BookEntenty {
    return new BookEntenty(book);
  }
}
