const User = require("../../models/user/userModel");
const Notice = require("../../models/notice/noticeModel");
const Post = require("../../models/post/postModel");
const formidable = require("formidable");
const fs = require("fs");
const path = require("path");

/*<=========================================User==================================================>*/

exports.currentProfile = async (req, res) => {
  try {
    let user = await User.findById(req.user.id).select("-password");
    if (!user) {
      return res.json({ errors: [{ msg: "Invalid token" }] });
    }
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json({ errors: [{ msg: "Server Error" }] });
  }
};

exports.getUserById = async (req, res) => {
  try {
    let user = await User.findById({ _id: req.params.userId }).select(
      "-password"
    );
    if (!user) {
      return res.status(404).json({ errors: [{ msg: "No user found" }] });
    }
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json({ errors: [{ msg: "Server Error" }] });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const user = await User.find().select("-password");
    if (!user) {
      return res.status(404).json({ errors: [{ msg: "No user found" }] });
    }
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json({ errors: [{ msg: "Server Error" }] });
  }
};
// <========================================************===========================================>

// <========================================Notice=================================================>

(exports.createNotice = async (req, res) => {
  try {
    const { content, heading } = req.body;
    const { path, mimetype } = req.file;
    const notice = new Notice({
      postedBy: req.user.role == "Teacher" ? "Teacher" : "Student",
      isVerified: req.user.role == "Teacher" ? true : false,
      content,
      heading,
      file_path: path,
      file_mimetype: mimetype,
    });
    await notice.save();
    res.send("file uploaded successfully.");
  } catch (error) {
    res.status(400).send("Error while uploading file. Try again later.");
  }
}),
  (error, req, res, next) => {
    if (error) {
      res.status(500).send(error.message);
    }
  };

exports.getAllNotices = async (req, res) => {
  try {
    const files = await Notice.find({ isVerified: true });
    res.send(files);
  } catch (error) {
    res.status(400).send("Error while getting list of files. Try again later.");
  }
};

exports.downloadNotice = async (req, res) => {
  try {
    const notice = await Notice.findById(req.params.noticeId);
    res.set({
      "Content-Type": notice.file_mimetype,
    });
    res.sendFile(path.join(__dirname, "../../", notice.file_path));
  } catch (error) {
    res.status(400).send("Error while downloading file. Try again later.");
  }
};

exports.verifyNotice = (req, res) => {
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
      console.log(err);
      return res.status(400).json({
        errors: [{ msg: "Problem with file" }],
      });
    }
    const { content } = fields;
    if (!content) {
      return res.status(400).json({
        errors: [{ msg: "Content Required" }],
      });
    }
    let post = new Post(fields);
    post.postedBy = req.user._id;
    if (file.document) {
      if (file.document.size > 300000) {
        return res.status(400).json({
          errors: [{ msg: "File is to big!" }],
        });
      }
      post.document.data = fs.readFileSync(file.document.path);
      post.document.contentType = file.document.type;
    }
    post.save((err, post) => {
      if (err) {
        return res.status(400).json({
          errors: [{ msg: "Something went wrong!" }],
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

exports.getAllPost = (req, res) => {
  let filterPost = [];
  Post.find()
    .populate("postedBy", "_id name department role year")
    .populate("comments.commentedBy", "_id name")
    .then((posts) => {
      posts.map((post) => {
        if (post.postedBy.department == req.user.department) {
          filterPost.push(post);
        }
      });
    })
    .then(() => res.status(200).json(filterPost))
    .catch((err) => console.log(err));
};

exports.getPostByDepartment = (req, res) => {
  let filterPost = [];
  Post.find()
    .select("-document")
    .populate("postedBy")
    .then((posts) => {
      posts.map((post) => {
        if (post.postedBy.department == req.params.departmentName) {
          filterPost.push(post);
        }
      });
    })
    .then(() => res.status(200).json(filterPost))
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

exports.photo = (req, res) => {
  Post.findById({ _id: req.params.postId }).then((post) => {
    if (post.document.data) {
      res.set("Content-Type", post.document.contentType);
      return res.send(post.document.data);
    }
  });
};
// <========================================************===========================================>

// <========================================Comment================================================>

exports.addComment = (req, res) => {
  const { comment } = req.body;
  if (!comment) {
    console.log(comment);
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

exports.addLikes = (req, res) => {
  Post.findByIdAndUpdate(
    req.params.postId,
    {
      $push: { likes: req.user.id },
    },
    {
      new: true,
    }
  ).exec((err, result) => {
    if (err) {
      return res.status(422).json({ error: err });
    } else {
      res.json(result);
    }
  });
};

exports.removeLike = (req, res) => {
  Post.findByIdAndUpdate(
    req.params.postId,
    {
      $pull: { likes: req.user.id },
    },
    {
      new: true,
    }
  ).exec((err, result) => {
    if (err) {
      return res.status(422).json({ error: err });
    } else {
      res.json(result);
    }
  });
};
// <========================================************===========================================>
