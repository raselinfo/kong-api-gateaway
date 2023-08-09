const express=require("express")
const cors=require("cors")

const app=express()

app.get("/echo",(req,res)=>{
    res.setHeader('Cache-Control', 'max-age=300'); 

    res.json({name:"rasel",age:25,sub:["bangla","english"]})
})

app.get("/remote",(req,res)=>{
    res.setHeader('Cache-Control', 'max-age=300'); 

    res.json({name:"this is remote server"})
})

app.listen(4001,()=>{
    console.log("http://localhost:4001")
})
