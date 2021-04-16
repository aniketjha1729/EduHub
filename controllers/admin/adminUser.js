const { validateAdminInput } = require("../validation/adminUserValidation");
const AdminUser = require("../../models/admin/adminUserModel");
const Notification = require("../../models/notice/noticeModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");
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
      notification.isVerified = true;
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
