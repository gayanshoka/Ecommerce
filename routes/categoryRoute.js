import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddlewares.js";
import { createCategoryController, updateCategoryController, categoryController, singleCategoryController,deleteCategoryController } from "../controllers/categoryController.js";




const router = express.Router();
//routes
router.post("/create-category", requireSignIn, isAdmin, createCategoryController);

//upadte routes
router.put("/update-category/:id", requireSignIn, isAdmin, updateCategoryController);

//get all
router.get("/get-category", categoryController);

//signal route
router.get("/single-category/:slug", singleCategoryController)

//deleted 
router.delete("/delete-category/:id", requireSignIn, isAdmin, deleteCategoryController)
export default router