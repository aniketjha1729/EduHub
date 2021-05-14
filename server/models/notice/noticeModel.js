const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const NoticeSchema = new Schema({
  file_path: {
    type: String,
    required: true
  },
  file_mimetype: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true,
  },
  heading:{
    type: String,
    required: true,
  },
  postedBy:{
    type:String,
    required:true,
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
