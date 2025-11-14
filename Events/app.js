const eventEmitter=require('events');

const emitter=new eventEmitter();

// emitter.on("greet",()=>{
//     console.log("hello ritesh bhai");
// })

// emitter.emit("greet");

// emitter.on("greet",(username)=>{
//     console.log(`hello ${username}`);
// })

// emitter.emit("greet","ritesh bhi");

emitter.on("greet",(arg)=>{
    console.log(`hello ${arg.name} you are ${arg.prof}`);
})

emitter.emit("greet",{name:"ritesh bhi",prof:"full stack dev"});