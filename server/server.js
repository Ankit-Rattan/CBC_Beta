const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://rattanankit2004:clicknik@cluster0.outnwh8.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const postSchema = new mongoose.Schema({
  content: String,
  name: String,
  date: { type: Date, default: Date.now },
  picture: String,
  link: String,
});

const Post = mongoose.model('Post', postSchema);

app.post('/posts', async (req, res) => {
  try {
    const { content, name, link } = req.body;

    const newPost = new Post({ content, name, link });
    await newPost.save();

    res.status(201).json({
      imglink: newPost.picture,
      title: newPost.content,
      name: newPost.name,
      date: newPost.date.toISOString().split('T')[0],
      primarytext: newPost.content,
      link: newPost.link,
    });
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
});

app.get('/posts', async (req, res) => {
  try {
    const posts = await Post.find().exec();
    res.status(200).json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
