const Notice = require("../../models/notice/noticeModel");
const User = require("../../models/user/userModel");
const formidable = require("formidable");
const fs = require("fs");

/*<=================================================================================================>*/
exports.verifyUser = (req, res) => {
  User.findById({ _id: req.params.userId })
    .then((user) => {
      if (!user) {
        return res.status(404).json({
          error: "No user found",
        });
      } else {
        const { verify } = req.body;
        user.isVerified = verify;
        user
          .save()
          .then((updateduser) => {
            res.status(200).json(updateduser);
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

exports.verifyNotice = (req, res) => {
  Notice.findById({ _id: req.params.noticeId })
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
