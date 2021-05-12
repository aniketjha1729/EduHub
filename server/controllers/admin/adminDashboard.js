const Notice = require("../../models/notice/noticeModel");
const User = require("../../models/user/userModel");
const AdminUser = require("../../models/admin/adminUserModel");
const Post = require("../../models/post/postModel");
const formidable = require("formidable");
const fs = require("fs");
const path = require('path');

/*<===============================================================================================>*/

exports.currentProfile = (req, res) => {
  AdminUser.findById(req.user.id).then((user) => {
    if (!user) {
      return res.status(500).json({ msg: "Server error" });
    } else {
      const { name, isAdmin, email, _id } = user;
      return res.status(200).json({
        user: {
          name,
          isAdmin,
          email,
          _id,
        },
      });
    }
  });
};

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

exports.deleteUser = (req, res) => {
  User.findOne({ _id: req.params.userId }).then((user) => {
    if (!user) {
      return res.status(404).json({ message: "No user found" });
    }
    user.remove().then(() => {
      Post.find({ postedBy: req.params.userId })
        .then((post) => {
          post.map((post) => post.remove());
        })
        .then(() => {
          res.status(200).json({ message: "Success" });
        })
        .catch((err) => console.log(err));
    });
  });
};

(exports.createNotice = async (req, res) => {
  console.log("heere");
  try {
    const { content } = req.body;
    const { path, mimetype } = req.file;
    const notice = new Notice({
      content,
      file_path: path,
      file_mimetype: mimetype,
    });
    await notice.save();
    res.send("file uploaded successfully.");
  } catch (error) {
    res.status(400).send("Error while uploading file. Try again later.");
  }
}),
  (error, req, res, next) => {
    if (error) {
      res.status(500).send(error.message);
    }
  };

// exports.createNotice = (req, res) => {
//   let form = new formidable.IncomingForm();
//   form.keepExtensions = true;
//   form.parse(req, (err, fields, file) => {
//     if (err) {
//       return res.status(400).json({
//         errors: "Problem with file",
//       });
//     }
//     const { content } = fields;
//     if (!content) {
//       return res.status(400).json({
//         errors: "Please inlcude all fileds",
//       });
//     }
//     let notice = new Notice(fields);
//     if (!file.document) {
//       return res.status(422).json({ message: "Please attach a file" });
//     }
//     if (file.document) {
//       if (file.document.size > 300000) {
//         return res.status(400).json({
//           errors: "file is to big",
//         });
//       }
//       notice.document.data = fs.readFileSync(file.document.path);
//       notice.document.contentType = file.document.type;
//       notice.isVerified = true;
//       notice.postedBy = "admin";
//     }
//     notice.save((err, notice) => {
//       if (err) {
//         return res.status(400).json({
//           errors: "saving failed",
//         });
//       }
//       res.json(notice);
//     });
//   });
// };

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

exports.deleteNotice = (req, res) => {
  Notice.findOne({ _id: req.params.noticeId })
    .then((notice) => {
      if (!notice) {
        return res.status(404).json({ message: "No notice found" });
      }
      notice.remove().then(() => res.status(200).json({ success: true }));
    })
    .catch((err) => console.log(err));
};

// remove .select("-document")
TODO: exports.getAllNotices = async (req, res) => {
  try {
    const files = await Notice.find({});

    res.send(files);
  } catch (error) {
    res.status(400).send("Error while getting list of files. Try again later.");
  }
};

exports.downloadNotice = async (req, res) => {
  
  try {
    const notice = await Notice.findById(req.params.noticeId);
    console.log(notice);
    res.set({
      "Content-Type": notice.file_mimetype,
    });
    res.sendFile(path.join(__dirname, "../../", notice.file_path));
  } catch (error) {
    res.status(400).send("Error while downloading file. Try again later.");
  }
};
