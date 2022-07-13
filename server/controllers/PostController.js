const Post = require("../models/PostModel");
const User = require("../models/UserModel");
const mongoose = require("mongoose");
//create a new post...

exports.createPost = async (req, res) => {
  const { userId } = req.body;

  try {
    const isUser = await User.findById(userId);

    if (!isUser) {
      return res.status(401).json({ message: "Bad Request" });
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

    await post.updateOne({ $set: req.body });

    res.status(200).json("Post updated successfully");
  } catch (err) {
    res.status(500).json(err.message);
  }
};

//delete a post..

exports.deletePost = async (req, res) => {
  const { userId } = req.body;

  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    if (post.userId !== userId) {
      return res.status(401).json({ message: "unauthorized" });
    }

    await post.remove();

    res.status(200).json("Post deleted successfully");
  } catch (err) {
    res.status(500).json(err.message);
  }
};

//like/dislike a post...

exports.likeDislikePost = async (req, res) => {
  const { userId } = req.body;

  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    if (!post.likes.includes(userId)) {
      await post.updateOne({ $push: { likes: userId } });
      res.status(200).json("Post liked successfully");
    } else {
      await post.updateOne({ $pull: { likes: userId } });
      res.status(200).json("Post like removed successfully");
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
};

//get timeline posts...

exports.getTimelinePosts = async (req, res) => {
  const userId = req.params.id;

  try {
    const currentUserPosts = await Post.find({ userId: userId });

    const followingUsersPosts = await User.aggregate([
      { $match: { _id: new mongoose.Types.ObjectId(userId) } },
      {
        $lookup: {
          from: "posts",
          localField: "following",
          foreignField: "userId",
          as: "followingPosts",
        },
      },
      {
        $project: {
          followingPosts: 1,
          _id: 0,
        },
      },
    ]);

    res.status(200).json([...currentUserPosts, ...followingUsersPosts]);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
