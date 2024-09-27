import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Forum.css";

const Forum = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");
  const [commentText, setCommentText] = useState({});

  // Fetch all posts on component mount
  useEffect(() => {
    axios.get("http://localhost:3001/api/posts").then((response) => {
      setPosts(response.data);
    });
  }, []);

  // Submit a new post
  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (newPost.trim()) {
      axios
        .post("http://localhost:3001/api/posts", {
          content: newPost,
          comments: [],
        })
        .then((response) => {
          setPosts([response.data, ...posts]);
          setNewPost("");
        });
    }
  };

  // Submit a new comment
  const handleCommentSubmit = (postId) => {
    if (commentText[postId]?.trim()) {
      axios
        .post(`http://localhost:3001/api/posts/${postId}/comments`, {
          comment: commentText[postId],
        })
        .then((response) => {
          const updatedPosts = posts.map((post) =>
            post._id === response.data._id ? response.data : post
          );
          setPosts(updatedPosts);
          setCommentText({ ...commentText, [postId]: "" });
        });
    }
  };

  // Handle comment input change
  const handleCommentChange = (e, postId) => {
    setCommentText({ ...commentText, [postId]: e.target.value });
  };

  return (
    <div className="forum-container">
      <h1>Interactive Community Forum</h1>

      {/* Post Form */}
      <form onSubmit={handlePostSubmit} className="new-post-form">
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="Share your thoughts, tips, or ask a question..."
        />
        <button type="submit">Post</button>
      </form>

      {/* Display Posts */}
      <div className="posts-section">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post._id} className="post-item">
              <p>{post.content}</p>
              {/* Comment Section */}
              <div className="comments-section">
                <h4>Comments</h4>
                {post.comments.length > 0 ? (
                  post.comments.map((comment, index) => (
                    <p key={index} className="comment-item">
                      {comment}
                    </p>
                  ))
                ) : (
                  <p>No comments yet. Be the first to comment!</p>
                )}

                {/* Comment Form */}
                <textarea
                  value={commentText[post._id] || ""}
                  onChange={(e) => handleCommentChange(e, post._id)}
                  placeholder="Add a comment"
                />
                <button onClick={() => handleCommentSubmit(post._id)}>
                  Comment
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No posts yet. Start the conversation!</p>
        )}
      </div>
    </div>
  );
};

export default Forum;
