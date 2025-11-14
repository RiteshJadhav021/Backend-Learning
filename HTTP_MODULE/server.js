const http=require("http");

const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        res.write("hello this is me and this is server. how what.");
        res.end();
    }

      if(req.url==="/about"){
        res.write("this is about section .");
        res.end();
    }

       if(req.url==="/contact"){
        res.write("this is contact section.");
        res.end();
    }
});

  



const PORT=3000;

server.listen(PORT,()=>{
    console.log(`server running on ${PORT}`);
});
