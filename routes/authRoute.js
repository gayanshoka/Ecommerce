import express from 'express';
import {registerController,
        loginController,
        testController,
        forogotPasswordController,
        updateProfileController,
        getOrdersController,
        getAllOrdersController,
        orderStatusController}  from '../controllers/authController.js';
import {requireSignIn,isAdmin} from '../middlewares/authMiddlewares.js'


//router 

const router = express.Router();
//routing
router.post("/register", registerController);

//forogot Password || POST
router.post("/forgot-password", forogotPasswordController)


//LOGIN || POST
router.post("/login", loginController);

router.get("/test", requireSignIn , isAdmin ,testController);

//protected route
router.get("/user-auth", requireSignIn, (req, res)=>{
    res.status(200).send({ok:true});
});
// protect route admin
router.get("/admin-auth", requireSignIn, isAdmin, (req, res)=>{
    res.status(200).send({ok:true});
});

//update profile
router.put('/profile', requireSignIn, updateProfileController)

//orders 
router.get("/orders",requireSignIn ,getOrdersController)
//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);
// order status update
router.put(
    "/order-status/:orderId",
    requireSignIn,
    isAdmin,
    orderStatusController
  )
export default  router;


