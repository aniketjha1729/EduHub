const express = require("express");
const router = express.Router();
const { studentSignIn,studentSignUp } = require("../../controllers/student/studentUser");

router.get("/test",(req,res)=>{
    res.status(200).json({
        Message:"Students Routes Working"
    })
})
router.post("/signin", studentSignIn);
router.post("/signup", studentSignUp);

module.exports = router;
