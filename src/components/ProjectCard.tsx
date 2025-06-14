
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Play } from "lucide-react";

export interface ProjectData {
  name: string;
  description: string;
  techStack: string[];
  year: number;
  image: string;
  github?: string;
  live?: string;
}

interface ProjectCardProps {
  project: ProjectData;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  // Handler for play button click
  const handlePlayClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevents card click if there is one
    console.log(`Play video for ${project.name}`);
    // Future: open a modal or play video here!
  };

  return (
    <Card className="transition-shadow hover:shadow-lg bg-card animate-fade-in flex flex-col h-full">
      <div className="relative">
        <img
          src={project.image}
          alt={project.name}
          className="rounded-t-lg w-full h-40 object-cover"
          loading="lazy"
        />
        {/* Video button overlay top-right */}
        <button
          onClick={handlePlayClick}
          className="absolute top-2 right-2 bg-black/60 hover:bg-black/80 rounded-full p-1 shadow focus:outline-none focus:ring-2 focus:ring-primary z-10 transition"
          type="button"
          aria-label="Play project video"
        >
          <Play className="w-6 h-6 text-white" />
        </button>
      </div>
      <CardHeader>
        <CardTitle className="font-playfair text-xl">{project.name}</CardTitle>
        <CardDescription>{project.year}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <p className="mb-3 text-sm font-inter text-muted-foreground">{project.description}</p>
        <div className="flex flex-wrap gap-1 mb-4">
          {project.techStack.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="font-inter text-xs"
            >
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex gap-3 mt-auto">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View on GitHub"
              className="hover:underline flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-4 h-4" />
              <span className="font-inter text-xs">GitHub</span>
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Live Project"
              className="hover:underline flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="material-icons w-4 h-4" aria-hidden="true">🔗</span>
              <span className="font-inter text-xs">Live</span>
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
