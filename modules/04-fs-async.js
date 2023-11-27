const { log } = require("console");
const { readFile, writeFile } = require("fs");

// const first = readFile("../data/subfolder/first.txt", "utf-8", (err, res) => {
//   if (err) return;
//   const firstres = res;
//   console.log("from inside cb", firstres);
// });
// console.log("outside cb", first);

readFile("../data/subfolder/file.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  console.log(first);

  readFile("../data/subfolder/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }

    const second = result;
    console.log(result);

    writeFile(
      "../data/subfolder/result_async.txt",
      `here are the contents : ${first} and ${second}`,
      { flag: "a" },
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
      }
    );
  });
});
