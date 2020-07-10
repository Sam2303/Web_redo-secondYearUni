const express = require('express');
const path = require('path');
const fetch = require("node-fetch");
const api = require('./api');

const app = express();


app.use('/api', api);
app.use('/cssAndJS', express.static(path.join(__dirname, 'src/cssAndJS')));
app.use('/', express.static('src/html'));



module.exports = app;
app.listen(8080);
console.log('Server running at http://127.0.0.01:8080');
