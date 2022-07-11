const { registerUser } = require("../controllers/AuthController");

const router = require("express").Router();

router.route("/register").post(registerUser);

module.exports = router;
