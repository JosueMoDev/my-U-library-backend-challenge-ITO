import { OpenAPIV3 } from 'openapi-types';
import { FromSchemasToDTOS } from '../to-schemas-from-dtos';

type BOOKPATHS = {
  create: OpenAPIV3.PathItemObject;
  patch: OpenAPIV3.PathItemObject;
  changeStatus: OpenAPIV3.PathItemObject;
  findOne: OpenAPIV3.PathItemObject;
  findMany: OpenAPIV3.PathItemObject;
};

export const book: BOOKPATHS = {
  create: {
    post: {
      tags: ['Books'],
      security: [
        {
          bearerAuth: [],
        },
      ],
      summary: 'Create a new book',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: FromSchemasToDTOS.getSchemas().CreateBookDto as Object,
          },
        },
      },
      responses: {
        200: {
          description: 'Book successfully created',
        },
        400: {
          description: 'Invalid request data',
        },
        401: {
          description: 'Not authorized to perform this action',
        },
        403: {
          description: 'Forbidden: Insufficient permissions',
        },
      },
    },
  },
  findOne: {
    get: {
      tags: ['Books'],
      summary: 'Find a book by ID',
      security: [
        {
          bearerAuth: [],
        },
      ],
      parameters: [
        {
          in: 'path',
          name: 'id',
          required: true,
          schema: {
            type: 'string',
          },
        },
      ],
      responses: {
        200: {
          description: 'Book found',
        },
        404: {
          description: 'Book not found',
        },
        401: {
          description: 'Not authorized to perform this action',
        },
      },
    },
  },
  patch: {
    patch: {
      tags: ['Books'],
      security: [
        {
          bearerAuth: [],
        },
      ],
      summary: 'Update an existing book',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: FromSchemasToDTOS.getSchemas().PatchBookDto as Object,
          },
        },
      },
      responses: {
        200: {
          description: 'Book successfully updated',
        },
        404: {
          description: 'Book not found',
        },
        401: {
          description: 'Not authorized to perform this action',
        },
        403: {
          description: 'Forbidden: Insufficient permissions',
        },
      },
    },
  },
  changeStatus: {
    patch: {
      tags: ['Books'],
      security: [
        {
          bearerAuth: [],
        },
      ],
      summary: 'Change the status of a book',
      parameters: [
        {
          in: 'path',
          name: 'id',
          required: true,
          schema: {
            type: 'string',
          },
        },
      ],
      responses: {
        200: {
          description: 'Book status successfully updated',
        },
        404: {
          description: 'Book not found',
        },
        401: {
          description: 'Not authorized to perform this action',
        },
        403: {
          description: 'Forbidden: Insufficient permissions',
        },
      },
    },
  },
  findMany: {
    get: {
      tags: ['Books'],
      security: [
        {
          bearerAuth: [],
        },
      ],
      summary:
        'Find many books with pagination. Search by title, author, or genre.',
      parameters: [
        {
          in: 'query',
          name: 'page',
          schema: {
            type: 'integer',
          },
        },
        {
          in: 'query',
          name: 'pageSize',
          schema: {
            type: 'integer',
          },
        },
        {
          in: 'query',
          name: 'search',
          schema: {
            type: 'string',
          },
        },
      ],
      responses: {
        200: {
          description: 'List of books found',
        },
        404: {
          description: 'No books found',
        },
        401: {
          description: 'Not authorized to perform this action',
        },
      },
    },
  },
};
