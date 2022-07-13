const {
  createPost,
  getPost,
  updatePost,
  deletePost,
  likeDislikePost,
  getTimelinePosts,
} = require("../controllers/PostController");

const router = require("express").Router();

router.route("/").post(createPost);
router.route("/:id").get(getPost).put(updatePost).delete(deletePost);
router.route("/:id/react").put(likeDislikePost);
router.route("/:id/timeline").get(getTimelinePosts);

module.exports = router;
