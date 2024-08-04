import { GenreDataSourceImpl } from "@infraestructure/datasourcesimpl";
import { GenreRepositoryImpl } from "@infraestructure/repositoriesimpl";
import { GenreService } from "./genre.service";
import { GenreController } from "./genre.controller";
import { Router } from "express";

export class GenreRoutes {
  static get routes(): Router {
    const router = Router();

    const datasource = new GenreDataSourceImpl();
    const repository = new GenreRepositoryImpl(datasource);
    const service = new GenreService(repository);
    const controller = new GenreController(service);

    router.post('/create', controller.create);
    router.patch('/patch', controller.patch);
    router.get('/find-one/:id', controller.findOne);
    router.get('/find-many', controller.findMany);
    router.patch('/change-status/:id', controller.changeRecordStatus);
   

    return router;
  }
}