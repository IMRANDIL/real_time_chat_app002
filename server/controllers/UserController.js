const User = require("../models/UserModel");

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
  const { currentUserId, currentUserAdminStatus } = req.body;
  try {
    if (id === currentUserId || currentUserAdminStatus) {
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
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
