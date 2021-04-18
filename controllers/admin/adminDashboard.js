const Notice = require("../../models/notice/noticeModel");
const StudentUser = require("../../models/student/studentUserModel");
const TeacherUser = require("../../models/teacher/teacherUserModel");
const formidable = require("formidable");
const fs = require("fs");

/*<=================================================================================================>*/
exports.verifyStudent = (req, res) => {
  StudentUser.findById({ _id: req.params.studentId })
    .then((student) => {
      if (!student) {
        return res.status(404).json({
          error: "No student found",
        });
      } else {
        const { verify } = req.body;
        student.isVerified = verify;
        student
          .save()
          .then((updatedStudent) => {
            res.status(200).json(updatedStudent);
          })
          .catch((err) => console.log(err));
      }
    })
    .catch((err) => console.log(err));
};

exports.verifyTeacher = (req, res) => {
  TeacherUser.findById({ _id: req.params.teacherId })
    .then((teacher) => {
      if (!teacher) {
        return res.status(404).json({
          error: "No teacher found",
        });
      } else {
        const { verify } = req.body;
        teacher.isVerified = verify;
        teacher
          .save()
          .then((updatedTeacher) => {
            res.status(200).json(updatedTeacher);
          })
          .catch((err) => console.log(err));
      }
    })
    .catch((err) => console.log(err));
};

exports.createNotice = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, file) => {
    if (err) {
      return res.status(400).json({
        errors: "Problem with file",
      });
    }
    const { content } = fields;
    if (!content) {
      return res.status(400).json({
        errors: "Please inlcude all fileds",
      });
    }
    let notice = new Notice(fields);
    if (file.document) {
      if (file.document.size > 300000) {
        return res.status(400).json({
          errors: "file is to big",
        });
      }
      notice.document.data = fs.readFileSync(file.document.path);
      notice.document.contentType = file.document.type;
      notice.isVerified = true;
    }
    notice.save((err, notice) => {
      if (err) {
        return res.status(400).json({
          errors: "saving failed",
        });
      }
      res.json(notice);
    });
  });
};

// remove .select("-document")
TODO: exports.getAllNotices = (req, res) => {
  Notice.find({}, {}, { sort: { date: -1 } })
    .select("-document")
    .then((notices) => {
      if (!notices) {
        return res.status(404).json({ message: "No notification found" });
      }
      return res.status(200).json(notices);
    });
};

exports.verifyNotice = (req, res) => {
  Notice.findById({ _id: req.params.notificationId })
    .then((notice) => {
      if (!notice) {
        return res.status(404).json({ message: "No notice found" });
      }
      const { verify } = req.body;
      notice.isVerified = verify;
      notice
        .save()
        .then((updatedNotice) => {
          res.status(200).json(updatedNotice);
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};
