// this file path is major-project-self/frontend/src/App.tsx

import { useEffect, useState } from "react";
import { fetchPosts, createPost, deletePost } from "./services/api";

interface Post {
  id: number;
  title: string;
  content: string;
}

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [health, setHealth] = useState("Checking...");

  useEffect(() => {
    loadPosts();
    checkHealth();
  }, []);

  // Load all posts
  const loadPosts = async () => {
    try {
      const data = await fetchPosts();
      setPosts(data);
    } catch (err) {
      console.error("Error loading posts:", err);
    }
  };

  // Check backend health
  const checkHealth = async () => {
    try {
      const res = await fetch("http://localhost:5000/health");
      const data = await res.json();

      // ✅ Backend now returns { success: true, message: "Server is running" }
      setHealth(data.message);
    } catch {
      setHealth("Server Down");
    }
  };

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !content) return;

    try {
      await createPost({ title, content });
      setTitle("");
      setContent("");
      loadPosts();
    } catch (err) {
      console.error("Error creating post:", err);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deletePost(id);
      loadPosts(); // refresh list
    } catch (err) {
      console.error("Error deleting post:", err);
    }
  };


  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1>Self-Healing Blog System</h1>

      <p>
        Server Status:{" "}
        <strong
          style={{
            color:
              health === "Server is running" ? "green" : "red",
          }}
        >
          {health}
        </strong>
      </p>

      <hr />

      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <button type="submit">Add Post</button>
      </form>

      <hr />

      <h2>All Posts</h2>

      {posts.length === 0 ? (
        <p>No posts found</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} style={{ marginBottom: "15px" }}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>

            <button
              onClick={() => handleDelete(post.id)}
              style={{
                backgroundColor: "red",
                color: "white",
                border: "none",
                padding: "5px 10px",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
