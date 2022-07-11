const Message = require("../models/MessageModel");

exports.addMessage = async (req, res) => {
  const { chatId, senderId, text } = req.body;
  try {
    const message = await Message.create({
      chatId,
      senderId,
      text,
    });

    res.status(201).json(message);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

exports.getMessages = async (req, res) => {
  const { chatId } = req.params;

  try {
    const message = await Message.find({ chatId });
    res.status(200).json(message);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
