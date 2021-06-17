const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  question: {
    type: Schema.Types.ObjectId,
    ref: "questions",
  },
  comment: {
    type: String,
    required: true,
  },
  replies: [
    {
      reply: {
        type: String,
        required: true,
      },
      repliedBy: {
        type: Schema.Types.ObjectId,
        ref: "users",
      },
    },
  ],
  commentedBy: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  upVotes: [
    {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
  ],
  downVotes: [
    {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Question = mongoose.model("questions", QuestionSchema);
