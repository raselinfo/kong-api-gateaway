

const checkPointService=require('../services/checkPointService');

const checkpointController = async (req, res, next) => {
  try {
    console.log("Checkpoint controller")
    const token=req.headers.authorization.split(' ')[1]
   const isCheckPointPassed=await checkPointService({token})

    if(!isCheckPointPassed){
      throw new Error('Access denied. No token provided.')     
      
    }

    res.status(200).json({message:"Access granted"})
    console.log("response send from checkpoint controller...")
  } catch (err) {
    next(err);
  }
};

module.exports = checkpointController;
