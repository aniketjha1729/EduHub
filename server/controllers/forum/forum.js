const Question = require("../../models/forum/questions");
const Answer = require("../../models/forum/answers");
const formidable = require("formidable");
const fs = require("fs");

exports.question = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, file) => {
    if (err) {
      console.log(err);
      return res.status(400).json({
        errors: [{ msg: "Problem with file" }],
      });
    }
    const { description, tags, subject } = fields;
    if (!description || !tags || !subject) {
      return res.status(400).json({
        errors: [{ msg: "Tags and description required" }],
      });
    }
    let question = new Question({
      description,
      subject,
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

exports.allQuestion = (req, res) => {
  Question.find()
    .select("-document")
    .populate("postedBy", "_id name role department year")
    .then((questions) => {
      res.status(200).json(questions);
    });
};

exports.getQuestionByDept = (req, res) => {
  let filteredQuestion = [];
  Question.find()
    .select("-document")
    .populate("postedBy", "_id name role department")
    .then((questions) => {
      questions.map((question) => {
        if (question.postedBy.department == req.params.deptName) {
          filteredQuestion.push(question);
        }
      });
    })
    .then(() => res.status(200).json(filteredQuestion))
    .catch((err) => {
      console.log(err);
    });
};

exports.getQuestionByTags = (req, res) => {
  const { tags } = req.body;
  const getAlltags = Array.isArray(tags)
    ? tags
    : tags.split(",").map((tags) => tags.trim());
  Question.find({ tags: { $in: getAlltags } }).then((question) => {
    return res.status(200).json(question);
  });
};

exports.answer = (req, res) => {
  const { ans } = req.body;
  if (!ans) {
    return res.status(422).json({ message: "Please include all fields" });
  }
  const newAnswer = new Answer({
    answer: ans,
    question: req.params.quesId,
    answeredBy: req.user._id,
  });
  newAnswer
    .save()
    .then((answer) => {
      return res.status(200).json(answer);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getAnswerByQuestion = (req, res) => {
  Answer.find({ question: req.params.quesId }).then((ans) => {
    return res.status(200).json(ans);
  });
};

exports.addReply = (req, res) => {
  const { reply } = req.body;
  if (!reply) {
    return res.status(422).json({ message: "Please include all fields" });
  }
  Answer.findById(req.params.commentId)
    .then((comment) => {
      const newReply = {
        reply,
        repliedBy: req.user._id,
      };
      comment.replies.unshift(newReply);
      comment.save().then((comment) => res.json(comment));
    })
    .catch((err) => console.log(err));
};

exports.upVoteQuestion = (req, res) => {
  Question.findByIdAndUpdate(
    req.params.quesId,
    {
      $push: { upVotes: req.user.id },
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

exports.downVoteQuestion = (req, res) => {
  Question.findByIdAndUpdate(
    req.params.quesId,
    {
      $push: { downVotes: req.user.id },
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

exports.upVoteAns = (req, res) => {
  Answer.findByIdAndUpdate(
    req.params.ansId,
    {
      $push: { upVotes: req.user.id },
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

exports.downVoteAns = (req, res) => {
  Answer.findByIdAndUpdate(
    req.params.ansId,
    {
      $push: { downVotes: req.user.id },
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
