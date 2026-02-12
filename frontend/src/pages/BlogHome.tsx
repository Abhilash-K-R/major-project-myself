import { useState, useMemo } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getPosts, deletePost } from "@/services/api";
import PostCard from "@/components/PostCard";
import SearchBar from "@/components/SearchBar";
import CategoryFilter from "@/components/CategoryFilter";
import { toast } from "sonner";
import { Skeleton } from "@/components/ui/skeleton";

const BlogHome = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const queryClient = useQueryClient();

  const { data: posts = [], isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  const deleteMutation = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      toast.success("Post deleted");
    },
    onError: () => toast.error("Failed to delete post"),
  });

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      const matchSearch =
        !search ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(search.toLowerCase());
      const matchCategory = category === "All" || p.category === category;
      return matchSearch && matchCategory;
    });
  }, [posts, search, category]);

  return (
    <main className="container mx-auto px-4 py-8">
      <section className="mb-8 space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Latest Posts</h1>
        <p className="text-muted-foreground">
          Thoughts on code, design, and building for the web.
        </p>
      </section>

      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <SearchBar value={search} onChange={setSearch} />
      </div>

      <div className="mb-8">
        <CategoryFilter selected={category} onSelect={setCategory} />
      </div>

      {isLoading ? (
        <div className="space-y-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} className="h-44 w-full rounded-lg" />
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <p className="py-12 text-center text-muted-foreground">
          No posts found. Try adjusting your search or filters.
        </p>
      ) : (
        <div className="grid gap-4">
          {filtered.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              onDelete={(id) => deleteMutation.mutate(id)}
            />
          ))}
        </div>
      )}
    </main>
  );
};

export default BlogHome;
