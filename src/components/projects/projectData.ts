
export const projects = [
  {
    name: "Smart Agent",
    description:
      "A reinforcement learning agent that learns to play chess and improves over time using advanced AI algorithms.",
    techStack: ["Python", "PyTorch", "RL"],
    year: 2024,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
    github: "https://github.com/example/smart-agent",
    live: "",
    videoUrl: "https://www.youtube.com/embed/2ePf9rue1Ao",
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
    image: "https://images.unsplash.com/photo-1488590528505-0ad4aaf24ca7?auto=format&fit=crop&w=600&q=80",
    github: "https://github.com/example/ml-visualizer",
    live: "",
    videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
  },
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
    videoUrl: "https://www.youtube.com/embed/oUFJJNQGwhk",
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
    name: "Portfolio Analyzer",
    description:
      "An analytics dashboard for personal portfolios with export and visualization features.",
    techStack: ["React", "Tailwind", "D3.js"],
    year: 2025,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    github: "https://github.com/example/portfolio-analyzer",
    live: "https://portfolio-analyzer.example.com",
  },
];

export const FEATURED_PROJECTS_INDICES = [0, 1, 2, projects.length - 1];

export const allTechs = Array.from(
  new Set(projects.flatMap((p) => p.techStack)),
);

export const INITIAL_DISPLAY_COUNT = 6;
export const LOAD_MORE_COUNT = 6;
