const express=require("express")
const app=express()

app.get("/echo",(req,res)=>{
    res.json({name:"rasel",age:25,sub:["bangla","english"]})
})
app.listen(4000,()=>{
    console.log("http://localhost:4000")
})