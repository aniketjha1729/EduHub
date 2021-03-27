const {
  validateTeachersigninInput,
  validateTeachersignupInput,
} = require("../validation/teacherUserValidation");

exports.teacherSignIn = (req, res) => {
  const { errors, isValid } = validateTeachersigninInput(req.body);
  if (!isValid) {
    return res.status(422).json(errors);
  } else {
    return res.status(200).json({
      Message: "All Good",
    });
  }
};

exports.teacherSignUp = (req, res) => {
  const { errors, isValid } = validateTeachersignupInput(req.body);
  if (!isValid) {
    return res.status(422).json(errors);
  } else {
    return res.status(200).json({
      Message: "All Good",
    });
  }
};
