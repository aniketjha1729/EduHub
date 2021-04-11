const express = require("express");
const router = express.Router();
const {
  adminSignIn,
  getAdminById,
  getAdmin
} = require("../../controllers/admin/adminUser");
const {
  isAdminSignedIn,
  isAdminAuthenticated,
  isAdmin,
} = require("../../controllers/auth");

/*<================================================================================================>*/

router.get("/test", (req, res) => {
  res.status(200).json({
    Message: "Admin Routes Working",
  });
});

router.param("adminId", getAdminById);

router.post("/signin", adminSignIn);
router.get(
  "/testauth/:adminId",
  isAdminSignedIn,
  isAdminAuthenticated,
  isAdmin,
  getAdmin
);

module.exports = router;
