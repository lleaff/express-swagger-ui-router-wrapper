declare module 'express-swagger-ui' {
  import express = require('express');

  function expressSwaggerUi(options: {
    app: express.Application | express.Router,
    swaggerUrl?: string,
    localPath?: string,
  }): void;

  export = expressSwaggerUi
}
