const express = require("express");
const router = express.Router();

const {
  createNewConversation,
  getConversationById,
  createNewMessage,
  getMessage,
} = require("../../controllers/messenger/messenger");

router.post("/newconverSation", createNewConversation);
router.get("/:userId", getConversationById);

router.post("/create/newMessage", createNewMessage);
router.get("/message/:conversationId", getMessage);

module.exports = router;
