import { useEffect, useState } from "react";
import { fetchPosts, createPost } from "./services/api";

function App() {
  const [posts, setPosts] = useState<any[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [health, setHealth] = useState("Checking...");

  useEffect(() => {
    loadPosts();
    checkHealth();
  }, []);

  const loadPosts = async () => {
    try {
      const data = await fetchPosts();
      setPosts(data);
    } catch (err) {
      console.error(err);
    }
  };

  const checkHealth = async () => {
    try {
      const res = await fetch("http://localhost:5000/health");
      const data = await res.json();
      setHealth(data.status);
    } catch {
      setHealth("Server Down");
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!title || !content) return;

    await createPost({ title, content });
    setTitle("");
    setContent("");
    loadPosts();
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1>Self-Healing Blog System</h1>

      <p>
        Server Status:{" "}
        <strong style={{ color: health === "running" ? "green" : "red" }}>
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
          </div>
        ))
      )}
    </div>
  );
}

export default App;
