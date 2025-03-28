import swaggerJsdoc from "swagger-jsdoc"
import schemas from "../schemas"

const options: swaggerJsdoc.Options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Api Falzoni Express TS",
        description: "Api de serviços com Node.js, Express e TypeScript",
        version: "v1",
      },
      components: {
        schemas: schemas,
        securitySchemes: {
          Bearer: {
            name: "Authorization",
            description: "Token de autorização (JWT) a ser inserido",
            in: "header",
            type: "apiKey",
            scheme: "bearer",
            bearerFormat: "JWT",
          },
        },
      },
      security: [
        {
          Bearer: [],
        },
      ],
    },
    apis: ["./src/controllers/**/*.ts", "./src/schema/*.ts"],
  }
  
  const swaggerSpec = swaggerJsdoc(options)
  
  export default swaggerSpec