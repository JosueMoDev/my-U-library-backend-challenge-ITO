import { OpenAPIV3 } from 'openapi-types';
import { FromSchemasToDTOS } from '../to-schemas-from-dtos';

type USERPATHS = {
  create: OpenAPIV3.PathItemObject;
  patch: OpenAPIV3.PathItemObject;
  changeStatus: OpenAPIV3.PathItemObject;
  findOne: OpenAPIV3.PathItemObject;
  findMany: OpenAPIV3.PathItemObject;
  loanBooks: OpenAPIV3.PathItemObject;
};

export const user: USERPATHS = {
  create: {
    post: {
      tags: ['Users'],
      security: [
        {
          bearerAuth: [],
        },
      ],
      summary: 'Create a new user',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: FromSchemasToDTOS.getSchemas().CreateUserDto as Object,
          },
        },
      },
      responses: {
        201: {
          description: 'User successfully created',
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
      tags: ['Users'],
      summary: 'Find a user by ID',
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
          description: 'User found',
        },
        404: {
          description: 'User not found',
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
      tags: ['Users'],
      security: [
        {
          bearerAuth: [],
        },
      ],
      summary: 'Update an existing user',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: FromSchemasToDTOS.getSchemas().PatchUserDto as Object,
          },
        },
      },
      responses: {
        200: {
          description: 'User successfully updated',
        },
        404: {
          description: 'User not found',
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
      tags: ['Users'],
      security: [
        {
          bearerAuth: [],
        },
      ],
      summary: 'Change the status of a user',
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
          description: 'User status successfully updated',
        },
        404: {
          description: 'User not found',
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
      tags: ['Users'],
      security: [
        {
          bearerAuth: [],
        },
      ],
      summary: 'Find many users with pagination',
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
          description: 'List of users found',
        },
        404: {
          description: 'No users found',
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
  loanBooks: {
    get: {
      tags: ['Users'],
      security: [
        {
          bearerAuth: [],
        },
      ],
      summary: 'Provides access to view the list of books loaned to the logged-in user',
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
          description: 'List of users found',
        },
        404: {
          description: 'No users found',
        },
        401: {
          description: 'Not authorized to perform this action',
        }
      },
    },
  },
};
