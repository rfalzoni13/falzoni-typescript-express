import swaggerJsdoc from "swagger-jsdoc"

const options: swaggerJsdoc.Options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Api Falzoni Express TS",
        description: "Api de serviços com Node.js, Express e TypeScript",
        version: "1.0",
      },
      components: {
        // securitySchemes: {
        //   bearerAuth: {
        //     type: "http",
        //     scheme: "bearer",
        //     bearerFormat: "JWT",
        //   },
        // },
      }
    //   security: [
    //     {
    //       bearerAuth: [],
    //     },
    //   ],
    },
    apis: ["./src/controllers/**/*.ts", "./src/schema/*.ts"],
  }
  
  const swaggerSpec = swaggerJsdoc(options)
  
  export default swaggerSpec