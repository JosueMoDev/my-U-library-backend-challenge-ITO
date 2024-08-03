import { AuthorEntenty, GenreEntenty } from '@domain/entities';

export class BookEntenty {
  public id: string;
  public title: string;
  public publicationDate: Date;
  public description: string;
  public coverImageUrl?: string | null;
  public stock: number;
  public author: AuthorEntenty;
  public genre: Pick<GenreEntenty, 'id' | 'name'>;
  constructor({
    id,
    title,
    publicationDate,
    description,
    coverImageUrl,
    stock,
    author,
    genre,
  }: BookEntenty) {
    this.id = id;
    this.title = title;
    this.publicationDate = publicationDate;
    this.description = description;
    this.coverImageUrl = coverImageUrl;
    this.stock = stock;
    this.author = author;
    this.genre = genre;
  }
  static fromObject(book: BookEntenty): BookEntenty {
    return new BookEntenty(book);
  }
}
