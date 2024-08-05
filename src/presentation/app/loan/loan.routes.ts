import { LoanDataSourceImpl } from "@infraestructure/datasourcesimpl";
import { LoanRepositoryImpl } from "@infraestructure/repositoriesimpl";
import { LoanService } from "./loan.service";
import { LoanController } from "./loan.controller";
import { Router } from "express";
import { AuthorizationMidddleware } from "@middlewares";

export class LoanRoutes {
  static get routes(): Router {
    const router = Router();

    const datasource = new LoanDataSourceImpl();
    const repository = new LoanRepositoryImpl(datasource);
    const service = new LoanService(repository);
    const controller = new LoanController(service);


    router.get('/find-one/:id', controller.findOne);
    router.use(AuthorizationMidddleware.hasPermission);
    router.post('/create', controller.create);
    router.patch('/patch', controller.patch);
    router.get('/find-many', controller.findMany);
    router.patch('/return/:id', controller.return);

    return router;
  }
}