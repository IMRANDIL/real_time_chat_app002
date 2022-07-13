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

//update a user

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { currentUserId, isAdmin, password } = req.body;
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

  const { currentUserId } = req.body;

  if (currentUserId === id) {
    return res.status(403).json("Action forbidden");
  }

  try {
    const followUser = await User.findById(id);

    const followingUser = await User.findById(currentUserId);

    if (!followUser || !followingUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    if (!followUser.followers.includes(currentUserId)) {
      await followUser.updateOne({ $push: { followers: currentUserId } });
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

  const { currentUserId } = req.body;

  if (currentUserId === id) {
    res.status(403).json("Action forbidden");
  }

  try {
    const followUser = await User.findById(id);

    const followingUser = await User.findById(currentUserId);

    if (!followUser || !followingUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    if (followUser.followers.includes(currentUserId)) {
      await followUser.updateOne({ $pull: { followers: currentUserId } });
      await followingUser.updateOne({ $pull: { following: id } });
      res.status(200).json({ message: "User unFollowed" });
    } else {
      res.status(403).json("User not followed");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
