// const http = require("http");
// const myServer = http.createServer((req, res) => {
//   console.log(req.url);
//   // if (req.url === "/") {
//   //   res.write("<h1>home page </h1>");
//   //   res.end("hello");
//   // } else if (req.url === "/test") {
//   //   res.write("<h1>this is my test page </h1>");
//   //   res.end("hello");
//   // } else if (req.url === "/about") {
//   //   res.write("<h1>this is my about page </h1>");
//   //   res.end("hello");
//   // } else res.end("hello");

//   const arg = process.argv;
// console.log(arg[2]);
// const port = arg[2];

// res.write("test input form cmd");
// res.end();
// });


// myServer.listen(port, () => {
//   console.log("my server started");
// });
const http = require("http");

const arg = process.argv;
const port = arg[2] || 3000; // default port

const myServer = http.createServer((req, res) => {
  console.log(req.url);

  res.write("test input from cmd");
  res.end();
});

myServer.listen(port, () => {
  console.log(`my server started on port ${port}`
    
  );
});