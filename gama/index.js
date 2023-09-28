const express=require("express")
const cors=require("cors")
const fs=require("fs")
const https=require("https")
const app=express()
const axios=require("axios")

const key=fs.readFileSync("localhost-key.pem","utf-8")
const cert=fs.readFileSync("localhost.pem","utf-8")

app.get("/",(req,res)=>{
    console.log("echo",req.headers)
    // res.setHeader('Cache-Control', 'max-age=300'); 

    res.json({message:"this is Gama server",name:"rasel",age:25,sub:["bangla","english"]})
})

app.get("/echo",async(req,res)=>{
   try{
     console.log("echo")
    // res.setHeader('Cache-Control', 'max-age=300'); 
    const response = await axios.get("http://kong:8000/alpha");
    console.log("response >>>", response.data);
    res.json({message:"this is Gama server",name:"rasel",age:25,sub:["bangla","english"]})
   }catch(err){
    res.send(err)
   }
})

app.get("/remote",(req,res)=>{
    console.log("remote")
    // res.setHeader('Cache-Control', 'max-age=300'); 

    res.json({message:"this is Gama server",name:"this is remote server"})
})



https.createServer({key,cert},app).listen(4000,()=>{
    console.log("https://localhost:4000")
})
