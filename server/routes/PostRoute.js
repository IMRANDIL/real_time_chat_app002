const {
  createPost,
  getPost,
  updatePost,
} = require("../controllers/PostController");

const router = require("express").Router();

router.route("/").post(createPost);
router.route("/:id").get(getPost).put(updatePost);

module.exports = router;
