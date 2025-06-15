import React from "react";
import Navbar from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Github } from "lucide-react";
import { useState } from "react";
import { 
  Select, 
  SelectTrigger, 
  SelectValue, 
  SelectContent, 
  SelectItem 
} from "@/components/ui/select";
import ProjectCard from "@/components/ProjectCard";
import ProjectFilterBar from "@/components/ProjectFilterBar";
import ProjectGrid from "@/components/ProjectGrid";
import LoadMoreButton from "@/components/LoadMoreButton";
import ProjectDetailDialog from "@/components/ProjectDetailDialog";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

// Sample project data (replace or extend as needed)
const projects = [
  {
    name: "Smart Agent",
    description:
      "A reinforcement learning agent that learns to play chess and improves over time using advanced AI algorithms.",
    techStack: ["Python", "PyTorch", "RL"],
    year: 2024,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
    github: "https://github.com/example/smart-agent",
    live: "",
    videoUrl: "https://www.youtube.com/embed/2ePf9rue1Ao", // added video
  },
  {
    name: "AI Notes",
    description:
      "A powerful note-taking web app that leverages GPT for intelligent search and organization.",
    techStack: ["React", "TypeScript", "OpenAI API"],
    year: 2023,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
    github: "https://github.com/example/ai-notes",
    live: "https://ai-notes.example.com",
    // No videoUrl for this project
  },
  {
    name: "ML Visualizer",
    description:
      "Tool for visualizing neural networks and training processes in an interactive dashboard.",
    techStack: ["Python", "Streamlit", "ML"],
    year: 2022,
    image: "https://images.unsplash.com/photo-1488590528505-0ad4aaf24ca7?auto=format&fit=crop&w=600&q=80",
    github: "https://github.com/example/ml-visualizer",
    live: "",
    videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY", // added video
  },
  {
    name: "Web Scraper Pro",
    description: "A smart web scraping tool built with Node.js that extracts and structures large-scale data for analytics.",
    techStack: ["Node.js", "Express", "Cheerio"],
    year: 2024,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
    github: "https://github.com/example/web-scraper-pro",
    live: "",
    // No videoUrl for this project
  },
  {
    name: "Fitness Tracker",
    description: "A responsive app to track workouts, nutrition, and sleep using cloud sync and machine learning.",
    techStack: ["React", "Firebase", "ML"],
    year: 2023,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80",
    github: "https://github.com/example/fitness-tracker",
    live: "https://fit-track.example.com",
    // No videoUrl for this project
  },
  {
    name: "Code Snippet Hub",
    description: "A collaborative code snippet manager supporting syntax highlighting and team sharing.",
    techStack: ["React", "Next.js", "MongoDB"],
    year: 2022,
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&q=80",
    github: "https://github.com/example/code-snippet-hub",
    live: "",
    videoUrl: "https://www.youtube.com/embed/oUFJJNQGwhk", // added video
  },
  {
    name: "Travel Explorer",
    description: "Find top destinations and plan trips using real-time map data and AI recommendations.",
    techStack: ["Vue", "Mapbox", "AI"],
    year: 2025,
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=600&q=80",
    github: "https://github.com/example/travel-explorer",
    live: "https://travel-explorer.example.com",
    // No videoUrl for this project
  },
  {
    name: "Budget Buddy",
    description: "A personal finance tracker with charts, alerts, and savings goals.",
    techStack: ["Svelte", "TypeScript", "Recharts"],
    year: 2023,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
    github: "https://github.com/example/budget-buddy",
    live: "",
    // No videoUrl for this project
  },
  {
    name: "HealthBot Assistant",
    description: "An AI-powered health assistant chatbot for tracking symptoms and providing insights.",
    techStack: ["Python", "FastAPI", "TensorFlow"],
    year: 2024,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80",
    github: "https://github.com/example/healthbot-assistant",
    live: "",
    // No videoUrl for this project
  },
  {
    name: "Smart Home Control",
    description: "A mobile-first dashboard for home automation using IoT integrations.",
    techStack: ["Flutter", "Firebase", "IoT"],
    year: 2025,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    github: "https://github.com/example/smart-home-control",
    live: "https://smarthome.example.com",
    // No videoUrl for this project
  },
  {
    name: "Portfolio Analyzer",
    description:
      "An analytics dashboard for personal portfolios with export and visualization features.",
    techStack: ["React", "Tailwind", "D3.js"],
    year: 2025,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    github: "https://github.com/example/portfolio-analyzer",
    live: "https://portfolio-analyzer.example.com",
    // No videoUrl for this project
  },
];

