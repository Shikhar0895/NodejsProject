// const EventEmitter = require("events");

// const customEvent = new EventEmitter();
// //first subscribe or listen to the event and then emit it
// //subscribing to the event named response
// customEvent.on("response", () => {
//   console.log(`data recieved`);
// });

// //
// customEvent.emit("response");

// //
// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.end("Welcome");
// });

// //Using event emitter
// const server2 = http.createServer();

// server2.on("request", (req, res) => {
//   res.end("Welcome back");
// });

// server2.listen(5000, () => console.log("server listening to 5000 "));

const http = require("http");
const { createReadStream } = require("fs");
const { error } = require("console");

const server = http.createServer((req, result) => {
  //   readFile("../data/subfolder/bigFile.txt", "utf8", (err, res) => {
  //     if (err) {
  //       console.log(err);
  //       return;
  //     }
  //     result.end(res);
  //   });
  const fileStream = createReadStream("../data/subfolder/bigFile.txt", "utf8");
  fileStream.on("open", () => {
    fileStream.pipe(result);
  });

  fileStream.on("error", (err) => {
    result.end(err);
  });
});

server.listen(5000, () => {
  console.log("server listening at 5000");
});
