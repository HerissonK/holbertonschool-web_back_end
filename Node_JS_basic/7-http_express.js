const express = require('express');
const countStudents = require('./3-read_file_async');

const DATABASE = process.argv[2];

const PORT = 1245;
const HOST = '127.0.0.1';

const app = express();

app.get('/', (req, res) => {
  res.type('text').send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.type('text');
  res.write('This is the list of our students\n');

  try {
    const lines = await countStudents(DATABASE);
    res.end(lines.join('\n'));
  } catch (error) {
    res.end(error.message);
  }
});

app.listen(PORT, HOST);

module.exports = app;
