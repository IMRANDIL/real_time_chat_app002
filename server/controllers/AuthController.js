const User = require("../models/UserModel");
const bcrypt = require("bcryptjs");
const { generateJwt } = require("../Utils/generateJwt");

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

    res.status(201).json({
      username: user.username,
      _id: user._id,
      firstname: user.firstname,
      lastname: user.lastname,
      following: user.following,
      followers: user.followers,
      profilePicture: user.profilePicture,
      coverPicture: user.coverPicture,
      livesin: user.livesin,
      worksAt: user.worksAt,
      country: user.country,
      relationship: user.relationship,
      isAdmin: user.isAdmin,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      token: generateJwt(user._id),
    });
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
    const user = await User.findOne({ username }).select("-password");
    //now send the response...

    res.status(200).json({
      username: user.username,
      _id: user._id,
      firstname: user.firstname,
      lastname: user.lastname,
      following: user.following,
      followers: user.followers,
      profilePicture: user.profilePicture,
      coverPicture: user.coverPicture,
      livesin: user.livesin,
      worksAt: user.worksAt,
      country: user.country,
      relationship: user.relationship,
      isAdmin: user.isAdmin,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      token: generateJwt(isUserExist._id),
    });
  } catch (error) {
    res.status(500).json(error);
  }
};
