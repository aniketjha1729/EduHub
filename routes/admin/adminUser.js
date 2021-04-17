const express = require("express");
const router = express.Router();
const {
  adminSignIn,
  createNotifcation,
  getAllNotification,
  verifyNotification,
} = require("../../controllers/admin/adminUser");

const { isAdmin, isAdminAuth } = require("../../controllers/auth");

const {
  getAllTeacher,
  getTeacherById,
  verifyTeacher,
} = require("../../controllers/teacher/teacherUser");

const {
  getAllStudent,
  getStudentById,
  verifyStudent,
} = require("../../controllers/student/studentUser");

/*<======================================================================================================>*/

router.get("/test", (req, res) => {
  res.status(200).json({
    Message: "Admin Routes Working",
  });
});

router.post("/signin", adminSignIn);

router.get("/testauth", isAdminAuth, isAdmin, (req, res) => {
  res.status(200).json({
    Message: "New Auth Working",
  });
});

router.get("/teachers", isAdminAuth, isAdmin, getAllTeacher);
router.get("/students", isAdminAuth, isAdmin, getAllStudent);

router.get("/teacher/:teacherId", isAdminAuth, isAdmin, getTeacherById);
router.get("/student/:studentId", isAdminAuth, isAdmin, getStudentById);

router.put("/verifyTeacher/:teacherId", isAdminAuth, isAdmin, verifyTeacher);
router.put("/verifyStudent/:studentId", isAdminAuth, isAdmin, verifyStudent);

router.post("/createnotification", isAdminAuth, isAdmin, createNotifcation);
router.get("/notifications", isAdminAuth, isAdmin, getAllNotification);
router.put(
  "/verifynotification/:notificationId",
  isAdminAuth,
  isAdmin,
  verifyNotification
);

module.exports = router;
