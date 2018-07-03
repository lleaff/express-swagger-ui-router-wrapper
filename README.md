# express-swagger-ui-router

Wrapper over [express-swagger-ui](https://github.com/AndreasPizsa/express-swagger-ui).
Automatically exposes the given local [openapi](https://github.com/OAI/OpenAPI-Specification/tree/master/examples/v3.0) configuration file for consumption by `swagger-ui`.

## Installation
```
npm install --save express express-swagger-ui-router
```

## Usage

```javascript
import express from 'express';
import swaggerServer from 'express-swagger-ui-router';

const app = express();

app.use('/swagger',
  swaggerServer({
    configFile: resolve(__dirname, '..', 'openapi.json'),
  }));

app.listen(3000);
```
