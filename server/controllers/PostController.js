const Post = require("../models/PostModel");

//create a new post...

exports.createPost = async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
};
