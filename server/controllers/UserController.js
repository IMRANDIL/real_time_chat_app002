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
      res.status(200).json(user);
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
