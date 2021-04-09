const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const exprssJwt = require("express-jwt");
const {
  validateStudentsigninInput,
  validateStudentsignupInput,
} = require("../validation/studentUserValidation");
const StudentUser = require("../../models/student/studentUserModel");

exports.studentSignIn = (req, res) => {
  const { errors, isValid } = validateStudentsigninInput(req.body);
  if (!isValid) {
    return res.status(422).json(errors);
  } else {
    const { email, password } = req.body;
    StudentUser.findOne({ email }).then((studentUser) => {
      if (!studentUser) {
        res.status(404).json({ error: "User Not found" });
      } else {
        bcrypt.compare(password, studentUser.password).then((isMatch) => {
          if (isMatch) {
            const authToken = jwt.sign(
              { _id: studentUser._id },
              process.env.SECRET_STUDENT_AUTH_KEY
            );
            res.cookie("token", authToken, { expire: new Date() + 9999 });
            const { _id, name, email, role } = studentUser;
            return res.json({
              authToken,
              user: {
                _id,
                name,
                email,
                role,
              },
            });
          } else {
            return res.status(400).json({ error: "Password does not match" });
          }
        });
      }
    });
  }
};

exports.studentSignUp = (req, res) => {
  const { errors, isValid } = validateStudentsignupInput(req.body);
  if (!isValid) {
    return res.status(422).json(errors);
  } else {
    const { name, email, password } = req.body;
    StudentUser.findOne({ email }).then((studentUser) => {
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
    });
  }
};

exports.getStudentById = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "No user found",
      });
    }
    req.profile = user;
    next();
  });
};

exports.getStudent = (req, res) => {
  return res.json(req.profile);
};

exports.testStudentAuth = (req, res) => {
  res.status(200).json(req.auth);
};
