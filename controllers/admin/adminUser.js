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
  }
  const { email, password } = req.body;
  AdminUser.findOne({ email }).then((adminUser) => {
    if (!adminUser) {
      errors.email = "Admin Not found";
      return res.status(404).json(errors);
    }
    bcrypt.compare(password, adminUser.password).then((isMatch) => {
      if (isMatch) {
        const payload = { id: adminUser.id, name: adminUser.email };
        jwt.sign(payload, authKey, { expiresIn: 3600 }, (err, token) => {
          const { _id, name, email, isAdmin } = adminUser;
          res.json({
            user: {
              _id,
              name,
              email,
              isAdmin,
            },
            success: true,
            token: token,
          });
        });
      } else {
        errors.password = "Password does not match";
        return res.status(400).json(errors);
      }
    });
  });
};

exports.isAdmin = (req, res) => {};
