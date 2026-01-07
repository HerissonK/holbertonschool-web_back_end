const http = require('http');

const DATABASE = process.argv.slice(2)[0];

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
