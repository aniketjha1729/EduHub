const Question = require("../../models/forum/questions");
const formidable = require("formidable");
const fs = require("fs");

exports.askQuestion = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, file) => {
    if (err) {
      console.log(err);
      return res.status(400).json({
        errors: [{ msg: "Problem with file" }],
      });
    }
    const { description, tags } = fields;
    if (!description || !tags) {
      return res.status(400).json({
        errors: [{ msg: "Tags and description required" }],
      });
    }
    let question = new Question({
      description,
      tags: Array.isArray(tags)
        ? tags
        : tags.split(",").map((tags) => tags.trim()),
    });
    question.postedBy = req.user._id;
    if (file.document) {
      if (file.document.size > 300000) {
        return res.status(400).json({
          errors: [{ msg: "File Size is to big" }],
        });
      }
      question.document.data = fs.readFileSync(file.document.path);
      question.document.contentType = file.document.type;
    }
    question.save((err, question) => {
      if (err) {
        return res.status(400).json({
          errors: "saving failed",
        });
      }
      res.json(question);
    });
  });
};
