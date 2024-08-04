import { BookDataSourceImpl } from "@infraestructure/datasourcesimpl";
import { BookRepositoryImpl } from "@infraestructure/repositoriesimpl";
import { Router } from "express";
import { BookService } from "./book.service";
import { BookController } from "./book.controller";

export class BookRoutes {
  static get routes(): Router {
    const router = Router();

    const datasource = new BookDataSourceImpl();
    const repository = new BookRepositoryImpl(datasource);
    const service = new BookService(repository);
    const controller = new BookController(service);

    router.post('/create', controller.create);
    router.patch('/patch', controller.patch);
    router.get('/find-one/:id', controller.findOne);
    router.get('/find-many', controller.findMany);
    router.patch('/change-status/:id', controller.changeRecordStatus);
    

    return router;
  }
}