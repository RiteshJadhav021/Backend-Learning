const fs=require('fs');
const path=require('path');

const fileName="AsyncAwait.txt";

const filePath=path.join(__dirname,fileName);

//WRITE FILE
const writeFile=async()=>{
    try {
      const res=await  fs.promises.writeFile(filePath,"this is my data","utf-8");
      console.log(res);
      console.log("file created");
        
    } catch (error) {
        console.log(error);
    }
}
writeFile();

//READ FILE
// const readFile=async()=>{
//     try {
//         const res=await fs.promises.readFile(filePath,"utf-8");
//         console.log(res);
        
//     } catch (error) {
//         console.error(error);
//     }
// }
// readFile();

//APPEND FILE
// const appendFile=async()=>{
//     try {
//         const res=await fs.promises.appendFile(filePath,"\n updated data","utf-8");
//         console.log("data updated");
//         console.log(res);
        
//     } catch (error) {
//         console.error(error);
//     }
// }
// appendFile();

//DELETE FILE
// const deleteFile=async()=>{
//    try {
//      await fs.promises.unlink(filePath);
//      console.log("file deleted");
    
//    } catch (error) {
//     console.log(error);
//    }
// }
// deleteFile();