// swagger/swagger.js
import swaggerJsDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Mern Stack Tutorial",
      version: "1.0.0",
      description: "API documentation for MERN Tutorial",
      termsOfService: "https://yourapp.com/terms",
      contact: {
        name: "Ridwan Oladipupo",
        email: "ridwan.oladipupon@dal.ca",
        url: "https://yourportfolio.com",
      },
      license: {
        name: "MIT",
        url: "https://opensource.org/licenses/MIT",
      },
    },
    tags: [
      {
        name: "Products",
        description:
          "Operations related to products (create, read, update, delete)",
      },
    ],
    servers: [
      {
        url: "http://localhost:5400",
      },
    ],
  },
  apis: ["../backend/routes/*.js"], // Path to the API docs
};

const swaggerSpec = swaggerJsDoc(options);

export default swaggerSpec;
