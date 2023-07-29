const express=require("express")
const cors=require("cors")

const app=express()

app.get("/echo",(req,res)=>{
    console.log("echo")
    res.status(200).json({name:"rasel",age:25,sub:["bangla","english"]})
})

app.get("/remote",(req,res)=>{
    console.log("remote")

    res.status(200).json({name:"this is remote server"})
})

app.listen(4000,()=>{
    console.log("http://localhost:4000")
})
