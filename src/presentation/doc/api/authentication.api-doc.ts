import { OpenAPIV3 } from 'openapi-types';
import { FromSchemasToDTOS } from '../to-schemas-from-dtos';

type AUTHENICATIONPATHS = {
  login: OpenAPIV3.PathItemObject;
  validateToken: OpenAPIV3.PathItemObject;
};

export const authentication: AUTHENICATIONPATHS = {
  login: {
    post: {
      summary:
        'This endpoint allows users to log in by providing their credentials and receive an access token upon successful authentication.',
      tags: ['Authentication'],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: FromSchemasToDTOS.getSchemas().LoginDto as Object,
          },
        },
      },
      responses: {
        200: {
          description: 'Login successful. Access token provided.',
        },
        400: {
          description:
            'Invalid credentials. Please check your email and password.',
        },

        500: {
          description: 'Internal server error.',
        },
      },
    },
  },
  validateToken: {
    get: {
      summary: 'This endpoint verifies the validity of existing access tokens.',
      tags: ['Authentication'],
      security: [
        {
          bearerAuth: [],
        },
      ],
      responses: {
        200: {
          description: 'Token is valid.',
        },
        401: {
          description: 'Unauthorized. Token is invalid.',
        },
        500: {
          description: 'Internal server error.',
        },
      },
    },
  },
};
