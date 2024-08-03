import { UserDataSourceImpl } from "@infraestructure/datasourcesimpl";
import { UserRepositoryImpl } from "@infraestructure/repositoriesimpl";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { Router } from "express";

export class UserRoutes {
  static get routes(): Router {
    const router = Router();

    const datasource = new UserDataSourceImpl()
    const repository = new UserRepositoryImpl(datasource);
    const service = new UserService(repository);
    const controller = new UserController(service);

    router.post('/create', controller.create);
    router.patch('/patch', controller.patch);
    router.get('/find-one/:id', controller.findOne);
    router.get('/find-many', controller.findMany);
    router.get('/loan-books', controller.getLoanBooks);
    router.patch('/change-status/:id', controller.SoftDelete);
    router.delete('/delete/:id', controller.hardDelete);

    return router;
  }
}