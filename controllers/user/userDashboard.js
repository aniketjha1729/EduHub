const User = require("../../models/user/userModel");
const Notice = require("../../models/notice/noticeModel");
const formidable = require("formidable");
const fs = require("fs");

/*<==================================================================================================>*/

exports.getAllStudent = (req, res) => {
  User.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => console.log(err));
};

exports.getStudentById = (req, res) => {
  User.findById({ _id: req.params.studentId }).then((user) => {
    if (user) {
      res.status(200).json(user);
    } else {
      return res.status(404).json({ err: "No user found" });
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
      if (req.user.role == "student") {
        notice.isVerified = false;
      } else if (req.user.role == "teacher") {
        notice.isVerified = true;
      } else {
        notice.isVerified = false;
      }
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

exports.getAllNotices = (req, res) => {
  let data = [];
  Notice.find({}, {}, { sort: { date: -1 } })
    .select("-document")
    .then((notices) => {
      if (!notices) {
        return res.status(404).json({ message: "No notice found" });
      }
      notices.map((notice) => {
        if (notice.isVerified) {
          data.push(notice);
        }
      });
      res.status(200).json(data);
    });
};
