const express = require("express");
const router = express.Router();
const {
  adminSignIn,
  getAdminById,
  getAdmin,
} = require("../../controllers/admin/adminUser");

const {
  isAdminSignedIn,
  isAdminAuthenticated,
  isAdmin,
} = require("../../controllers/auth");

const {
  getAllTeacher,
  verifyTeacher,
} = require("../../controllers/teacher/teacherUser");

const {
  getAllStudent,
  verifyStudent,
} = require("../../controllers/student/studentUser");

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

router.get(
  "/:adminId/teachers",
  isAdminSignedIn,
  isAdminAuthenticated,
  isAdmin,
  getAllTeacher
);

router.get(
  "/:adminId/students",
  isAdminSignedIn,
  isAdminAuthenticated,
  isAdmin,
  getAllStudent
);

router.put(
  "/:adminId/verifyTeacher/:teacherId",
  isAdminSignedIn,
  isAdminAuthenticated,
  isAdmin,
  verifyTeacher
);

router.put(
  "/:adminId/verifyStudent/:studentId",
  isAdminSignedIn,
  isAdminAuthenticated,
  isAdmin,
  verifyStudent
);

module.exports = router;
