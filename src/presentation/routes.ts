import {
  AuthenticationRoutes,
  AuthorRoutes,
  BookRoutes,
  GenreRoutes,
  LoanRoutes,
  UserRoutes,
} from '@app';
import { Router } from 'express';

export class AppRoutes {
  static get routes(): Router {
    const router = Router();
    router.use('/authentication', AuthenticationRoutes.routes);
    router.use('/users', UserRoutes.routes);
    router.use('/authors', AuthorRoutes.routes);
    router.use('/books', BookRoutes.routes);
    router.use('/genres', GenreRoutes.routes);
    router.use('/loans', LoanRoutes.routes);

    return router;
  }
}
