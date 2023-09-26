const express=require("express")
const cors=require("cors")

const app=express()

app.get("/", (req, res) => {
  // res.setHeader("Cache-Control", "max-age=300");
  console.log(req.headers)

  res.json({
    message: "this is Alpha",
    name: "rasel",
    age: 25,
    sub: ["bangla", "english"],
  });
});


app.get("/echo",(req,res)=>{
    // res.setHeader('Cache-Control', 'max-age=300'); 
     console.log(req.headers)

    res.json({message:"this is Alpha",name:"rasel",age:25,sub:["bangla","english"]})
})

app.get("/remote",(req,res)=>{
    // res.setHeader('Cache-Control', 'max-age=300'); 
     console.log(req.headers);

    res.json({message:"this is Alpha",name:"this is remote server"})
})

app.listen(4001,()=>{
    console.log("http://localhost:4001")
})
