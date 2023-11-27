const path = require("path");

const filepath = path.join("data", "subfolder", "file.txt");
console.log("filepath :", filepath);

const base = path.basename(filepath);
console.log("base:", base);

//Absolute path is often used as this code might be running on a different env. There the path for the resourse may be different
const absolute = path.resolve(__dirname, filepath);
console.log(absolute);
