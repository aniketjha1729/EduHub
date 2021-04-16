const jwt = require("jsonwebtoken");
const AdminUser = require("../../models/admin/adminUserModel");
const StudentUser = require("../../models/student/studentUserModel");
const TeacherUser = require("../../models/teacher/teacherUserModel");

/*<=====================================Student====================================================>*/

exports.isStudentAuth = (req, res, next) => {
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
        StudentUser.findById(_id)
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

exports.isStudentVerified = (req, res, next) => {
  if (req.user && req.user.isVerified) {
    return next();
  } else {
    return res.status(401).send({ message: "Student is yet to be verified" });
  }
};

/*<================================================================================================>*/

/*<====================================Teacher=====================================================>*/

exports.isTeacherAuth = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    const onlyToken = token.slice(7, token.length);
    jwt.verify(
      onlyToken,
      process.env.SECRET_TEACHER_AUTH_KEY,
      (err, payload) => {
        if (err) {
          return res.status(401).send({ message: "Invalid Token" });
        }
        const { _id } = payload;
        TeacherUser.findById(_id)
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

exports.isTeacherVerified = (req, res, next) => {
  console.log(req.user);
  if (req.user && req.user.isVerified) {
    return next();
  } else {
    return res.status(401).send({ message: "Teacher is yet to be verified" });
  }
};

/*<================================================================================================>*/

/*<=====================================Admin======================================================>*/

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
