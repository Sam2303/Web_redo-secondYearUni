const express = require('express');
const api = require('./api');
const fetch = require("node-fetch");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use('/api', api);
app.use('/', express.static('src'));
app.use('/', express.static('src/html'));



module.exports = app;
app.listen(8080);
console.log('Server running at http://127.0.0.01:8080');
