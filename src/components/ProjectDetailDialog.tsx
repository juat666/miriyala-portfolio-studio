
import React from "react";
import { Dialog, DialogContent, DialogTitle, DialogHeader, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";
import { ProjectData } from "./ProjectCard";

interface ProjectDetailDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project: ProjectData | null;
}

const ProjectDetailDialog: React.FC<ProjectDetailDialogProps> = ({ open, onOpenChange, project }) => {
  if (!project) return null;
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl w-full flex flex-col p-0 overflow-visible">
        <img
          src={project.image}
          alt={project.name}
          className="w-full max-h-64 object-cover rounded-t-lg"
          loading="lazy"
        />
        <div className="p-6 flex flex-col gap-2">
          <DialogHeader>
            <DialogTitle className="font-playfair text-2xl">{project.name}</DialogTitle>
            <DialogDescription>{project.year}</DialogDescription>
          </DialogHeader>
          <div className="flex flex-wrap gap-1">
            {project.techStack.map((t) => (
              <Badge key={t} variant="secondary" className="font-inter text-xs">{t}</Badge>
            ))}
          </div>
          <p className="font-inter text-muted-foreground">{project.description}</p>
          <div className="flex gap-4 mt-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
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
                className="hover:underline flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                aria-label="View Live Project"
              >
                <span className="material-icons w-4 h-4" aria-hidden="true">🔗</span>
                <span className="font-inter text-xs">Live</span>
              </a>
            )}
          </div>
          {project.videoUrl && (
            <div className="w-full aspect-video mt-4 rounded-lg overflow-hidden">
              <iframe
                src={project.videoUrl}
                title={`Project demo video for ${project.name}`}
                className="w-full h-full rounded"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetailDialog;
