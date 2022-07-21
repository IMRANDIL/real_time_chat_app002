const router = require("express").Router();

const {
  getUser,
  updateUser,
  deleteUser,
  followUser,
  unFollowUser,
  getAllUsers,
} = require("../controllers/UserController");
router.route("/").get(getAllUsers);
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

router.route("/:id/follow").put(followUser);
router.route("/:id/unfollow").put(unFollowUser);

module.exports = router;
