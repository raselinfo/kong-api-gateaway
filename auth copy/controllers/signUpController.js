const signUpService = require('../services/signUpService')
const signUpController=async(req,res,next)=>{
    try{
        const {name,email,password}=req.body

        const user=await signUpService({name,email,password})

        if(!user){
            throw new Error('User not created!')
        }

        res.status(200).json({
            message:'User created successfully',
            links:{
                signIn:'${BASE_URL}/api/v1/signin'
            }        
        })

    }catch(err){
        next(err)
    }
}


module.exports= signUpController