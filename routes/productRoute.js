import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddlewares.js";
import { createProductController,
         getProductController,
         getSingleProductController,
         productPhotoController,
         deleteProductController,
         updateProductController,
         productFiltersController,
         productCountController,
         productListController,
         searchProductController,
         relatedProductController,
         productCategoryController,
         braintreeTokenController,
         brainTreePaymentController
        } from "../controllers/productController.js";
import formidable from "express-formidable";
import braintree from "braintree";


const router = express.Router()

//routes 
router.post("/create-product", requireSignIn, isAdmin, formidable() ,createProductController);
//update
router.put("/update-product/:pid", requireSignIn, isAdmin, formidable() , updateProductController);

//get product
router.get("/get-product", getProductController);

//getSignalProduct

router.get("/get-product/:slug", getSingleProductController);

//get Photo
router.get("/product-photo/:pid", productPhotoController);

//deleted product
router.delete("/delete-product/:pid" ,requireSignIn, isAdmin, deleteProductController);

//filter product
router.post("/product-filters", productFiltersController);

//product count
router.get('/product-count',productCountController);

//product count
router.get('/product-list/:page',productListController);

//search product
router.get("/search/:keyword", searchProductController);

//similer product 
router.get("/related-product/:pid/:cid", relatedProductController);

//similer product 
router.get("/product-category/:slug", productCategoryController);

//paymentx routes
//token
router.get("/braintree/token", braintreeTokenController)


//payement
router.post("/braintree/payment" , requireSignIn, brainTreePaymentController)


export default router
