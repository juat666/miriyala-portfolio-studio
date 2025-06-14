
import React from "react";
import { Badge } from "@/components/ui/badge";
import { 
  Select, 
  SelectTrigger, 
  SelectValue, 
  SelectContent, 
  SelectItem 
} from "@/components/ui/select";

interface ProjectFilterBarProps {
  allTechs: string[];
  selectedTech: string | null;
  sortDirection: "desc" | "asc" | "featured";
  setSelectedTech: (tech: string | null) => void;
  setSortDirection: (direction: "desc" | "asc" | "featured") => void;
}

const ProjectFilterBar: React.FC<ProjectFilterBarProps> = ({
  allTechs,
  selectedTech,
  sortDirection,
  setSelectedTech,
  setSortDirection
}) => {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
      {/* Filter Bar */}
      <div className="flex flex-wrap gap-2">
        <Badge
          variant={selectedTech === null ? "default" : "outline"}
          onClick={() => setSelectedTech(null)}
          className="cursor-pointer"
        >
          All
        </Badge>
        {allTechs.map((tech) => (
          <Badge
            key={tech}
            variant={selectedTech === tech ? "default" : "outline"}
            onClick={() => setSelectedTech(tech)}
            className="cursor-pointer"
          >
            {tech}
          </Badge>
        ))}
      </div>
      {/* Sort Control */}
      <div className="flex-shrink-0">
        <Select
          value={sortDirection}
          onValueChange={(v) => setSortDirection(v as "desc" | "asc" | "featured")}
        >
          <SelectTrigger className="w-36">
            <SelectValue>
              Sort: {
                sortDirection === "desc"
                  ? "Most Recent"
                  : sortDirection === "asc"
                  ? "Oldest"
                  : "Featured"
              }
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="desc">Most Recent</SelectItem>
            <SelectItem value="asc">Oldest</SelectItem>
            <SelectItem value="featured">Featured</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default ProjectFilterBar;
