const router = require("express").Router();

const signINController=require("../controllers/signInController")
const signUpController=require("../controllers/signUpController")
const checkPointController=require("../controllers/checkPointController")

router.post("/signup",signUpController)

router.post("/signin",signINController)

router.post("/checkpoint",checkPointController)

module.exports = router;
