const {
  createPost,
  getPost,
  updatePost,
  deletePost,
  likeDislikePost,
} = require("../controllers/PostController");

const router = require("express").Router();

router.route("/").post(createPost);
router.route("/:id").get(getPost).put(updatePost).delete(deletePost);
router.route("/:id/react").put(likeDislikePost);

module.exports = router;
