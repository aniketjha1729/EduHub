const express = require("express");
const router = express.Router();
const {
  createNotice,
  getAllNotices,
  verifyNotice,
  verifyUser,
} = require("../../controllers/admin/adminDashboard");

const { isAdmin, isAdminAuth } = require("../../controllers/auth");

/*<======================================================================================================>*/

router.get("/testauth", isAdminAuth, isAdmin, (req, res) => {
  res.status(200).json({
    Message: "New Auth Working",
  });
});

router.put("/verify/:userId", isAdminAuth, isAdmin, verifyUser);

router.post("/createnotice", isAdminAuth, isAdmin, createNotice);

router.get("/notices", isAdminAuth, isAdmin, getAllNotices);

router.put(
  "/verifynotice/:noticeId",
  isAdminAuth,
  isAdmin,
  verifyNotice
);

module.exports = router;
