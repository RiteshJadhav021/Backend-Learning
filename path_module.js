const { log } = require("console");
const path=require("path");

console.log(__dirname);
console.log(__filename);

const filePath=path.join("folder","students","file.txt");
console.log(filePath);

const parsedata= path.parse(filePath);
const resolvedpath=path.resolve(filePath);
const ext=path.extname(filePath);

console.log({parsedata,resolvedpath,ext});