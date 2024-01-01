// PostForm.jsx
import React, { useState } from 'react';

const PostForm = () => {
  const [content, setContent] = useState('');
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  const handlePostSubmit = async () => {
    try {
      const response = await fetch('http://localhost:3001/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content,
          name,
          link, // Use the provided link directly
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('New post created:', data);
        alert("POST SUCCESSFUL");
        // Add logic to update the UI with the new post data if needed
      } else {
        console.error('Error creating post:', response.statusText);
      }
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div>
      <h2>Create a New Post</h2>
      <label>
        Content:
        <input type="text" value={content} onChange={(e) => setContent(e.target.value)} />
      </label>
      <br />
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Image Link:
        <input type="text" value={link} onChange={(e) => setLink(e.target.value)} />
      </label>
      <br />
      <button onClick={handlePostSubmit}>Post</button>
    </div>
  );
};

export default PostForm;
