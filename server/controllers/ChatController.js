const Chat = require("../models/chatModel");

exports.createChat = async (req, res) => {
  try {
    const newChat = await Chat.create({
      members: [req.body.senderId, req.body.receiverId],
    });

    res.status(201).json(newChat);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

//specific user chats....

exports.userChats = async (req, res) => {
  try {
    const chat = await Chat.find({
      members: { $in: [req.params.userId] },
    });

    if (!chat) {
      res.status(404).json({ message: "No chats found" });
    }

    res.status(200).json(chat);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

//specific chat between two people...

exports.findChat = async (req, res) => {
  try {
    const chat = await Chat.findOne({
      members: { $all: [req.params.firstId, req.params.secondId] },
    });

    if (!chat) {
      res.status(404).json({ message: "No chat found" });
    }
    res.status(200).json(chat);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
