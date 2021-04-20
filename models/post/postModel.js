const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const PostSchema = new Schema({
  document: {
    data: Buffer,
    contentType: String,
  },
  content: {
    type: String,
    required: true,
  },
  postedBy: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  comments:[
    {
      commentedBy:{
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  likes: [
    {
      likedBy: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = User = mongoose.model("posts", PostSchema);
