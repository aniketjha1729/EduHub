const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ConversationSchema = new Schema(
  {
    members: {
      type: Array,
    },
  },
  { timestamps: true }
);

module.exports = Conversation = mongoose.model(
  "conversations",
  ConversationSchema
);
