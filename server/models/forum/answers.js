const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AnswerSchema = new Schema({
  question: {
    type: Schema.Types.ObjectId,
    ref: "questions",
  },
  answer: {
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
  answeredBy: {
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

module.exports = Answer = mongoose.model("answers", AnswerSchema);
