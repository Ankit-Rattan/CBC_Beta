// models/post.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  postText: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  postImage: {
    type: String,
  },
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
