
import React from "react";
import ProjectCard, { ProjectData } from "./ProjectCard";

interface ProjectGridProps {
  projects: ProjectData[];
  onProjectClick?: (project: ProjectData) => void;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects, onProjectClick }) => {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((proj) => (
        <ProjectCard
          key={proj.name}
          project={proj}
          onClick={onProjectClick ? () => onProjectClick(proj) : undefined}
        />
      ))}
    </div>
  );
};

export default ProjectGrid;
