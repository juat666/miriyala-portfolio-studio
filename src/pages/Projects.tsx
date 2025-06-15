
import React from "react";
import Navbar from "@/components/Navbar";
import { useNavigate } from "react-router-dom";
import ProjectCard from "@/components/ProjectCard";
import ProjectFilterBar from "@/components/ProjectFilterBar";
import ProjectGrid from "@/components/ProjectGrid";
import LoadMoreButton from "@/components/LoadMoreButton";
import ProjectDetailDialog from "@/components/ProjectDetailDialog";
import { Button } from "@/components/ui/button";
import ProjectsHeader from "@/components/projects/ProjectsHeader";
import ProjectsStackMessage from "@/components/projects/ProjectsStackMessage";
import {
  projects,
  allTechs,
  FEATURED_PROJECTS_INDICES,
  INITIAL_DISPLAY_COUNT,
  LOAD_MORE_COUNT,
} from "@/components/projects/projectData";

// Main Projects Page
const Projects = () => {
  const [selectedTech, setSelectedTech] = React.useState<string | null>(null);
  const [sortDirection, setSortDirection] = React.useState<
    "desc" | "asc" | "featured"
  >("desc");
  const [displayCount, setDisplayCount] = React.useState(INITIAL_DISPLAY_COUNT);
  const navigate = useNavigate();
  const [detailOpen, setDetailOpen] = React.useState(false);
  const [selectedProject, setSelectedProject] = React.useState(null);

  // Filtering
  let filteredProjects = selectedTech
    ? projects.filter((p) => p.techStack.includes(selectedTech))
    : projects;

  // Sorting
  if (sortDirection === "featured") {
    const featured = filteredProjects.filter((_, idx) =>
      FEATURED_PROJECTS_INDICES.includes(idx)
    );
    const rest = filteredProjects.filter(
      (_, idx) => !FEATURED_PROJECTS_INDICES.includes(idx)
    );
    filteredProjects = [...featured, ...rest];
  } else {
    filteredProjects = [...filteredProjects].sort((a, b) =>
      sortDirection === "desc" ? b.year - a.year : a.year - b.year
    );
  }

  // Displayed
  const displayedProjects = filteredProjects.slice(0, displayCount);
  const canLoadMore = displayCount < filteredProjects.length;

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setDetailOpen(true);
  };

  React.useEffect(() => {
    setDisplayCount(INITIAL_DISPLAY_COUNT);
  }, [selectedTech, sortDirection]);

  const getLoadMoreLabel = () => {
    if (!selectedTech) return "Load More";
    return `Load More ${selectedTech} Projects`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 flex flex-col items-center px-4 py-12">
        <ProjectsHeader />
        <ProjectFilterBar
          allTechs={allTechs}
          selectedTech={selectedTech}
          sortDirection={sortDirection}
          setSelectedTech={setSelectedTech}
          setSortDirection={setSortDirection}
        />
        <ProjectsStackMessage
          selectedTech={selectedTech}
          onClear={() => setSelectedTech(null)}
        />
        <ProjectGrid
          projects={displayedProjects}
          onProjectClick={handleProjectClick}
        />
        {displayedProjects.length === 0 && (
          <div className="text-center text-muted-foreground font-inter mt-12 animate-fade-in">
            No projects found for <span className="font-semibold">{selectedTech}</span>
          </div>
        )}
        {canLoadMore && (
          <LoadMoreButton
            onClick={() => setDisplayCount((prev) => prev + LOAD_MORE_COUNT)}
            label={getLoadMoreLabel()}
          />
        )}

        {/* Contact CTA */}
        <section className="w-full mt-16 flex flex-col items-center px-4">
          <div className="max-w-xl w-full bg-muted rounded-lg p-8 shadow flex flex-col items-center gap-4 text-center">
            <h2 className="text-2xl font-bold font-playfair text-primary">
              Interested in working together? Let's discuss your next project.
            </h2>
            <Button
              size="lg"
              className="mt-2 font-inter px-8 py-3 text-base"
              onClick={() => navigate("/contact")}
            >
              Get In Touch
            </Button>
          </div>
        </section>

        <ProjectDetailDialog
          open={detailOpen}
          onOpenChange={(open) => {
            setDetailOpen(open);
            if (!open) setSelectedProject(null);
          }}
          project={selectedProject}
        />
      </main>
    </div>
  );
};

export default Projects;
