const router = require("express").Router();

const {
  createChat,
  userChats,
  findChat,
} = require("../controllers/ChatController");

router.route("/").post(createChat);
router.route("/:userId").get(userChats);
router.route("/find/:firstId/:secondId").get(findChat);

module.exports = router;
