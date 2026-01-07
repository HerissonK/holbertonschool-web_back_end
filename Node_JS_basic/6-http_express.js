const express = require('express');

const app = express();

const PORT = 1245;
const HOST = '127.0.0.1';

app.get('/', (req, res) => {
  res.type('text').send('Hello Holberton School!');
});

app.listen(PORT, HOST);

module.exports = app;
