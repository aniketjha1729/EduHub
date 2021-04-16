const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {
  validateStudentsigninInput,
  validateStudentsignupInput,
} = require("../validation/studentUserValidation");
const StudentUser = require("../../models/student/studentUserModel");
const Notification = require("../../models/notice/noticeModel");
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");
const authKey = process.env.SECRET_STUDENT_AUTH_KEY;

/*<==================================================================================================>*/

exports.studentSignIn = (req, res) => {
  const { errors, isValid } = validateStudentsigninInput(req.body);
  if (!isValid) {
    return res.status(422).json(errors);
  } else {
    const { email, password } = req.body;
    StudentUser.findOne({ email })
      .then((studentUser) => {
        if (!studentUser) {
          res.status(404).json({ error: "User Not found" });
        } else {
          bcrypt
            .compare(password, studentUser.password)
            .then((isMatch) => {
              if (isMatch) {
                const authToken = jwt.sign(
                  {
                    _id: studentUser._id,
                  },
                  authKey
                );
                res.cookie("token", authToken, { expire: new Date() + 9999 });
                return res.status(200).json({
                  authToken,
                  user: studentUser,
                });
              } else {
                return res.status(400).json({ error: "Password do not match" });
              }
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log(err));
  }
};

exports.studentSignUp = (req, res) => {
  const { errors, isValid } = validateStudentsignupInput(req.body);
  if (!isValid) {
    return res.status(422).json(errors);
  } else {
    const { name, email, password } = req.body;
    StudentUser.findOne({ email })
      .then((studentUser) => {
        if (!studentUser) {
          const newStudentUser = StudentUser({
            name,
            email,
            password,
          });
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newStudentUser.password, salt, (err, hash) => {
              if (err) throw err;
              newStudentUser.password = hash;
              newStudentUser.save((err, studentUser) => {
                res.status(200).json(studentUser);
              });
            });
          });
        } else {
          res.status(400).json({ error: "User alreay exist" });
        }
      })
      .catch((err) => console.log(err));
  }
};

exports.getAllStudent = (req, res) => {
  StudentUser.find()
    .then((students) => {
      res.status(200).json(students);
    })
    .catch((err) => console.log(err));
};

exports.getStudentById = (req, res) => {
  StudentUser.findById({ _id: req.params.studentId }).then((student) => {
    if (student) {
      res.status(200).json(student);
    } else {
      return res.status(404).json({ err: "No student found" });
    }
  });
};

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

exports.getAllNotification = (req, res) => {
  let data = [];
  Notification.find()
    .select("-document")
    .then((notifcations) => {
      if (!notifcations) {
        return res.status(404).json({ message: "No notice found" });
      }
      notifcations.map((notifcation) => {
        if (notifcation.isVerified) {
          data.push(notifcation);
        }
      });
      res.status(200).json(data);
    });
};

exports.createNotifcation = (req, res) => {
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
    let notification = new Notification(fields);
    if (file.document) {
      if (file.document.size > 300000) {
        return res.status(400).json({
          errors: "file is to big",
        });
      }
      notification.document.data = fs.readFileSync(file.document.path);
      notification.document.contentType = file.document.type;
      notification.isVerified = false;
    }
    notification.save((err, notification) => {
      if (err) {
        return res.status(400).json({
          errors: "saving failed",
        });
      }
      res.json(notification);
    });
  });
};
