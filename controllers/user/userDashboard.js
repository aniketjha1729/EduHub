const User = require("../../models/user/userModel");
const Notice = require("../../models/notice/noticeModel");
const Post = require("../../models/post/postModel");
const formidable = require("formidable");
const fs = require("fs");

/*<==================================================================================================>*/

exports.getUserById = (req, res) => {
  User.findById({ _id: req.params.userId })
    .then((user) => {
      if (user) {
        res.status(200).json(user);
      } else {
        return res.status(404).json({ err: "No user found" });
      }
    })
    .catch((err) => console.log(err));
};

exports.getAllUsers = (req, res) => {
  User.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => console.log(err));
};

exports.createNotice = (req, res) => {
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
    let notice = new Notice(fields);
    if (!file.document) {
      return res.status(422).json({ message: "Please fill all the fields" });
    }
    if (file.document) {
      if (file.document.size > 300000) {
        return res.status(400).json({
          errors: "file is to big",
        });
      }
      notice.document.data = fs.readFileSync(file.document.path);
      notice.document.contentType = file.document.type;
      if (req.user.role == "student") {
        notice.isVerified = false;
      } else if (req.user.role == "teacher") {
        notice.isVerified = true;
      } else {
        notice.isVerified = false;
      }
    }
    notice.save((err, notice) => {
      if (err) {
        return res.status(400).json({
          errors: "saving failed",
        });
      }
      res.json(notice);
    });
  });
};

//add document
TODO: exports.getAllNotices = (req, res) => {
  let data = [];
  Notice.find({}, {}, { sort: { date: -1 } })
    .select("-document")
    .then((notices) => {
      if (!notices) {
        return res.status(404).json({ message: "No notice found" });
      }
      notices.map((notice) => {
        if (notice.isVerified) {
          data.push(notice);
        }
      });
      res.status(200).json(data);
    })
    .catch((err) => console.log(err));
};

exports.createPost = (req, res) => {
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
    let post = new Post(fields);
    post.postedBy = req.user._id;
    if (file.document) {
      if (file.document.size > 300000) {
        return res.status(400).json({
          errors: "file is to big",
        });
      }
      post.document.data = fs.readFileSync(file.document.path);
      post.document.contentType = file.document.type;
    }
    post.save((err, post) => {
      if (err) {
        return res.status(400).json({
          errors: "saving failed",
        });
      }
      res.json(post);
    });
  });
};

//add document
TODO: exports.getAllPost = (req, res) => {
  Post.find()
    .select("-document")
    .populate("postedBy")
    .then((posts) => {
      res.status(200).json(posts);
    })
    .catch((err) => console.log(err));
};

//add document
TODO: exports.getPostById = (req, res) => {
  Post.findById({ _id: req.params.postId })
    .select("-document")
    .then((post) => {
      if (!post) {
        res.status(404).json({ message: "no post found" });
      }
      res.status(200).json(post);
    })
    .catch((err) => console.log(err));
};

// add document
TODO: exports.getMyPost = (req, res) => {
  Post.find({ postedBy: req.user._id })
    .select("-document")
    .then((posts) => {
      if (!posts) {
        return res.status(404).json({ message: "No post found" });
      }
      res.status(200).json(posts);
    })
    .catch((err) => console.log(err));
};
