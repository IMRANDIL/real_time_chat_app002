const { createPost } = require("../controllers/PostController");

const router = require("express").Router();

router.route("/").post(createPost);

module.exports = router;
