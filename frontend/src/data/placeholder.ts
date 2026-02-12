import { Post } from "@/types/blog";

export const CATEGORIES = [
  "All",
  "Technology",
  "Tutorial",
  "Design",
  "Personal",
  "DevOps",
] as const;

export const placeholderPosts: Post[] = [
  {
    id: "1",
    title: "Building Scalable APIs with Express and TypeScript",
    content:
      "Express.js remains one of the most popular Node.js frameworks for building RESTful APIs. When combined with TypeScript, it provides type safety and better developer experience.\n\nIn this guide, we'll walk through setting up a production-ready Express server with TypeScript, including proper error handling, middleware patterns, and database integration.\n\nKey topics covered:\n- Project structure and configuration\n- Middleware for authentication and validation\n- Database connection pooling with SQLite\n- Error handling best practices\n- Testing strategies for API endpoints\n\nBy the end of this tutorial, you'll have a solid foundation for building robust backend services that can scale with your application's needs.",
    excerpt:
      "A comprehensive guide to building production-ready REST APIs using Express.js and TypeScript with proper error handling and middleware patterns.",
    author: "Alex Chen",
    date: "2025-02-10",
    category: "Tutorial",
    readTime: "8 min read",
  },
  {
    id: "2",
    title: "The Future of CSS: What's Coming in 2025",
    content:
      "CSS continues to evolve rapidly with new features landing in browsers at an unprecedented pace. From container queries to cascade layers, the styling landscape is transforming.\n\nLet's explore the most exciting CSS features that are reshaping how we build user interfaces:\n\n1. **Container Queries** - Style elements based on their container size\n2. **CSS Nesting** - Native nesting without preprocessors\n3. **:has() Selector** - The parent selector we've always wanted\n4. **View Transitions API** - Smooth page transitions\n5. **Scroll-driven Animations** - Animations tied to scroll position\n\nThese features reduce our dependency on JavaScript for layout and animation, leading to more performant and maintainable codebases.",
    excerpt:
      "Exploring the most exciting CSS features landing in browsers — from container queries to scroll-driven animations.",
    author: "Maya Johnson",
    date: "2025-02-08",
    category: "Technology",
    readTime: "6 min read",
  },
  {
    id: "3",
    title: "Designing for Dark Mode: Beyond Inverting Colors",
    content:
      "Dark mode is more than just swapping black and white. Good dark mode design requires careful consideration of contrast ratios, color perception, and visual hierarchy.\n\nCommon mistakes in dark mode design:\n- Using pure black (#000) backgrounds — opt for dark grays instead\n- Not adjusting saturation — colors appear more vibrant on dark backgrounds\n- Ignoring elevation and depth cues\n- Forgetting about images and illustrations\n\nBest practices:\n- Use a dark gray (not pure black) as your base\n- Reduce color saturation by 10-20%\n- Use lighter shadows or subtle borders for elevation\n- Provide proper contrast ratios (WCAG AA minimum)\n- Test with real users in low-light environments",
    excerpt:
      "Dark mode design requires more than color inversion. Learn the principles behind effective dark interfaces.",
    author: "Sam Rivera",
    date: "2025-02-05",
    category: "Design",
    readTime: "5 min read",
  },
  {
    id: "4",
    title: "Docker Compose for Local Development: A Practical Guide",
    content:
      "Docker Compose simplifies running multi-service applications locally. Instead of installing databases, caches, and services individually, you define everything in a single YAML file.\n\nA typical development setup might include:\n- Your application server (Node.js/Express)\n- PostgreSQL or SQLite database\n- Redis for caching and sessions\n- Nginx as a reverse proxy\n\nKey benefits:\n- Consistent environments across team members\n- Easy onboarding for new developers\n- Isolated services that don't pollute your host machine\n- One command to start everything: `docker-compose up`\n\nWe'll build a complete Docker Compose configuration step by step, including health checks, volume persistence, and environment variable management.",
    excerpt:
      "Simplify your local development workflow with Docker Compose — run databases, caches, and services with a single command.",
    author: "Jordan Lee",
    date: "2025-02-03",
    category: "DevOps",
    readTime: "7 min read",
  },
  {
    id: "5",
    title: "Why I Switched from Next.js to Vite + React Router",
    content:
      "After two years of building with Next.js, I decided to switch my personal projects to a simpler Vite + React Router setup. Here's why.\n\nNext.js is incredible for large teams and complex applications that need SSR, ISR, and the full React Server Components experience. But for many projects, it's overkill.\n\nWhat I gained by switching:\n- Faster development server startup (sub-second with Vite)\n- Simpler mental model — no server/client component boundaries\n- Full control over my deployment strategy\n- Easier integration with any backend (Express, Fastify, etc.)\n\nWhat I miss:\n- Built-in image optimization\n- File-based routing (though React Router v7 is closing this gap)\n- Vercel's deployment experience\n\nThe right tool depends on your project's needs. Don't use a sledgehammer when a regular hammer will do.",
    excerpt:
      "A personal reflection on moving from Next.js to Vite + React Router — the tradeoffs, gains, and when each approach makes sense.",
    author: "Alex Chen",
    date: "2025-01-28",
    category: "Personal",
    readTime: "6 min read",
  },
  {
    id: "6",
    title: "Understanding React Query: Beyond Simple Data Fetching",
    content:
      "TanStack Query (React Query) is often described as a data-fetching library, but it's really a server-state management solution. Understanding this distinction unlocks its full potential.\n\nCore concepts that make React Query powerful:\n\n**Stale-While-Revalidate**: Show cached data immediately while fetching fresh data in the background. Users see instant responses.\n\n**Automatic Refetching**: Data automatically refreshes when the window regains focus, network reconnects, or at custom intervals.\n\n**Optimistic Updates**: Update the UI immediately before the server confirms, then reconcile.\n\n**Query Invalidation**: Precisely control which data needs to be refreshed after mutations.\n\n**Infinite Queries**: Built-in support for infinite scroll and pagination patterns.\n\nOnce you internalize these patterns, you'll find yourself writing significantly less boilerplate code for data management.",
    excerpt:
      "React Query is more than data fetching — it's server-state management. Learn the patterns that make it indispensable.",
    author: "Maya Johnson",
    date: "2025-01-25",
    category: "Technology",
    readTime: "9 min read",
  },
];
