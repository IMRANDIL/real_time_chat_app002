const User = require("../models/UserModel");
const bcrypt = require("bcryptjs");

exports.registerUser = async (req, res) => {
  const { username, password, firstname, lastname } = req.body;

  if (!username || !password || !firstname || !lastname) {
    return res.status(400).json({
      message: "Please enter all fields",
    });
  }

  try {
    //check if username already exists....

    const isUserExist = await User.findOne({ username });

    if (isUserExist) {
      return res.status(400).json({
        message: "Username already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      password: hashedPassword,
      firstname,
      lastname,
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.loginUser = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({
      message: "Please enter all fields",
    });
  }
  try {
    //check if username exists

    const isUserExist = await User.findOne({ username });

    if (!isUserExist) {
      return res.status(400).json({
        message: "Username does not exist",
      });
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      isUserExist.password
    );

    if (!isPasswordValid) {
      return res.status(400).json({
        message: "Invalid Credentials",
      });
    }

    //now send the response...

    const userWithoutPassword = await User.findOne({ username }).select(
      "-password"
    );

    res.status(200).json(userWithoutPassword);
  } catch (error) {
    res.status(500).json(error);
  }
};
