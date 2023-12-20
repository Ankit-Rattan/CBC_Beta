// server.js

const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const User = require('./models/user'); // Import your User model
const Post = require('./models/post'); // Import your Post model

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('YOUR_MONGO_DB_CONNECTION_STRING', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Multer setup for handling file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Set the destination folder for uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

// User registration route
app.post('/register', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Post creation route
app.post('/create-post', upload.single('postImage'), async (req, res) => {
  try {
    const { postText } = req.body;
    const post = new Post({
      postText,
      postImage: req.file.path, // Assuming 'postImage' is the field name for the uploaded image
    });

    await post.save();
    res.status(201).send(post);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
