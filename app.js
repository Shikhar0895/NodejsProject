//------------------Modules-----------------------------------------------------//
/*
1)os
2)path
3)FS module
4)HTTP module
5)Async Patterns
6)Events
*/
const { log } = require("console");
const EventEmitter = require("events");

const customEvent = new EventEmitter();
//first subscribe or listen to the event and then emit it
//subscribing to the event named response
customEvent.on("response", () => {
  console.log(`data recieved`);
});

//
customEvent.emit("response");

//
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Welcome");
});

//Using event emitter
const server2 = http.createServer();

server2.on("request", (req, res) => {
  res.end("Welcome back");
});

server2.listen(5000, () => console.log("server listening to 5000 "));
