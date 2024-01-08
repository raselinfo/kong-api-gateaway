const router=require("express").Router()

const getAllProductsController=require("../controllers/getAllProductsController")
const getProductByIdController=require("../controllers/getProductByIdController")
const createProductController=require("../controllers/createProductController")
const updateProductController=require("../controllers/updateProductController")
const deleteProductController=require("../controllers/deleteProductController")
const getAllProductsByUserIDController=require("../controllers/getAllProductsByUserIDController")


router.get("/products", getAllProductsController)

router.get("/products/:id", getProductByIdController)

router.post("/products", createProductController)

router.put("/products/:id",updateProductController)

router.delete("/products/:id",deleteProductController)

router.get("/products/user/:userId",getAllProductsByUserIDController)

module.exports=router