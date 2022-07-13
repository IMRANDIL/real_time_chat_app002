const {
  createPost,
  getPost,
  updatePost,
  deletePost,
} = require("../controllers/PostController");

const router = require("express").Router();

router.route("/").post(createPost);
router.route("/:id").get(getPost).put(updatePost).delete(deletePost);

module.exports = router;
