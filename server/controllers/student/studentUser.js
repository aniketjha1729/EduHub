const {
  validateStudentsigninInput,
  validateStudentsignupInput,
} = require("../validation/studentUserValidation");

exports.studentSignIn = (req, res) => {
  const { errors, isValid } = validateStudentsigninInput(req.body);
  if (!isValid) {
    return res.status(422).json(errors);
  } else {
    return res.status(200).json({
      Message: "All Good",
    });
  }
};

exports.studentSignUp = (req, res) => {
  const { errors, isValid } = validateStudentsignupInput(req.body);
  if (!isValid) {
    return res.status(422).json(errors);
  } else {
    return res.status(200).json({
      Message: "All Good",
    });
  }
};
