// server.js
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors'); // Import cors middleware

const app = express();
const port = 3001;

// Enable CORS
app.use(cors({ origin: 'http://localhost:5173' }));

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://rattanankit2004:clicknik@cluster0.outnwh8.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

// Set up middleware for handling file uploads
const upload = multer({ dest: 'uploads/' });

// Define API routes
app.post('/posts', upload.single('picture'), async (req, res) => {
  try {
    // Process and save the post data to MongoDB
    const { content, name, date } = req.body;
    const picture = req.file.path; // Multer adds a 'file' object to the request

    // Save the data to MongoDB (replace Post model with your actual model)
    // Example: const Post = mongoose.model('Post', postSchema);
    // const newPost = new Post({ content, name, date, picture });
    // await newPost.save();

    res.status(201).send('Post created successfully');
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
