const { createPost, getPost } = require("../controllers/PostController");

const router = require("express").Router();

router.route("/").post(createPost);
router.route("/:id").get(getPost);

module.exports = router;
