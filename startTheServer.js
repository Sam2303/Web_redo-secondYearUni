const express = require('express');
const path = require('path');

const app = express();

app.use('/cssAndJS', express.static(path.join(__dirname, 'src/cssAndJS')));
app.use('/', express.static('src/html'));



app.listen(8080);
console.log('Server running at http://127.0.0.01:8080');
