const eventEmitter=require('events');
const fs=require('fs');
const path=require('path');

const emitter=new eventEmitter();

const filePath = path.join(__dirname,  "eventCounts.json");

let eventCounts = JSON.parse(fs.readFileSync(filePath, "utf-8"));


function saveCounts() {
    fs.writeFileSync(filePath, JSON.stringify(eventCounts, null, 2));
}

 emitter.on("user-login",(username)=>{
    eventCounts['user-login']++;
    saveCounts();
    console.log(`${username} loggin successfully`);
 })

 emitter.on("user-purchase",(username,item)=>{
    eventCounts['user-purchase']++;
    saveCounts();
    console.log(`${username} buy a new ${item}`);
 })

  emitter.on("user-update",(username,field)=>{
    eventCounts['user-update']++;
    saveCounts();
    console.log(`${username} update a  ${field}`);
 })
 emitter.on("user-logout",(username)=>{
    eventCounts['user-logout']++;
    saveCounts();
    console.log(`${username} logout successfully`);
 })

 emitter.on("summary",()=>{
    console.log(eventCounts);
 })
 


emitter.emit("user-login","ritesh");
emitter.emit("user-purchase","ritesh","laptop");
emitter.emit("user-update","ritesh","email");
emitter.emit("user-logout","ritesh");

emitter.emit("summary");