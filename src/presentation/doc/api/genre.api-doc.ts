import { OpenAPIV3 } from 'openapi-types';
import { FromSchemasToDTOS } from '../to-schemas-from-dtos';

type GENREPATHS = {
  create: OpenAPIV3.PathItemObject;
  patch: OpenAPIV3.PathItemObject;
  changeStatus: OpenAPIV3.PathItemObject;
  findOne: OpenAPIV3.PathItemObject;
  findMany: OpenAPIV3.PathItemObject;
};

export const genre: GENREPATHS = {
  create: {
    post: {
      tags: ['Genres'],
      security: [
        {
          bearerAuth: [],
        },
      ],
      summary: 'Create a new genre',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: FromSchemasToDTOS.getSchemas().CreateGenreDto as Object,
          },
        },
      },
      responses: {
        200: {
          description: 'Genre successfully created',
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
      tags: ['Genres'],
      summary: 'Find a genre by ID',
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
          description: 'Genre found',
        },
        404: {
          description: 'Genre not found',
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
      tags: ['Genres'],
      security: [
        {
          bearerAuth: [],
        },
      ],
      summary: 'Update an existing genre',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: FromSchemasToDTOS.getSchemas().PatchGenreDto as Object,
          },
        },
      },
      responses: {
        200: {
          description: 'Genre successfully updated',
        },
        404: {
          description: 'Genre not found',
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
      tags: ['Genres'],
      security: [
        {
          bearerAuth: [],
        },
      ],
      summary: 'Change the status of a genre',
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
          description: 'Genre status successfully updated',
        },
        404: {
          description: 'Genre not found',
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
      tags: ['Genres'],
      security: [
        {
          bearerAuth: [],
        },
      ],
      summary: 'Find many genres with pagination',
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
          description: 'List of genres found',
        },
        404: {
          description: 'No genres found',
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
