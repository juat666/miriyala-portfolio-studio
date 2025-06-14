
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
  },
  {
    name: "ML Visualizer",
    description:
      "Tool for visualizing neural networks and training processes in an interactive dashboard.",
    techStack: ["Python", "Streamlit", "ML"],
    year: 2022,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80",
    github: "https://github.com/example/ml-visualizer",
    live: "",
  },
  // ----- Additional 10 projects below -----
  {
    name: "Web Scraper Pro",
    description: "A smart web scraping tool built with Node.js that extracts and structures large-scale data for analytics.",
    techStack: ["Node.js", "Express", "Cheerio"],
    year: 2024,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
    github: "https://github.com/example/web-scraper-pro",
    live: "",
  },
  {
    name: "Fitness Tracker",
    description: "A responsive app to track workouts, nutrition, and sleep using cloud sync and machine learning.",
    techStack: ["React", "Firebase", "ML"],
    year: 2023,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80",
    github: "https://github.com/example/fitness-tracker",
    live: "https://fit-track.example.com",
  },
  {
    name: "Code Snippet Hub",
    description: "A collaborative code snippet manager supporting syntax highlighting and team sharing.",
    techStack: ["React", "Next.js", "MongoDB"],
    year: 2022,
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&q=80",
    github: "https://github.com/example/code-snippet-hub",
    live: "",
  },
  {
    name: "Travel Explorer",
    description: "Find top destinations and plan trips using real-time map data and AI recommendations.",
    techStack: ["Vue", "Mapbox", "AI"],
    year: 2025,
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=600&q=80",
    github: "https://github.com/example/travel-explorer",
    live: "https://travel-explorer.example.com",
  },
  {
    name: "Budget Buddy",
    description: "A personal finance tracker with charts, alerts, and savings goals.",
    techStack: ["Svelte", "TypeScript", "Recharts"],
    year: 2023,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
    github: "https://github.com/example/budget-buddy",
    live: "",
  },
  {
    name: "HealthBot Assistant",
    description: "An AI-powered health assistant chatbot for tracking symptoms and providing insights.",
    techStack: ["Python", "FastAPI", "TensorFlow"],
    year: 2024,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80",
    github: "https://github.com/example/healthbot-assistant",
    live: "",
  },
  {
    name: "Smart Home Control",
    description: "A mobile-first dashboard for home automation using IoT integrations.",
    techStack: ["Flutter", "Firebase", "IoT"],
    year: 2025,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    github: "https://github.com/example/smart-home-control",
    live: "https://smarthome.example.com",
  },
  {
    name: "Crypto Tracker",
    description: "Real-time cryptocurrency price tracker with historical charts and price alerts.",
    techStack: ["React", "Redux", "Recharts"],
    year: 2024,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
    github: "https://github.com/example/crypto-tracker",
    live: "",
  },
  {
    name: "Event Planner AI",
    description: "Automated event planning app that suggests vendors, builds schedules, and manages attendees.",
    techStack: ["Angular", "TypeScript", "AI"],
    year: 2023,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80",
    github: "https://github.com/example/event-planner-ai",
    live: "https://eventplannerai.example.com",
  },
  {
    name: "Portfolio Generator",
    description: "Instantly generate a personal developer portfolio from your GitHub profile data.",
    techStack: ["React", "Tailwind", "GraphQL"],
    year: 2022,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80",
    github: "https://github.com/example/portfolio-generator",
    live: "",
  },
  {
    name: "AI Quiz Builder",
    description: "Create and share AI-generated quizzes for any topic in seconds.",
    techStack: ["Vue", "TypeScript", "OpenAI API"],
    year: 2024,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80",
    github: "https://github.com/example/ai-quiz-builder",
    live: "",
  },
];

// Collect all unique techs for filtering
const allTechs = Array.from(
  new Set(projects.flatMap((p) => p.techStack)),
);

// Defaults and allowed size options
const DEFAULT_SHOW_COUNT = 9;
const PAGE_SIZE_BASES = [3, 6, 9];

const Projects = () => {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"desc" | "asc">("desc"); // desc: recent first, asc: oldest first
  const [projectsToShow, setProjectsToShow] = useState<number | "All">(DEFAULT_SHOW_COUNT);

  // Filter projects by selected tech
  let filteredProjects = selectedTech
    ? projects.filter((p) => p.techStack.includes(selectedTech))
    : projects;

  // Sort projects by year
  filteredProjects = [...filteredProjects].sort((a, b) =>
    sortDirection === "desc" ? b.year - a.year : a.year - b.year
  );

  // Slice projects to show according to selected count
  const canShowCountSelector = filteredProjects.length > DEFAULT_SHOW_COUNT;

  let displayedProjects =
    projectsToShow === "All"
      ? filteredProjects
      : filteredProjects.slice(0, projectsToShow);

  // Dynamic page size options (show: 3, 6, 9, and total/all)
  let pageSizeOptions: (number | "All")[] = [];
  if (canShowCountSelector) {
    pageSizeOptions = PAGE_SIZE_BASES.filter(
      (base) => base < filteredProjects.length
    );
    // Always include "All"
    if (!pageSizeOptions.includes(filteredProjects.length)) {
      pageSizeOptions.push(filteredProjects.length);
    }
    pageSizeOptions = Array.from(new Set([...pageSizeOptions, "All"])); // avoid duplicates
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
          {/* Filter + Sort + Count Bar */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
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
            {/* Sort */}
            <div>
              <Select
                value={sortDirection}
                onValueChange={(v) => setSortDirection(v as "desc" | "asc")}
              >
                <SelectTrigger className="w-36">
                  <SelectValue>
                    Sort: {sortDirection === "desc" ? "Most Recent" : "Oldest"}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="desc">Most Recent</SelectItem>
                  <SelectItem value="asc">Oldest</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {/* Count Selector */}
            {canShowCountSelector && (
              <div>
                <Select
                  value={String(projectsToShow)}
                  onValueChange={(v) =>
                    setProjectsToShow(
                      v === "All"
                        ? "All"
                        : Number(v)
                    )
                  }
                >
                  <SelectTrigger className="w-32">
                    <SelectValue>
                      Show:{" "}
                      {projectsToShow === "All"
                        ? "All"
                        : projectsToShow}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {pageSizeOptions.map((option) =>
                      option === "All" ? (
                        <SelectItem key="all" value="All">
                          All
                        </SelectItem>
                      ) : (
                        <SelectItem key={option} value={String(option)}>
                          {option}
                        </SelectItem>
                      )
                    )}
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>
          {/* Projects Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {displayedProjects.map((proj) => (
              <Card
                key={proj.name}
                className="transition-shadow hover:shadow-lg bg-card animate-fade-in flex flex-col h-full"
              >
                <img
                  src={proj.image}
                  alt={proj.name}
                  className="rounded-t-lg w-full h-40 object-cover"
                  loading="lazy"
                />
                <CardHeader>
                  <CardTitle className="font-playfair text-xl">{proj.name}</CardTitle>
                  <CardDescription>{proj.year}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="mb-3 text-sm font-inter text-muted-foreground">{proj.description}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {proj.techStack.map((tech) => (
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
                    {proj.github && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View on GitHub"
                        className="hover:underline flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span className="font-inter text-xs">GitHub</span>
                      </a>
                    )}
                    {proj.live && (
                      <a
                        href={proj.live}
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
            ))}
          </div>
          {/* No Projects Case */}
          {displayedProjects.length === 0 && (
            <div className="text-center text-muted-foreground font-inter mt-12 animate-fade-in">
              No projects found for <span className="font-semibold">{selectedTech}</span>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default Projects;

