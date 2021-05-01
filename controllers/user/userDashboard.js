const User = require("../../models/user/userModel");
const Notice = require("../../models/notice/noticeModel");
const Post = require("../../models/post/postModel");
const formidable = require("formidable");
const fs = require("fs");

/*<=========================================User==================================================>*/

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
// <========================================************===========================================>

// <========================================Notice=================================================>

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

exports.verifyNotice = (req, res) => {
  console.log(req.user.role);
  if (req.user.role == "student") {
    return res.status(401).json({ msg: "Not authorized" });
  }
  Notice.findById({ _id: req.params.noticeId })
    .then((notice) => {
      if (!notice) {
        return res.status(404).json({ message: "No notice found" });
      }
      const { verify } = req.body;
      notice.isVerified = verify;
      notice
        .save()
        .then((updatedNotice) => {
          res.status(200).json(updatedNotice);
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};
// <========================================************===========================================>

// <========================================Post===================================================>

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

exports.deletePost = (req, res) => {
  Post.findById({ _id: req.params.postId }).then((post) => {
    if (!post) {
      return res.status(404).json({ message: "No post found" });
    }
    if (
      post.postedBy.toString() == req.user._id ||
      req.user.role == "teacher"
    ) {
      post.remove().then(() => res.status(200).json({ success: true }));
    } else {
      return res.status(401).json({ message: "Not authorized" });
    }
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
// <========================================************===========================================>

// <========================================Comment================================================>

//add document
TODO: exports.addComment = (req, res) => {
  const { comment } = req.body;
  if (!comment) {
    return res.status(422).json({ message: "Please include all fields" });
  }
  Post.findById(req.params.postId)
    .then((post) => {
      const newComment = {
        comment,
        commentedBy: req.user._id,
      };
      post.comments.unshift(newComment);
      post.save().then((post) => res.json(post));
    })
    .catch((err) => console.log(err));
};

exports.deleteComment = (req, res) => {
  Post.findById(req.params.postId)
    .then((post) => {
      if (
        post.comments.filter(
          (comment) => comment._id.toString() === req.params.commentId
        ).length === 0
      ) {
        return res
          .status(404)
          .json({ commentnotexists: "Comment does not exist" });
      }
      const removeIndex = post.comments
        .map((item) => item._id.toString())
        .indexOf(req.params.commentId);
      if (
        post.comments[removeIndex].commentedBy.toString() === req.user.id ||
        req.user.role == "teacher"
      ) {
        post.comments.splice(removeIndex, 1);
        post.save().then((post) => {
          return res.status(200).json(post);
        });
      } else {
        return res.status(401).json({ message: "No authorized" });
      }
    })
    .catch((err) => res.status(404).json({ postnotfound: "No post found" }));
};

// <========================================************===========================================>

// <========================================Like====================================================>

//add document
TODO: exports.addLikes = (req, res) => {
  Post.findById(req.params.postId)
    .then((post) => {
      if (
        post.likes.filter((like) => like.likedBy.toString() === req.user.id)
          .length > 0
      ) {
        return res
          .status(400)
          .json({ alreadyliked: "User already liked this post" });
      }
      post.likes.unshift({ likedBy: req.user.id });
      post.save().then((post) => res.json(post));
    })
    .catch((err) => console.log(err));
};

// add documment
TODO: exports.removeLike = (req, res) => {
  Post.findById(req.params.postId)
    .then((post) => {
      if (
        post.likes.filter((like) => like.likedBy.toString() === req.user.id)
          .length === 0
      ) {
        return res
          .status(400)
          .json({ notliked: "You have not yet liked this post" });
      }
      const removeIndex = post.likes
        .map((item) => item.likedBy.toString())
        .indexOf(req.user.id);
      post.likes.splice(removeIndex, 1);
      post.save().then((post) => res.json(post));
    })
    .catch((err) => res.status(404).json({ postnotfound: "No post found" }));
};
// <========================================************===========================================>
