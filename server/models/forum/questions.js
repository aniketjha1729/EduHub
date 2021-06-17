const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const AnswerSchema = new Schema({
  document: {
    data: Buffer,
    contentType: String,
  },
  description: {
    type: String,
    required: true,
  },
  postedBy: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  tags: {
    type: [String],
    required: true,
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
