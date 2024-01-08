const getAllProductsService=require("../services/getAllProductsService")

const getAllProductsController=async (req,res,next)=>{
    try{
        const products=await getAllProductsService()
        res.status(200).json({message:"Success",products})
    }catch(err){
        next(err)
    }
}


module.exports=getAllProductsController