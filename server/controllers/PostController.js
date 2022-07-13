const Post = require("../models/PostModel");
const User = require("../models/UserModel");

//create a new post...

exports.createPost = async (req, res) => {
  const { userId } = req.body;

  try {
    const isUser = await User.findById(userId);

    if (!isUser) {
      res.status(401).json({ message: "Bad Request" });
    }

    const post = await Post.create(req.body);
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
};

//get a post...

exports.getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
};

//update a post...

exports.updatePost = async (req, res) => {
  const { userId } = req.body;

  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    if (post.userId !== userId) {
      return res.status(401).json({ message: "unauthorized" });
    }

    await Post.updateOne({ $set: req.body });

    res.status(200).json("Post updated successfully");
  } catch (err) {
    res.status(500).json(err.message);
  }
};
