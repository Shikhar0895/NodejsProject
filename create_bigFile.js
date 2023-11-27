const { writeFileSync } = require("fs");
const writeBigFile = () => {
  for (i = 0; i < 100000; i++) {
    writeFileSync("./data/subfolder/bigFile.txt", `hello world ${i}\n`, {
      flag: "a",
    });
  }
};

writeBigFile();
