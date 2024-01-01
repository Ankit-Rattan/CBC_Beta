// PostList.jsx
import React, { useState, useEffect } from 'react';
import StrSection from './StrSection';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch all posts when the component mounts
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('http://localhost:3001/posts');
      if (response.ok) {
        const data = await response.json();
        setPosts(data);
      } else {
        console.error('Error fetching posts:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  return (
    <div>
      <h2>All Posts</h2>
      {posts.map((post) => (
        <StrSection
          key={post._id} // Assuming each post has a unique identifier (_id)
          imglink={post.picture}
          title={post.content}
          name={post.name}
          date={new Date(post.date).toISOString().split('T')[0]}
          primarytext={post.content}
          link={post.link}
        />
      ))}
    </div>
  );
};

export default PostList;
