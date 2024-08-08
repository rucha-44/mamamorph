// src/components/CommunityForum.js
import React, { useState } from 'react';

const CommunityForum = () => {
  const [posts, setPosts] = useState([
    { id: 1, user: 'JaneDoe', content: 'How do you deal with postpartum fatigue?' },
    // Add more posts
  ]);
  const [newPost, setNewPost] = useState('');

  const handlePostSubmit = (e) => {
    e.preventDefault();
    const post = { id: posts.length + 1, user: 'Anonymous', content: newPost };
    setPosts([...posts, post]);
    setNewPost('');
  };

  return (
    <div className="community-forum">
      <h2>Community Forum</h2>
      <div className="posts">
        {posts.map(post => (
          <div key={post.id} className="post">
            <p><strong>{post.user}:</strong> {post.content}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handlePostSubmit}>
        <textarea 
          value={newPost} 
          onChange={(e) => setNewPost(e.target.value)} 
          placeholder="Share your experience or ask a question..." 
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default CommunityForum;
