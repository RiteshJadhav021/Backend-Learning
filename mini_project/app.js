import { log } from 'console';
import readline from 'readline'; //readline is provided by node.js by default in package.json there is a type:module where these readline module contains.

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout  //with the help of this we can read and write in the CLI.(command line interface).
})

const todos=[];  //to add the task here.


const viewMenu=()=>{
    console.log("\n1:Add a Task");
    console.log("2:View task");
    console.log("3:Exit");
    rl.question("choose an option :",handleSubmit);  //handleSubmit function is used here coz to choose any of them.
}

const handleSubmit=(option)=>{
    if(option === "1"){
        rl.question("Enter the task :",(task)=>{
            todos.push(task);
            console.log("Task added :",task);
            viewMenu();
        })
    }
    else if(option==="2"){
        console.log("\n Your todo list :");
        todos.forEach((task,index)=>{
            console.log(`${index+1}.${task}`);
        })
        viewMenu();
    }
    else if(option==="3"){
        console.log("Good byee");
        rl.close();
    }
    else{
        console.log("Invalid option");
        viewMenu();
    }
    
}
viewMenu();
