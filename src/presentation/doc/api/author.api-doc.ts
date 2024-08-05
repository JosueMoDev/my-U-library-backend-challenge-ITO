import { OpenAPIV3 } from 'openapi-types';
import { FromSchemasToDTOS } from '../to-schemas-from-dtos';

type AUTHORPATHS = {
  create: OpenAPIV3.PathItemObject;
  patch: OpenAPIV3.PathItemObject;
  changeStatus: OpenAPIV3.PathItemObject;
  findOne: OpenAPIV3.PathItemObject;
  findMany: OpenAPIV3.PathItemObject;
};

export const author: AUTHORPATHS = {
  create: {
    post: {
      tags: ['Authors'],
      security: [
        {
          bearerAuth: [],
        },
      ],
      summary: 'Create a new author',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: FromSchemasToDTOS.getSchemas().CreateAuthorDto as Object,
          },
        },
      },
      responses: {
        200: {
          description: 'Author successfully created',
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
      tags: ['Authors'],
      summary: 'Find an author by ID',
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
          description: 'Author found',
        },
        404: {
          description: 'Author not found',
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
  patch: {
    patch: {
      tags: ['Authors'],
      security: [
        {
          bearerAuth: [],
        },
      ],
      summary: 'Update an existing author',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: FromSchemasToDTOS.getSchemas().PatchAuthorDto as Object,
          },
        },
      },
      responses: {
        200: {
          description: 'Author successfully updated',
        },
        404: {
          description: 'Author not found',
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
      tags: ['Authors'],
      security: [
        {
          bearerAuth: [],
        },
      ],
      summary: 'Change the status of an author',
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
          description: 'Author status successfully updated',
        },
        404: {
          description: 'Author not found',
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
      tags: ['Authors'],
      security: [
        {
          bearerAuth: [],
        },
      ],
      summary: 'Find many authors with pagination',
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
      ],
      responses: {
        200: {
          description: 'List of authors found',
        },
        404: {
          description: 'No authors found',
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
};
