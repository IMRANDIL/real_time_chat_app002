const jwt = require("jsonwebtoken");

// Generate a JWT token for the user.

exports.generateJwt = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "10h" });
};
