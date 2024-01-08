const prisma=require("../utils/prisma")


const createProductService=async({name,price,quantity,userID})=>{
    if(!name || !price || !quantity || !userID){
        const error=new Error("name, price, quantity, and userID are required")
        error.status=400
        throw error
    }
    const createdProduct=await prisma.product.create({
        data:{
            name,
            price,
            quantity,
            createdBy:userID
        }
    })

    return createdProduct
}


module.exports=createProductService