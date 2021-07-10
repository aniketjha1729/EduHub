const Conversation = require("../../models/messenger/conversationModel");
const Message = require("../../models/messenger/messageModal");

exports.createNewConversation = async (req, res) => {
  const newConverSation = new Conversation({
    members: [req.body.senderId, req.body.receiverId],
  });

  try {
    const savedConversation = await newConverSation.save();
    res.status(200).json(savedConversation);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getConversationById = async (req, res) => {
  try {
    const converSation = await Conversation.find({
      members: { $in: [req.params.userId] },
    });
    res.status(200).json(converSation);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.createNewMessage = async (req, res) => {
  const newMessage = new Message(req.body);
  try {
    const savedMsg = await newMessage.save();
    res.status(200).json(savedMsg);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getMessage = async (req, res) => {
  try {
    const messages = await Message.find({
      conversationId: req.params.conversationId,
    });
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json(err);
  }
};