// Let's define the indices of featured projects (customize this logic as you wish)
// The new project is added at the last position, so use projects.length-1
const FEATURED_PROJECTS_INDICES = [0, 1, 2, projects.length - 1];

// Collect all unique techs for filtering
const allTechs = Array.from(
  new Set(projects.flatMap((p) => p.techStack)),
);

// Defaults and allowed size options
const INITIAL_DISPLAY_COUNT = 6;
const LOAD_MORE_COUNT = 6;

const Projects = () => {
  const [selectedTech, setSelectedTech] = React.useState<string | null>(null);
  const [sortDirection, setSortDirection] = React.useState<"desc" | "asc" | "featured">("desc");
  const [displayCount, setDisplayCount] = React.useState(INITIAL_DISPLAY_COUNT);
  const navigate = useNavigate();

  // --- Add state for project modal ---
  const [detailOpen, setDetailOpen] = React.useState(false);
  const [selectedProject, setSelectedProject] = React.useState(null);

  // Filter logic
  let filteredProjects = selectedTech
    ? projects.filter((p) => p.techStack.includes(selectedTech))
    : projects;

  // Sorting logic
  if (sortDirection === "featured") {
    // Place featured projects first, the rest after (preserving original order)
    const featured = filteredProjects.filter((_, idx) => FEATURED_PROJECTS_INDICES.includes(idx));
    const rest = filteredProjects.filter((_, idx) => !FEATURED_PROJECTS_INDICES.includes(idx));
    filteredProjects = [...featured, ...rest];
  } else {
    filteredProjects = [...filteredProjects].sort((a, b) =>
      sortDirection === "desc" ? b.year - a.year : a.year - b.year
    );
  }

  // Slice projects for display
  const displayedProjects = filteredProjects.slice(0, displayCount);

  // Show "Load More" if not all projects are being displayed
  const canLoadMore = displayCount < filteredProjects.length;

  // Handles clicking a project card (except videoButton)
  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setDetailOpen(true);
  };

  // Reset the visible projects when the filter or sort changes
  React.useEffect(() => {
    setDisplayCount(INITIAL_DISPLAY_COUNT);
  }, [selectedTech, sortDirection]);

  // Helper for load more button label
  function getLoadMoreLabel() {
    if (!selectedTech) return "Load More";
    return `Load More ${selectedTech} Projects`;
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 flex flex-col items-center px-4 py-12">
        <section className="max-w-5xl w-full mx-auto animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold font-playfair mb-2 text-primary text-center">
            Projects
          </h1>
          <p className="text-lg text-muted-foreground mb-6 text-center font-inter">
            Discover a selection of my recent work—from AI and ML tools to open-source web apps.<br />
            Filter by technology and explore the highlights below!
          </p>
          {/* Filter + Sort Bar */}
          <ProjectFilterBar
            allTechs={allTechs}
            selectedTech={selectedTech}
            sortDirection={sortDirection}
            setSelectedTech={setSelectedTech}
            setSortDirection={setSortDirection}
          />
          {/* Stack count info message always visible now */}
          <div className="mb-6 px-4 py-2 bg-yellow-100 border-l-4 border-yellow-400 text-yellow-800 rounded font-inter text-sm flex items-center justify-between gap-4">
            <span>Too many tech stacks? Try narrowing your filter for a better experience.</span>
            {selectedTech && (
              <button
                className="ml-4 bg-yellow-200 hover:bg-yellow-300 text-yellow-900 px-3 py-1 rounded text-xs font-semibold transition"
                onClick={() => setSelectedTech(null)}
                type="button"
              >
                Clear Filters
              </button>
            )}
          </div>
          {/* Projects Grid with project click handler */}
          <ProjectGrid projects={displayedProjects} onProjectClick={handleProjectClick} />
          {/* No Projects Case */}
          {displayedProjects.length === 0 && (
            <div className="text-center text-muted-foreground font-inter mt-12 animate-fade-in">
              No projects found for <span className="font-semibold">{selectedTech}</span>
            </div>
          )}
          {/* Load More Button */}
          {canLoadMore && (
            <LoadMoreButton onClick={() => setDisplayCount((prev) => prev + LOAD_MORE_COUNT)} label={getLoadMoreLabel()} />
          )}
        </section>

        {/* === New Contact Call-To-Action Section Starts Here === */}
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
        {/* === New Contact Call-To-Action Section Ends Here === */}

        {/* Modal for project details */}
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
