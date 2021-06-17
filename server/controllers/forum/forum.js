const Forum = require("../../models/forum/questions");
const formidable = require("formidable");
const fs = require("fs");

exports.createForum = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, file) => {
    if (err) {
      console.log(err);
      return res.status(400).json({
        errors: [{ msg: "Problem with file" }],
      });
    }
    const { description } = fields;
    if (!description) {
      return res.status(400).json({
        errors: [{ msg: "Description Required" }],
      });
    }
    let forum = new Forum(fields);
    forum.postedBy = req.user._id;
    if (file.document) {
      if (file.document.size > 300000) {
        return res.status(400).json({
          errors: [{ msg: "File Size is to big" }],
        });
      }
      post.document.data = fs.readFileSync(file.document.path);
      post.document.contentType = file.document.type;
    }
    forum.save((err, post) => {
      if (err) {
        return res.status(400).json({
          errors: "saving failed",
        });
      }
      res.json(post);
    });
  });
};
