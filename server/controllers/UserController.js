const User = require("../models/UserModel");
const bcrypt = require("bcryptjs");
//get a specific user

exports.getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//get All users...

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find()
      .select("-password")
      .limit(5)
      .sort({ createdAt: -1 });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//update a user

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { _id: currentUserId, isAdmin, password } = req.body;
  try {
    if (password) {
      req.body.password = await bcrypt.hash(password, 10);
    }

    if (id === currentUserId || isAdmin) {
      const user = await User.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
      });
      if (!user) {
        return res.status(404).json({
          message: "User not found",
        });
      }
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
      });
    } else {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//delete a user...

exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  const { currentUserId, isAdmin } = req.body;

  try {
    if (id === currentUserId || isAdmin) {
      const user = await User.findByIdAndDelete(id);
      if (!user) {
        return res.status(404).json({
          message: "User not found",
        });
      }
      res.status(200).json({ message: "User deleted" });
    } else {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//follow a User...put one...

exports.followUser = async (req, res) => {
  const { id } = req.params;

  const { userData: _id } = req.body;

  if (_id === id) {
    return res.status(403).json("Action forbidden");
  }

  try {
    const followUser = await User.findById(id);

    const followingUser = await User.findById(_id);

    if (!followUser || !followingUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    if (!followUser.followers.includes(_id)) {
      await followUser.updateOne({ $push: { followers: _id } });
      await followingUser.updateOne({ $push: { following: id } });
      res.status(200).json({ message: "User followed" });
    } else {
      res.status(403).json("User already followed");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//unfollow a user....

exports.unFollowUser = async (req, res) => {
  const { id } = req.params;

  const { userData: _id } = req.body;

  if (_id === id) {
    res.status(403).json("Action forbidden");
  }

  try {
    const followUser = await User.findById(id);

    const followingUser = await User.findById(_id);

    if (!followUser || !followingUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    if (followUser.followers.includes(_id)) {
      await followUser.updateOne({ $pull: { followers: _id } });
      await followingUser.updateOne({ $pull: { following: id } });
      res.status(200).json({ message: "User unFollowed" });
    } else {
      res.status(403).json("User not followed");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
