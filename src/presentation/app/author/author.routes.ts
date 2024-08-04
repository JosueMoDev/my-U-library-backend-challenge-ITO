import { AuthorRepositoryImpl } from "@infraestructure/repositoriesimpl";
import { Router } from "express";
import { AuthorService } from "./author.service";
import { AuthorController } from "./author.controller";
import { AuthorDataSourceImpl } from "@infraestructure/datasourcesimpl";

export class AuthorRoutes {
  static get routes(): Router {
    const router = Router();

    const datasource = new AuthorDataSourceImpl();
    const repository = new AuthorRepositoryImpl(datasource);
    const service = new AuthorService(repository);
    const controller = new AuthorController(service);

    router.post('/create', controller.create);
    router.patch('/patch', controller.patch);
    router.get('/find-one/:id', controller.findOne);
    router.get('/find-many', controller.findMany);
    router.patch('/change-status/:id', controller.changeRecordStatus);
    

    return router;
  }
}