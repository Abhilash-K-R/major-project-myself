import { Link } from "react-router-dom";
import { PenSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="text-xl font-bold tracking-tight">
          blog<span className="text-primary">.</span>dev
        </Link>
        <div className="flex items-center gap-2">
          <Button asChild variant="default" size="sm">
            <Link to="/create" className="flex items-center gap-2">
              <PenSquare className="h-4 w-4" />
              New Post
            </Link>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
