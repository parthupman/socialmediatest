const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const FollowerModel = require("../models/FollowerModel");
const PostModel = require("../models/PostModel");
const UserModel = require("../models/UserModel");

// Create a post

router.post("/", authMiddleware, async (req, res) => {
  const { text, location, picUrl } = req.body;
  if (text.length < 1)
    return res.status(401).send("Text must be atleast 1 character");

  try {
    const newPost = {
      user: req.userId,
      text,
    };
    if (location) newPost.location = location;
    if (picUrl) newPost.picUrl = picUrl;

    const post = await new PostModel(newPost).save();
    return res.json(post);
  } catch (error) {
    console.error(error);
    return res.status(500).send(`Server Error`);
  }
});

// GET ALL POSTS

router.get("/", authMiddleware, async (req, res) => {
  try {
    const posts = await PostModel.find()
      .sort({ creratedAt: -1 })
      .populate("user")
      .populate("comments.user");
    return res.json(posts);
  } catch (error) {
    console.error(error);
    return res.status(500).send(`Server Error`);
  }
});

// GET POSTS BY ID

router.get("/:postId", authMiddleware, async (req, res) => {
  try {
    const post = await PostModel.findById(req.params.postId)
      .populate("user")
      .populate("comments.user");

    if (!post) {
      return res.status(404).send("Post Not Found");
    }

    return res.json(post);
  } catch (error) {
    console.error(error);
    return res.status(500).send(`Server error`);
  }
});

// DELETE POST

router.delete("/:postId", authMiddleware, async (req, res) => {
  try {
    const { userId } = req;
    const { postId } = req.params;

    const post = await PostModel.findById(postId);
    if (!post) {
      return res.status(404).send("Post not found");
    }

    const user = await UserModel.findById(userId);

    if (post.user.toString() !== userId) {
      if (user.role === "root") {
        await post.remove();
        return res.status(401).send("Unauthorized");
      } else {
        return res.status(401).send("Unautorized");
      }
    }

    await post.remove();
    return res.status(200).send("Post deleted Sucessfully");
  } catch (error) {
    console.error(error);
    return res.status(500).send(`Server Error`);
  }
});

module.exports = router;
