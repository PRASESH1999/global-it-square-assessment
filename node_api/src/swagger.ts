// src/swagger.ts
import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0', // OpenAPI version
    info: {
      title: 'Products API', // API title
      version: '1.0.0', // API version
      description: 'API documentation for Products API', // Description
    },
    servers: [
      {
        url: 'http://localhost:8080/api', // API server URL
      },
    ],
  },
  apis: ['./src/routes/*.ts'], // Path to transpiled JavaScript files
};

const swaggerSpec = swaggerJSDoc(options);
export default swaggerSpec;
