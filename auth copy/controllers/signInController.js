const signInService=require('../services/signInService');

const signINController = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const token=await signInService({email,password})

    if(!token){
      throw new Error('Invalid credentials')
    }

    res.status(200).json({token})
  } catch (err) {
    next(err);
  }
};

module.exports = signINController;
