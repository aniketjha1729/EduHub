const { validateAdminInput } = require("../validation/adminUserValidation");
const AdminUser = require("../../models/admin/adminUserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authKey = process.env.SECRET_ADMIN_AUTH_KEY;

/*<=================================================================================================>*/

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
                  authToken,
                  user: adminUser,
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
