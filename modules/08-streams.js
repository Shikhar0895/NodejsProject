const { createReadStream } = require("fs");

const stream = createReadStream("../data/subfolder/bigFile.txt");

stream.on("data", (result) => {
  console.log(result.length);
});
