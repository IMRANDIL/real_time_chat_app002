const { addMessage, getMessages } = require("../controllers/MessageController");

const router = require("express").Router();

router.route("/").post(addMessage);
router.route("/:chatId").get(getMessages);

module.exports = router;
