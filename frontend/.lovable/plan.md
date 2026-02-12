

## Implementation Plan: Blog Frontend UI with Dark Mode

### Architecture Overview
- **Frontend Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + next-themes for dark mode
- **Routing**: React Router v6
- **UI Components**: shadcn/ui components (already available in project)
- **API Integration**: Centralized API service pointing to `http://localhost:5000/api`
- **State Management**: React hooks + TanStack Query (React Query) for async data
- **Toast Notifications**: Sonner (already configured in App.tsx)

### Core Pages & Components

#### **1. Pages (New)**
- **`BlogHome.tsx`** — Main blog list page with:
  - Search bar to filter posts by title
  - Category filter chips at the top
  - Grid of post cards on the left/main area
  - Click to view full post detail
  - Delete button with confirmation dialog
  
- **`PostDetail.tsx`** — Full post view with:
  - Back to list button
  - Full post content
  - Metadata: author, date, category, read time
  - Responsive layout

- **`CreatePost.tsx`** — New post form with:
  - Title input
  - Content textarea
  - Category multi-select
  - Submit button with validation
  - Success/error toasts

#### **2. Components (New)**
- **`PostCard.tsx`** — Individual post card showing title, excerpt, category, metadata, and delete button
- **`SearchBar.tsx`** — Search input that filters posts
- **`CategoryFilter.tsx`** — Category tag chips for filtering
- **`ThemeToggle.tsx`** — Dark/light mode toggle button (uses next-themes)
- **`Navbar.tsx`** — Top navigation with logo, search, and theme toggle

#### **3. Services & Data**
- **`api.ts`** — Centralized API service with:
  - Base URL: `http://localhost:5000/api`
  - Clear comments showing where Express backend connects
  - Placeholder functions for: `getPosts()`, `getPostById()`, `createPost()`, `deletePost()`
  - Each function will have a comment block showing the Express endpoint it calls
  
- **`types/blog.ts`** — TypeScript interfaces:
  - `Post` (id, title, content, author, date, category, readTime)
  - `CreatePostInput` (title, content, category)
  
- **`placeholder.ts`** — 6 sample blog posts for initial display

#### **4. Styling & Dark Mode**
- Leverage existing Tailwind CSS setup with dark mode already configured in `index.css`
- Use `next-themes` (already installed) to manage dark/light mode toggle
- Dark-first design with professional color scheme
- Responsive layout: stacks on mobile, side-by-side on desktop

#### **5. Integration Points**
- **App.tsx** — Add routes for `/`, `/post/:id`, `/create`
- **Updated Index.tsx** — Becomes the `BlogHome` page
- All API calls structured so you can easily replace placeholder functions with actual Express backend calls

### Key Features
✅ Search/filter by title and category  
✅ Post metadata (author, date, read time, category tags)  
✅ Dark mode toggle (light mode fallback)  
✅ Create new post form  
✅ Delete posts with confirmation dialog  
✅ Success/error toast notifications  
✅ Responsive design  
✅ Clean, production-quality code with detailed comments  
✅ API service ready to connect to Express backend at `http://localhost:5000/api`

### How It Connects to Your Express Backend
Every API function in `api.ts` will have clear comments showing:
```
// CONNECT TO EXPRESS BACKEND:
// POST http://localhost:5000/api/posts
// Expected response: { id, title, content, ... }
```

You can then replace the placeholder logic with actual `fetch()` calls to your Express endpoints.

