// PostForm.js
import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const PostForm = () => {
  const [picture, setPicture] = useState(null);
  const [content, setContent] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState(new Date());

  const handleFileChange = (e) => {
    setPicture(e.target.files[0]);
  };

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
  };

  const handlePost = async () => {
    try {
      const formData = new FormData();
      formData.append('picture', picture);
      formData.append('content', content);
      formData.append('name', name);
      formData.append('date', date);

      await axios.post('http://localhost:3001/posts', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Reset form fields after successful post
      setPicture(null);
      setContent('');
      setName('');
      setDate(new Date());
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  return (
    <div>
      <h2>Create a New Post</h2>
      <label htmlFor="picture">Choose a Picture:</label>
      <input type="file" id="picture" accept="image/*" onChange={handleFileChange} />

      <label htmlFor="content">Blog Content:</label>
      <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} />

      <label htmlFor="name">Your Name:</label>
      <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

      <label htmlFor="date">Date:</label>
      <DatePicker selected={date} onChange={handleDateChange} dateFormat="yyyy-MM-dd" />

      <button onClick={handlePost}>Post</button>
    </div>
  );
};

export default PostForm;
