const express = require("express");
const router = express.Router();
const {
  createNotice,
  getAllNotices,
  verifyNotice,
  verifyUser,
} = require("../../controllers/admin/adminDashboard");

const { getAllUsers } = require("../../controllers/user/userDashboard");

const { isAdmin, isAdminAuth } = require("../../controllers/auth");

/*<======================================================================================================>*/

router.get("/testauth", isAdminAuth, isAdmin, (req, res) => {
  res.status(200).json({
    Message: "New Auth Working",
  });
});

router.put("/verify/:userId", isAdminAuth, isAdmin, verifyUser);

router.post("/createnotice", isAdminAuth, isAdmin, createNotice);

router.put("/verifynotice/:noticeId", isAdminAuth, isAdmin, verifyNotice);

router.get("/notices", isAdminAuth, isAdmin, getAllNotices);

router.get("/allUsers", isAdminAuth, isAdmin, getAllUsers);

module.exports = router;
