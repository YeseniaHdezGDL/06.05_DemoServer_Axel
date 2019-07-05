const express = require('expres';);
const config = require('./config');
const endpoints = require('./endpoints')
const app = express();
const port = 3000;

config.setup(app);
endpoints.routes(app);

app.listen(port,() => console.log('el servidor está corriendo'))