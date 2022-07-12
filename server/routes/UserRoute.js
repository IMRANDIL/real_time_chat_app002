const router = require("express").Router();

const { getUser } = require("../controllers/UserController");

router.route("/:id").get(getUser);

module.exports = router;
