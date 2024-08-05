import { Express } from 'express';
import swaggerUi from 'swagger-ui-express';
import { OpenAPIV3 } from 'openapi-types';
import { FromSchemasToDTOS } from './to-schemas-from-dtos';
import * as paths from './api';
import { EnvironmentVariables } from '@config';

const apiDocumentation: OpenAPIV3.Document = {
  openapi: '3.1.1',
  info: {
    title: 'My University Library - ITO technical test',
    version: '1.0.1',
    description:
      'small university library system where students can check out physical books',
  },
  servers: [
    {
      url: `http://localhost:${EnvironmentVariables.PORT}/api/`,
      description: 'Development server',
    },
  ],
  paths: {
    // * Authentication endpoints
    '/authentication/login': paths.authentication.login,
    '/authentication/validate-token': paths.authentication.validateToken,
    // * Author endpoints
    '/authors/create': paths.author.create,
    '/authors/patch': paths.author.patch,
    '/authors/find-one/{id}': paths.author.findOne,
    '/authors/find-many': paths.author.findMany,
    '/authors/change-status/{id}': paths.author.changeStatus,
    // * Book endpoints
    '/books/create': paths.book.create,
    '/books/patch': paths.book.patch,
    '/books/find-one/{id}': paths.book.findOne,
    '/books/find-many': paths.book.findMany,
    '/books/change-status/{id}': paths.book.changeStatus,
    // * Genre endpoints
    '/genres/create': paths.genre.create,
    '/genres/patch': paths.genre.patch,
    '/genres/find-one/{id}': paths.genre.findOne,
    '/genres/find-many': paths.genre.findMany,
    '/genres/change-status/{id}': paths.genre.changeStatus,
    // * Loan endpoints
    '/loans/create': paths.loan.create,
    '/loans/patch': paths.loan.patch,
    '/loans/find-one/{id}': paths.loan.findOne,
    '/loans/find-many': paths.loan.findMany,
    '/loans/return-book/{id}': paths.loan.returnBook,
    // * User endpoints
    '/users/create': paths.user.create,
    '/users/patch': paths.user.patch,
    '/users/find-many': paths.user.findMany,
    '/users/find-one/{id}': paths.user.findOne,
    '/users/change-status/{id}': paths.user.changeStatus,
    '/users/loan-books': paths.user.loanBooks,
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
    schemas: FromSchemasToDTOS.getSchemas() as any,
  },
};

export const swaggerConfig = (app: Express) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(apiDocumentation));
};