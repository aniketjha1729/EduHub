const exprssJwt = require("express-jwt");

/*<============================Student=======================================>*/
exports.isStudentSignedIn = exprssJwt({
  secret: process.env.SECRET_STUDENT_AUTH_KEY,
  userProperty: "auth",
});

exports.isStudentAuthenticated = (req, res, next) => {
  let checker = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!checker) {
    return res.status(403).json({
      error: "Access Denied",
    });
  }
  next();
};

exports.isStudentVerifed = (req, res, next) => {
  if (!req.profile.isVerified) {
    return res.status(403).json({
      error: "Not verifed",
    });
  }
  next();
};
/*=============================================================================*/

/*<============================Teacher=======================================>*/
exports.isTeacherSignedIn = exprssJwt({
  secret: process.env.SECRET_TEACHER_AUTH_KEY,
  userProperty: "auth",
});

exports.isTeacherAuthenticated = (req, res, next) => {
  let checker = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!checker) {
    return res.status(403).json({
      error: "Access Denied",
    });
  }
  next();
};

exports.isTeacherVerifed = (req, res, next) => {
  if (!req.profile.isVerified) {
    return res.status(403).json({
      error: "Not verifed",
    });
  }
  next();
};
/*=============================================================================*/

/*<============================Admin=======================================>*/
exports.isAdminSignedIn = exprssJwt({
  secret: process.env.SECRET_ADMIN_AUTH_KEY,
  userProperty: "auth",
});

exports.isAdminAuthenticated = (req, res, next) => {
  let checker = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!checker) {
    return res.status(403).json({
      error: "Access Denied",
    });
  }
  next();
};

exports.isAdmin = (req, res, next) => {
  if (!req.profile.isAdmin) {
    return res.status(403).json({
      error: "Not verifed",
    });
  }
  next();
};
