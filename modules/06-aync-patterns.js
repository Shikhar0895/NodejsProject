const { error } = require("console");
const { readFile, writeFile } = require("fs");

//wrapping readFile method inside a promise,
//benefit: if there is a problem while reading the file, then with the help of reject promise would be rejected and if
//all goes ok the promise shall be resolved into res which will be content of the file

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};

getText("./data/subfolder/second.txt")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

//using async await

const readFileAsync = async () => {
  try {
    const first = await getText("../data/subfolder/first.txt", "utf8");
    const second = await getText("../data/subfolder/second.txt", "utf8");
    console.log(first, second);

    writeFile(
      "../data/subfolder/result_writefileviapromise.txt.",
      `using first method ${first} and ${second}`,
      { flag: "a" },
      (err) => {
        if (err) return;
        console.log("write file operation executed successfully");
      }
    );
  } catch (error) {
    console.log(error);
  }
};

readFileAsync();

/*----------------------------------------------------------------------------------------*/

const util = require("util");
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    console.log("Entered Try Block");
    const first = await readFilePromise("../data/subfolder/file.txt", "utf8");
    console.log(first);
    const second = await readFilePromise(
      "../data/subfolder/second.txt",
      "utf8"
    );
    console.log(second);

    await writeFilePromise(
      "../data/subfolder/result_writefileviapromise.txt",
      `This is the content: first - ${first} , second - ${second}`,
      { flag: "a" }
    );

    console.log("write operation sucessfull");
  } catch (error) {
    console.log(error);
  }
};

start();

/*----------------------------------------------------------------------------------------*/

const { readFile, writeFile } = require("fs").promises;

const start2 = async () => {
  try {
    const first2 = await readFile("../data/subfolder/first.txt", "utf8");
    console.log(first2);
  } catch (error) {
    console.log(error);
  }
};

start2();
