import { AuthorEntenty, GenreEntenty } from '@domain/entities';

export class BookEntenty {
  public id: string;
  public title: string;
  public publicationDate: Date;
  public description: string;
  public coverImageUrl?: string | null;
  public stock: number;
  public author: Pick<AuthorEntenty, 'name' | 'id' | 'lastName'>;
  public genre: GenreEntenty;
  public isActive?: boolean;
  constructor({
    id,
    title,
    publicationDate,
    description,
    coverImageUrl,
    stock,
    author,
    genre,
    isActive
  }: BookEntenty) {
    this.id = id;
    this.title = title;
    this.publicationDate = publicationDate;
    this.description = description;
    this.coverImageUrl = coverImageUrl;
    this.stock = stock;
    this.author = author;
    this.genre = genre;
    this.isActive = isActive
  }
  static fromObject(book: BookEntenty): BookEntenty {
    return new BookEntenty(book);
  }
}
