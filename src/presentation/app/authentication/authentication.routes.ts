import { AuthenticationDataSourceImpl, UserDataSourceImpl } from '@infraestructure/datasourcesimpl';
import { AuthenticationRepositoryImpl, UserRepositoryImpl } from '@infraestructure/repositoriesimpl';
import { Router } from 'express';
import { AuthenticationService } from './authentication.service';
import { AuthenticationController } from './authentication.controller';

export class AuthenticationRoutes {
  static get routes(): Router {
    const router = Router();
    const userDataSourceImpl = new UserDataSourceImpl()
    const userRepositoryImpl = new UserRepositoryImpl(userDataSourceImpl);

    const datasource = new AuthenticationDataSourceImpl(userRepositoryImpl);
    const repository = new AuthenticationRepositoryImpl(datasource);
    const service = new AuthenticationService(repository);
    const controller = new AuthenticationController(service);

    router.post('/login', controller.loginWithEmailAndPassword);
    router.get('/validate-token', controller.validateToken);

    return router;
  }
}
