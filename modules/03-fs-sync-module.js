const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("../data/subfolder/first.txt", "utf8");
const second = readFileSync("../data/subfolder/second.txt", "utf8");

const writefileOp = writeFileSync;
writefileOp(
  "../data/subfolder/result_write.txt",
  `Here is the result: ${first} and this is second: ${second}`,
  { flag: "a" }
);
