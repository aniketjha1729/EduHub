const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const NoticeSchema = new Schema({
  document: {
    data: Buffer,
    contentType: String,
  },
  content: {
    type: String,
    required: true,
  },
  isVerified: {
    type: Boolean,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = User = mongoose.model("notices", NoticeSchema);
