const TeacherUser = require("../../models/teacher/teacherUserModel");
const Notice = require("../../models/notice/noticeModel");
const formidable = require("formidable");
const fs = require("fs");

/*<==================================================================================================>*/

exports.getAllTeacher = (req, res) => {
  TeacherUser.find()
    .then((teachers) => {
      res.status(200).json(teachers);
    })
    .catch((err) => console.log(err));
};

exports.getTeacherById = (req, res) => {
  TeacherUser.findById({ _id: req.params.teacherId }).then((teacher) => {
    if (teacher) {
      res.status(200).json(teacher);
    } else {
      return res.status(404).json({ err: "No teacher found" });
    }
  });
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
