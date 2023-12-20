// PostForm.js

import React, { useState } from 'react';
import axios from 'axios';

const PostForm = () => {
  const [formData, setFormData] = useState({
    postText: '',
    postImage: null,
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      postImage: e.target.files[0],
    });
  };

  const createPost = async () => {
    const postData = new FormData();
    postData.append('postText', formData.postText);
    postData.append('postImage', formData.postImage);

    try {
      const response = await axios.post('http://localhost:3000/create-post', postData);
      console.log('Post created:', response.data);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <form encType="multipart/form-data">
      <label htmlFor="postText">Post Text:</label>
      <textarea
        id="postText"
        name="postText"
        value={formData.postText}
        onChange={handleInputChange}
        required
      ></textarea>

      <label htmlFor="postImage">Upload Image:</label>
      <input
        type="file"
        id="postImage"
        name="postImage"
        accept="image/*"
        onChange={handleImageChange}
        required
      />

      <button type="button" onClick={createPost}>
        Create Post
      </button>
    </form>
  );
};

export default PostForm;

