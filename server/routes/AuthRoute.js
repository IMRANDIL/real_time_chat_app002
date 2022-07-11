const router = require("express").Router();

router.route("/").post(authController);

module.exports = router;
