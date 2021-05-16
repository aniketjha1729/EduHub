const AdminUser = require("../../models/admin/adminUserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authKey = process.env.SECRET_ADMIN_AUTH_KEY;
const { validationResult } = require("express-validator");

/*<=================================================================================================>*/

exports.createAdmin = (req, res) => {
  const newAdmin = new AdminUser({
    name: "Admin",
    email: "admin@test.com",
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

exports.adminSignIn = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  } else {
    const { email, password } = req.body;
    try {
      let adminUser = await AdminUser.findOne({ email });
      if (!adminUser) {
        return res
          .status(404)
          .json({ errors: [{ msg: "User does not exists" }] });
      }
      const isMatch = await bcrypt.compare(password, adminUser.password);
      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Password does not match" }] });
      }
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
      });
    } catch (err) {
      res.status(500).json({ errors: [{ msg: "Server Error" }] });
    }
  }
};
