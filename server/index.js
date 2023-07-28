const express=require("express")
const cors=require("cors")

const app=express()

app.get("/echo",(req,res)=>{
    res.json({name:"rasel",age:25,sub:["bangla","english"]})
})

app.get("/remote",(req,res)=>{
    res.json({name:"this is remote server"})
})

app.listen(4000,()=>{
    console.log("http://localhost:4000")
})
