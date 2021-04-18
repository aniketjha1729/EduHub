const express = require("express");
const router = express.Router();
const {
  createNotice,
  getAllNotices,
  verifyNotice,
  verifyStudent,
  verifyTeacher,
} = require("../../controllers/admin/adminDashboard");

const { isAdmin, isAdminAuth } = require("../../controllers/auth");

const {
  getAllTeacher,
  getTeacherById,
} = require("../../controllers/teacher/teacherDashboard");

const {
  getAllStudent,
  getStudentById,
} = require("../../controllers/student/studentDashboard");

/*<======================================================================================================>*/

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

router.post("/createnotification", isAdminAuth, isAdmin, createNotice);
router.get("/notifications", isAdminAuth, isAdmin, getAllNotices);
router.put(
  "/verifynotification/:notificationId",
  isAdminAuth,
  isAdmin,
  verifyNotice
);

module.exports = router;
