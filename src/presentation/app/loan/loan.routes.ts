import { LoanDataSourceImpl } from "@infraestructure/datasourcesimpl";
import { LoanRepositoryImpl } from "@infraestructure/repositoriesimpl";
import { LoanService } from "./loan.service";
import { LoanController } from "./loan.controller";
import { Router } from "express";

export class LoanRoutes {
  static get routes(): Router {
    const router = Router();

    const datasource = new LoanDataSourceImpl();
    const repository = new LoanRepositoryImpl(datasource);
    const service = new LoanService(repository);
    const controller = new LoanController(service);

    router.post('/create', controller.create);
    router.patch('/patch', controller.patch);
    router.get('/find-one/:id', controller.findOne);
    router.get('/find-many', controller.findMany);
    router.patch('/return/:id', controller.return);

    return router;
  }
}