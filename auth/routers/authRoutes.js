const router = require("express").Router();

const signINController=require("../controllers/signInController")
const signUpController=require("../controllers/signUpController")


router.post("/signup",signUpController)

router.post("/signin",signINController)


module.exports = router;
