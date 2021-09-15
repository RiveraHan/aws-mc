const { version } = require('../../package.json');
const config = require('../config/config');

const swaggerDef = {
  openapi: '3.0.0',
  info: {
    title: 'MedicalAPI.Auth API documentation',
    version,
    license: {
      name: 'ISC',
      url: 'https://github.com/Medical-Control/MC.API.Auth/LICENSE',
    },
  },
  servers: [
    {
      url: `http://localhost:${config.port}/v1`,
    },
  ],
};

module.exports = swaggerDef;
