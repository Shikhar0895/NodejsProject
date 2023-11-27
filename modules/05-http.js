const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Welcome to our home Page");
  } else if (req.url === "/about") {
    res.write("This is about page");
  } else {
    res.write(`<h1>Oops something went wrong!!</h1>`);
  }
  res.end();
});

server.listen(5000, () => {
  console.log("server listening at 5000");
});
