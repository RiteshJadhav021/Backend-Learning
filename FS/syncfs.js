const fs=require('fs');
const path = require('path');

const fileName="Test.txt";

//WRITE FILE*--

// const filePath=path.join(__dirname,fileName);
// console.log(__dirname);
// console.log(__filename);

// const writeFile=fs.writeFileSync(filePath,"this is info of our project hello",'utf-8');

// console.log(writeFile);

//READ FILE*--

// const filePath=path.join(__dirname,fileName);

// const readFile=fs.readFileSync(filePath,"utf-8");
// console.log(readFile);

//APPEND FILE

const filePath=path.join(__dirname,fileName);

const appendFile=fs.appendFileSync(filePath,"\nritesh how are you","utf-8");
console.log(appendFile);


//DELETE FILE
// const deletefile=fs.unlinkSync(filePath);
