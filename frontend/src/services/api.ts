// ─── API Service ──────────────────────────────────────────────
// This file centralizes all API calls for the blog.
// Currently uses placeholder data for development.
//
// ┌─────────────────────────────────────────────────────────────┐
// │  CONNECT TO EXPRESS BACKEND:                                │
// │  Base URL: http://localhost:5000/api                        │
// │                                                             │
// │  To switch from placeholder data to your Express backend,   │
// │  uncomment the fetch() calls and remove the placeholder     │
// │  logic in each function below.                              │
// └─────────────────────────────────────────────────────────────┘

import { Post, CreatePostInput } from "@/types/blog";
import { placeholderPosts } from "@/data/placeholder";

const API_BASE_URL = "http://localhost:5000/api";

// In-memory store for development (remove when connecting to Express)
let posts = [...placeholderPosts];

// ─── GET /posts ───────────────────────────────────────────────
// Fetches all blog posts
// Express endpoint: GET http://localhost:5000/api/posts
export const getPosts = async (): Promise<Post[]> => {
  // CONNECT TO EXPRESS BACKEND:
  // const response = await fetch(`${API_BASE_URL}/posts`);
  // if (!response.ok) throw new Error("Failed to fetch posts");
  // return response.json();

  // Placeholder: return in-memory posts
  return Promise.resolve([...posts]);
};

// ─── GET /posts/:id ───────────────────────────────────────────
// Fetches a single post by ID
// Express endpoint: GET http://localhost:5000/api/posts/:id
export const getPostById = async (id: string): Promise<Post> => {
  // CONNECT TO EXPRESS BACKEND:
  // const response = await fetch(`${API_BASE_URL}/posts/${id}`);
  // if (!response.ok) throw new Error("Post not found");
  // return response.json();

  // Placeholder: find post in memory
  const post = posts.find((p) => p.id === id);
  if (!post) throw new Error("Post not found");
  return Promise.resolve({ ...post });
};

// ─── POST /posts ──────────────────────────────────────────────
// Creates a new blog post
// Express endpoint: POST http://localhost:5000/api/posts
// Body: { title: string, content: string, category: string }
// Expected response: the created Post object with id, date, etc.
export const createPost = async (input: CreatePostInput): Promise<Post> => {
  // CONNECT TO EXPRESS BACKEND:
  // const response = await fetch(`${API_BASE_URL}/posts`, {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(input),
  // });
  // if (!response.ok) throw new Error("Failed to create post");
  // return response.json();

  // Placeholder: create post in memory
  const newPost: Post = {
    id: String(Date.now()),
    title: input.title,
    content: input.content,
    excerpt: input.content.substring(0, 150) + "...",
    author: "You",
    date: new Date().toISOString().split("T")[0],
    category: input.category,
    readTime: `${Math.max(1, Math.ceil(input.content.split(" ").length / 200))} min read`,
  };
  posts = [newPost, ...posts];
  return Promise.resolve({ ...newPost });
};

// ─── DELETE /posts/:id ────────────────────────────────────────
// Deletes a blog post by ID
// Express endpoint: DELETE http://localhost:5000/api/posts/:id
// Expected response: { message: "Post deleted" } or 204 No Content
export const deletePost = async (id: string): Promise<void> => {
  // CONNECT TO EXPRESS BACKEND:
  // const response = await fetch(`${API_BASE_URL}/posts/${id}`, {
  //   method: "DELETE",
  // });
  // if (!response.ok) throw new Error("Failed to delete post");

  // Placeholder: remove post from memory
  posts = posts.filter((p) => p.id !== id);
  return Promise.resolve();
};
