const jwt = require("jsonwebtoken");
const exprssJwt = require("express-jwt");

exports.isSignedIn = exprssJwt({
  secret: process.env.SECRET_STUDENT_AUTH_KEY,
  userProperty: "auth",
});

exports.isAuthenticated = (req, res, next) => {
  let checker = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!checker) {
    return res.status(403).json({
      error: "Access Denied",
    });
  }
  next();
};
