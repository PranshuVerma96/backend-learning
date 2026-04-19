const http = require("http");
const fs = require("fs");

const arg = process.argv;
const port = arg[2] || 3000;

const myServer = http.createServer((req, res) => {
  fs.readFile("html/web.html", "utf-8", (err, data) => {
    if (err) {
      res.end("error");
      return;
    } else {
      res.writeHead(200, { "content-type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});

myServer.listen(port, () => {
  console.log("server started");
});
