const { error } = require('console');
const fs=require('fs');
const path=require('path');

const fileName="Async.txt";

const filePath=path.join(__dirname,fileName);

//WRITE FILE

// const writeFile=fs.writeFile(filePath,"this is backend magic","utf-8",(err)=>{
//     if(err) console.error(err);
//     else console.log("file saved successfully");
// });

// console.log(writeFile);

//READ FILE

// const readFile=fs.readFile(filePath,"utf-8",(err,data)=>{
//     if(err) console.error(err);
//     else console.log(data);
// });
// console.log(readFile);

//APPEND FILE

const appendFile=fs.appendFile(filePath,"\n updated data","utf-8",(err)=>{
    if(err) console.error(err);
    else console.log("data updated");
});
console.log(appendFile);

//DELETE FILE

// const deletefile=fs.unlink(filePath,(err)=>{
//     if(err) console.error(err);
//     else console.log("file deleted");
// });
// console.log(deletefile);

