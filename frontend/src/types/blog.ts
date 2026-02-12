// ─── Blog Types ───────────────────────────────────────────────
// These types match the expected Express API response shapes.
// When connecting to your backend, ensure your API returns data
// matching these interfaces.

export interface Post {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
}

export interface CreatePostInput {
  title: string;
  content: string;
  category: string;
}
