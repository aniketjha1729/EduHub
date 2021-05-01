const jwt = require("jsonwebtoken");
const AdminUser = require("../../models/admin/adminUserModel");
const User = require("../../models/user/userModel");

/*<=====================================Student====================================================>*/

exports.isUserAuth = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    const onlyToken = token.slice(7, token.length);
    jwt.verify(
      onlyToken,
      process.env.SECRET_STUDENT_AUTH_KEY,
      (err, payload) => {
        if (err) {
          return res.status(401).send({ message: "Invalid Token" });
        }
        const { _id } = payload;
        User.findById(_id)
          .select("-password")
          .then((userdata) => {
            req.user = userdata;
            next();
          });
      }
    );
  } else {
    return res.status(401).send({ message: "User not signed in." });
  }
};

exports.isVerified = (req, res, next) => {
  if (!req.user || !req.user.isVerified) {
    return res.status(401).json({ message: "User not verified by admin" });
  }
  if (req.user && req.user.isVerified) {
    return next();
  }
};

exports.isTeacher = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ message: "Not athorized" });
  }
  if (req.user && req.user.role == "teacher") {
    return next();
  }
};

exports.isStudent = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ message: "Not athorized" });
  }
  if (req.user && req.user.role == "student") {
    return next();
  }
};

exports.isAdminAuth = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    const onlyToken = token.slice(7, token.length);
    jwt.verify(onlyToken, process.env.SECRET_ADMIN_AUTH_KEY, (err, payload) => {
      if (err) {
        return res.status(401).send({ message: "Invalid Token" });
      }
      const { _id } = payload;
      AdminUser.findById(_id)
        .select("-password")
        .then((userdata) => {
          req.user = userdata;
          next();
        });
    });
  } else {
    return res.status(401).send({ message: "User not signed in." });
  }
};

exports.isAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    return next();
  }
  return res.status(401).send({ message: "Admin Token is not valid." });
};

/*<================================================================================================>*/
