const { validateAdminInput } = require("../validation/adminUserValidation");
const AdminUser = require("../../models/admin/adminUserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authKey = process.env.SECRET_ADMIN_AUTH_KEY;

/*<=================================================================================================>*/

exports.createAdmin = (req, res) => {
  const newAdmin = new AdminUser({
    name: "admin",
    email: "admintest@test.com",
    password: "admin@1234",
  });
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newAdmin.password, salt, (err, hash) => {
      if (err) throw err;
      newAdmin.password = hash;
      newAdmin.save((err, user) => {
        res.status(200).json(user);
      });
    });
  });
};

exports.adminSignIn = (req, res) => {
  const { errors, isValid } = validateAdminInput(req.body);
  if (!isValid) {
    return res.status(422).json(errors);
  } else {
    const { email, password } = req.body;
    AdminUser.findOne({ email })
      .then((adminUser) => {
        if (!adminUser) {
          res.status(404).json({ error: "User Not found" });
        } else {
          bcrypt
            .compare(password, adminUser.password)
            .then((isMatch) => {
              if (isMatch) {
                const authToken = jwt.sign(
                  {
                    _id: adminUser._id,
                  },
                  authKey,
                  {
                    expiresIn: "48h",
                  }
                );
                return res.status(200).json({
                  authToken
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
