const router = require("express").Router();

const {
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/UserController");

router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;
