const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'NodeProject',
      description: 'Testing Swagger',
      version: '1.0.0',
    },
  },
  apis: ['/home/user/Documents/NodejsProject/src/routes/index.js'],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

module.exports = (app) => {
  app.use('/proj-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};
