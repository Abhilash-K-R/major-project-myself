const API_BASE_URL = "http://localhost:5000/api";

/**
 * Fetch all blog posts
 * Returns only the array of posts (not full response object)
 */
export const fetchPosts = async () => {
  const response = await fetch(`${API_BASE_URL}/posts`);

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  const result = await response.json();

  if (!result.success) {
    throw new Error("Backend error while fetching posts");
  }

  return result.data; // ✅ IMPORTANT: return only posts array
};

/**
 * Create a new blog post
 */
export const createPost = async (post: {
  title: string;
  content: string;
}) => {
  const response = await fetch(`${API_BASE_URL}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });

  if (!response.ok) {
    throw new Error("Failed to create post");
  }

  const result = await response.json();

  if (!result.success) {
    throw new Error("Backend error while creating post");
  }

  return result.data; // return created post object
};

// for delete post

export const deletePost = async (id: number) => {
  const response = await fetch(`${API_BASE_URL}/posts/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete post");
  }

  const result = await response.json();

  if (!result.success) {
    throw new Error("Backend error while deleting post");
  }

  return result;
};
