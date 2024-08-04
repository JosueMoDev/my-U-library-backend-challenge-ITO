import { LoanState } from "@prisma/client";
import { UserEntity, BookEntenty } from '@domain/entities';

export class LoanEntity {
  public id: string;
  public user: Pick<UserEntity, 'email' | 'name' | 'lastName'>;
  public loanState: LoanState;
  public book:  Pick<BookEntenty, 'author' | 'title' | 'id'| 'coverImageUrl' >;
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
