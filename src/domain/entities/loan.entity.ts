import { LoanState } from "@prisma/client";
import { UserEntity, BookEntenty } from '@domain/entities';


interface User {
  name: string,
  email: string,
}
export class LoanEntity {
  public id: string;
  public user: Pick<UserEntity, 'email' | 'name' | 'lastName'>;
  public loanState: LoanState;
  public book: Pick<BookEntenty, 'title' | 'author' | 'coverImageUrl' | 'genre'> ;
  public borrowedAt: Date;
  public returnedAt?: Date | null;

  constructor({
    id,
    user,
    loanState,
    book,
    borrowedAt,
    returnedAt,
  }: LoanEntity) {
    this.id = id;
    this.user = user;
    this.loanState = loanState;
    this.book = book;
    this.borrowedAt = borrowedAt;
    this.returnedAt = returnedAt;
  }
  static fromObject(loan: LoanEntity): LoanEntity {
    return new LoanEntity(loan);
  }
}
