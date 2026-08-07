import http from 'node:http';

const port = parseInt(process.env.PORT, 10);

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from Toolforge\n');
}).listen(port, () => {
  console.log(`listening on ${port}`);
});
