const express = require("express");
const router = express.Router();
const {
  createNotice,
  getAllNotices,
  verifyNotice,
  verifyUser,
  deleteNotice,
  deleteUser,
  currentProfile,
} = require("../../controllers/admin/adminDashboard");

const {
  getAllUsers,
} = require("../../controllers/user/userDashboard");

const { isAdmin, isAdminAuth } = require("../../controllers/auth");

/*<======================================================================================================>*/

router.get("/testauth", isAdminAuth, isAdmin, (req, res) => {
  res.status(200).json({
    Message: "New Auth Working",
  });
});

router.get("/currentUser", isAdminAuth, isAdmin, currentProfile);

router.put("/verify/:userId", isAdminAuth, isAdmin, verifyUser);

router.delete("/deleteUser/:userId", isAdminAuth, isAdmin, deleteUser);

router.post("/createnotice", isAdminAuth, isAdmin, createNotice);

router.put("/verifynotice/:noticeId", isAdminAuth, isAdmin, verifyNotice);

router.delete("/deletenotice/:noticeId", isAdminAuth, isAdmin, deleteNotice);

router.get("/notices", isAdminAuth, isAdmin, getAllNotices);

router.get("/allUsers", isAdminAuth, isAdmin, getAllUsers);

module.exports = router;
