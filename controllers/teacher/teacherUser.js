const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {
  validateTeachersigninInput,
  validateTeachersignupInput,
} = require("../validation/teacherUserValidation");
const TeacherUser = require("../../models/teacher/teacherUserModel");
const authKey = process.env.SECRET_TEACHER_AUTH_KEY;

/*<==================================================================================================>*/

exports.teacherSignIn = (req, res) => {
  const { errors, isValid } = validateTeachersigninInput(req.body);
  if (!isValid) {
    return res.status(422).json(errors);
  } else {
    const { email, password } = req.body;
    TeacherUser.findOne({ email })
      .then((teacherUser) => {
        if (!teacherUser) {
          res.status(404).json({ error: "User Not found" });
        } else {
          bcrypt
            .compare(password, teacherUser.password)
            .then((isMatch) => {
              if (isMatch) {
                const authToken = jwt.sign(
                  {
                    _id: teacherUser._id,
                  },
                  authKey
                );
                res.cookie("token", authToken, { expire: new Date() + 9999 });
                return res.status(200).json({
                  authToken,
                  user: teacherUser,
                });
              } else {
                return res
                  .status(400)
                  .json({ error: "Password does not match" });
              }
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log(err));
  }
};

exports.teacherSignUp = (req, res) => {
  const { errors, isValid } = validateTeachersignupInput(req.body);
  if (!isValid) {
    return res.status(422).json(errors);
  } else {
    const { name, email, password } = req.body;
    TeacherUser.findOne({ email })
      .then((teacherUser) => {
        if (!teacherUser) {
          const newTeacherUser = TeacherUser({
            name,
            email,
            password,
          });
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newTeacherUser.password, salt, (err, hash) => {
              if (err) throw err;
              newTeacherUser.password = hash;
              newTeacherUser.save((err, teacherUser) => {
                res.status(200).json(teacherUser);
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

