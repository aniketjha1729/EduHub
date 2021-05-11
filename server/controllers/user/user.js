const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {
  validateStudentsigninInput,
  validateStudentsignupInput,
} = require("../validation/studentUserValidation");
const User = require("../../models/user/userModel");
const authKey = process.env.SECRET_STUDENT_AUTH_KEY;

/*<==================================================================================================>*/

exports.signIn = (req, res) => {
  const { errors, isValid } = validateStudentsigninInput(req.body);
  if (!isValid) {
    return res.status(422).json(errors);
  } else {
    const { email, password } = req.body;
    User.findOne({ email })
      .then((user) => {
        if (!user) {
          res.status(404).json({ error: "User Not found" });
        } else {
          bcrypt
            .compare(password, user.password)
            .then((isMatch) => {
              if (isMatch) {
                const authToken = jwt.sign(
                  {
                    _id: user._id,
                  },
                  authKey
                );
                res.cookie("token", authToken, { expire: new Date() + 9999 });
                return res.status(200).json({
                  authToken,
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

exports.signUp = (req, res) => {
  const { errors, isValid } = validateStudentsignupInput(req.body);
  if (!isValid) {
    return res.status(422).json(errors);
  } else {
    const { name, email, password, role } = req.body;
    User.findOne({ email })
      .then((user) => {
        if (!user) {
          const newuser = User({
            name,
            email,
            password,
            role,
          });
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newuser.password, salt, (err, hash) => {
              if (err) throw err;
              newuser.password = hash;
              newuser.save((err, user) => {
                res.status(200).json(user);
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
