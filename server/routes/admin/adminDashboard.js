const express = require("express");
const router = express.Router();
const multer = require("multer");

const {
  createNotice,
  getAllNotices,
  verifyNotice,
  verifyUser,
  deleteNotice,
  deleteUser,
  currentProfile,
  downloadNotice,
} = require("../../controllers/admin/adminDashboard");

const { getAllUsers } = require("../../controllers/user/userDashboard");

const { isAdmin, isAdminAuth } = require("../../controllers/auth");

/*<======================================================================================================>*/

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, "./files");
    },
    filename(req, file, cb) {
      cb(null, `${new Date().getTime()}_${file.originalname}`);
    },
  }),
  limits: {
    fileSize: 1000000, // max file size 1MB = 1000000 bytes
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpeg|jpg|png|pdf|doc|docx|xlsx|xls)$/)) {
      return cb(
        new Error(
          "only upload files with jpg, jpeg, png, pdf, doc, docx, xslx, xls format."
        )
      );
    }
    cb(undefined, true); // continue with upload
  },
});

router.get("/testauth", isAdminAuth, isAdmin, (req, res) => {
  res.status(200).json({
    Message: "New Auth Working",
  });
});

router.get("/currentUser", isAdminAuth, isAdmin, currentProfile);

router.put("/verify/:userId", isAdminAuth, isAdmin, verifyUser);

router.delete("/deleteUser/:userId", isAdminAuth, isAdmin, deleteUser);

router.post(
  "/createnotice",
  isAdminAuth,
  isAdmin,
  upload.single("file"),
  createNotice
);

router.get("/downloadNotice/:noticeId", isAdminAuth, isAdmin, downloadNotice);

router.put("/verifynotice/:noticeId", isAdminAuth, isAdmin, verifyNotice);

router.delete("/deletenotice/:noticeId", isAdminAuth, isAdmin, deleteNotice);

router.get("/notices", isAdminAuth, isAdmin, getAllNotices);

router.get("/allUsers", isAdminAuth, isAdmin, getAllUsers);

module.exports = router;
