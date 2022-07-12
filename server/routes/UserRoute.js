const router = require("express").Router();

const {
  getUser,
  updateUser,
  deleteUser,
  followUser,
} = require("../controllers/UserController");

router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

router.route("/:id/follow").put(followUser);

module.exports = router;
