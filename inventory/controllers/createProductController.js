const createProductService=require("../services/createProductService")

const createProductController=async(req,res,next)=>{

    try{

        const {name,price,quantity,userID}=req.body
        const createdProduct=await createProductService({name,price,quantity,userID})

        res.status(201).json({message:"Success",product:createdProduct})

    }catch(err){
        next(err)  
    }
}

module.exports=createProductController