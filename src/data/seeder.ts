import { seedData } from './data';
import { PrismaClient } from '@prisma/client';
(async () => {
  await execute();
})();

async function execute() {
  const prisma = new PrismaClient();
  prisma.$connect();

  console.log('Seed Executing....');
  try {
    await prisma.$transaction(async (tx) => {
      await tx.loan.deleteMany({});
      await tx.book.deleteMany({});
      await tx.user.deleteMany({});
      await tx.genre.deleteMany({});
      await tx.author.deleteMany({});

      await tx.user.createMany({ data: seedData.users });
      await tx.author.createMany({ data: seedData.authors });
      await tx.genre.createMany({ data: seedData.genres });

      const authors = await tx.author.findMany({ select: { id: true } });
      const genres = await tx.genre.findMany({ select: { id: true } });
      const users = await tx.user.findMany({ select: { id: true } });

      if (authors.length === 0 || genres.length === 0 || users.length === 0) {
        throw new Error('No authors, genres, or users found.');
      }

      await tx.book.createMany({
        data: seedData.books.map((book) => ({
          ...book,
          authorId: authors[Math.floor(Math.random() * authors.length)].id,
          genreId: genres[Math.floor(Math.random() * genres.length)].id,
        })),
      });

      const books = await tx.book.findMany({ select: { id: true } });

      if (books.length === 0) {
        throw new Error('No books found.');
      }
      await tx.loan.createMany({
        data: seedData.loans.map(() => ({
          bookId: books[Math.floor(Math.random() * books.length)].id,
          userId: users[Math.floor(Math.random() * users.length)].id,
        })),
      });
      console.log('Seed data created successfully');
    });
  } catch (error) {
    console.error('Error while seeding data:', error);
  } finally {
    await prisma.$disconnect();
  }
}
