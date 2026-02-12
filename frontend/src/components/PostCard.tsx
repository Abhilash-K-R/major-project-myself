import { Link } from "react-router-dom";
import { Calendar, Clock, User, Trash2 } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Post } from "@/types/blog";

interface PostCardProps {
  post: Post;
  onDelete: (id: string) => void;
}

const PostCard = ({ post, onDelete }: PostCardProps) => {
  return (
    <Card className="group transition-colors hover:border-primary/50">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <Link to={`/post/${post.id}`} className="flex-1">
            <h2 className="text-xl font-semibold leading-tight tracking-tight transition-colors group-hover:text-primary">
              {post.title}
            </h2>
          </Link>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 shrink-0 text-muted-foreground opacity-0 transition-opacity hover:text-destructive group-hover:opacity-100"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Delete this post?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. "{post.title}" will be permanently removed.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={() => onDelete(post.id)}
                  className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                >
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
        <Badge variant="secondary" className="w-fit text-xs">
          {post.category}
        </Badge>
      </CardHeader>
      <CardContent className="pb-3">
        <Link to={`/post/${post.id}`}>
          <p className="text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
        </Link>
      </CardContent>
      <CardFooter className="gap-4 text-xs text-muted-foreground">
        <span className="flex items-center gap-1">
          <User className="h-3 w-3" />
          {post.author}
        </span>
        <span className="flex items-center gap-1">
          <Calendar className="h-3 w-3" />
          {new Date(post.date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </span>
        <span className="flex items-center gap-1">
          <Clock className="h-3 w-3" />
          {post.readTime}
        </span>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
