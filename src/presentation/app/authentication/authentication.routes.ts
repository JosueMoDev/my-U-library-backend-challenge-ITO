import { AuthenticationDataSourceImpl } from '@infraestructure/datasourcesimpl';
import { AuthenticationRepositoryImpl } from '@infraestructure/repositoriesimpl';
import { Router } from 'express';
import { AuthenticationService } from './authentication.service';
import { AuthenticationController } from './authentication.controller';

export class AuthenticationRoutes {
  static get routes(): Router {
    const router = Router();

    const datasource = new AuthenticationDataSourceImpl();
    const repository = new AuthenticationRepositoryImpl(datasource);
    const service = new AuthenticationService(repository);
    const controller = new AuthenticationController(service);

    router.post('/login', controller.loginWithEmailAndPassword);
    router.get('/validate-token', controller.validateToken);

    return router;
  }
}
