const http = require('http');
const data = require('./MOCK_DATA (2).json');

const myServer = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  const url = new URL(req.url, `http://${req.headers.host}`);

  switch (url.pathname) {

    case '/':
      res.end(JSON.stringify({ message: "Welcome to Server" }));
      break;

    case '/users':
      res.end(JSON.stringify(data));
      break;
   

    default:
      res.end(JSON.stringify({ message: "Route not found" }));
  }
});

myServer.listen(5000, () => console.log('server started'));