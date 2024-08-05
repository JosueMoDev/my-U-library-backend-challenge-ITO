import { OpenAPIV3 } from 'openapi-types';
import { FromSchemasToDTOS } from '../to-schemas-from-dtos';

type LOANPATHS = {
  create: OpenAPIV3.PathItemObject;
  patch: OpenAPIV3.PathItemObject;
  findOne: OpenAPIV3.PathItemObject;
  findMany: OpenAPIV3.PathItemObject;
  returnBook: OpenAPIV3.PathItemObject;
};

export const loan: LOANPATHS = {
  create: {
    post: {
      tags: ['Loans'],
      security: [
        {
          bearerAuth: [],
        },
      ],
      summary: 'Create a new loan',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: FromSchemasToDTOS.getSchemas().CreateLoanDto as Object,
          },
        },
      },
      responses: {
        200: {
          description: 'Loan successfully created',
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
      tags: ['Loans'],
      summary: 'Find a loan by ID',
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
          description: 'Loan found',
        },
        404: {
          description: 'Loan not found',
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
      tags: ['Loans'],
      security: [
        {
          bearerAuth: [],
        },
      ],
      summary: 'Update an existing loan',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: FromSchemasToDTOS.getSchemas().PatchLoanDto as Object,
          },
        },
      },
      responses: {
        200: {
          description: 'Loan successfully updated',
        },
        404: {
          description: 'Loan not found',
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
      tags: ['Loans'],
      security: [
        {
          bearerAuth: [],
        },
      ],
      summary: 'Find many loans with pagination',
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
            description: 'Allows you to search by username',
          },
        },
      ],
      responses: {
        200: {
          description: 'List of loans found',
        },
        404: {
          description: 'No loans found',
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
  returnBook: {
    patch: {
      tags: ['Loans'],
      security: [
        {
          bearerAuth: [],
        },
      ],
      summary: 'Allows you to return a loan book',
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
          description: 'Book returned successfully',
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
};
