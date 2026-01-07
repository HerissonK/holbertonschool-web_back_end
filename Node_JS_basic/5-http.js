const http = require('http');
const countStudents = require('./3-read_file_async');

const DATABASE = process.argv.slice(2)[0];

const HOSTNAME = '127.0.0.1';
const PORT = 1245;

const app = http.createServer(async (req, res) => {
  const { url } = req;

  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
    return;
  }

  if (url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');

    try {
      await countStudents(DATABASE);
      res.end();
    } catch (error) {
      res.end(error.message);
    }
    return;
  }

  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end();
});

app.listen(PORT, HOSTNAME);

module.exports = app;
