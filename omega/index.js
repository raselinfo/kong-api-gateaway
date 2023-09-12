const express=require("express")
const cors=require("cors")

const app=express()

app.get("/echo",(req,res)=>{
    console.log("echo")
    res.setHeader('Cache-Control', 'max-age=300'); 

    res.json({message:"this is Omega server",name:"rasel",age:25,sub:["bangla","english"]})
})

app.get("/remote",(req,res)=>{
    console.log("remote")
    res.setHeader('Cache-Control', 'max-age=300'); 

    res.json({message:"this is Omega server",name:"this is remote server"})
})

app.listen(4003,()=>{
    console.log("http://localhost:4003")
})
