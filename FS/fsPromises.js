const fs=require('fs');
const path=require('path');

const fileName="promise.txt"
const filePath=path.join(__dirname,fileName);

// const filePath1=__dirname;

// fs.promises.readdir(filePath1).then((data)=>console.log(data)).catch((err)=>console.log(err));

//WRITE FILE

const writeFile=fs.promises.writeFile(filePath,"this is initial data","utf-8").then(console.log("file created")).catch((err)=>console.log(err));

console.log(writeFile);

//READ FILE

// const readFile=fs.promises.readFile(filePath,"utf-8").then((data)=>console.log(data)).catch((err)=>console.log(err));
// console.log(readFile);

//APPEND FILE

const appendFile=fs.promises.appendFile(filePath,"\n this is updated data","utf-8").then(console.log("data updated")).catch((err)=>console.log(err));
console.log(appendFile);

//DELETE FILE
// const deletefile=fs.promises.unlink(filePath).then(console.log("file deleted")).catch((err)=>console.log(err));
// console.log(deletefile);