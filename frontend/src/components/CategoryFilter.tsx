import { Badge } from "@/components/ui/badge";
import { CATEGORIES } from "@/data/placeholder";

interface CategoryFilterProps {
  selected: string;
  onSelect: (category: string) => void;
}

const CategoryFilter = ({ selected, onSelect }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {CATEGORIES.map((cat) => (
        <Badge
          key={cat}
          variant={selected === cat ? "default" : "outline"}
          className="cursor-pointer px-3 py-1 text-sm transition-colors hover:bg-primary hover:text-primary-foreground"
          onClick={() => onSelect(cat)}
        >
          {cat}
        </Badge>
      ))}
    </div>
  );
};

export default CategoryFilter;
