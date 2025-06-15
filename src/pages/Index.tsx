
import Navbar from "@/components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import React from "react";
import HomeBlogGrid from "@/components/HomeBlogGrid";
import { projects as allProjects, FEATURED_PROJECTS_INDICES } from "@/components/projects/projectData";
import ProjectCard from "@/components/ProjectCard";
import ContactCTA from "@/components/ContactCTA";
import { blogs } from "@/components/blogData";

// Blog data for use in homepage and blog page (should be centralized in real projects)
const Index = () => {
  const navigate = useNavigate();

  // Find featured projects based on indices
  const featuredProjects = FEATURED_PROJECTS_INDICES
    .map((idx) => allProjects[idx])
    .filter(Boolean);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden">
        {/* Gradient background */}
        <div aria-hidden className="absolute inset-0 pointer-events-none select-none z-0">
          <div className="w-full h-full bg-gradient-to-br from-blue-100/60 via-purple-100/40 to-pink-100/60 dark:from-indigo-900/60 dark:via-slate-900/50 dark:to-fuchsia-900/60 blur-lg opacity-70 animate-fade-in" />
        </div>
        <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Image */}
          <div className="w-full md:w-2/5 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=facearea&w=400&h=400&facepad=2"
              alt="Portrait of Kundhan Miriyala"
              className="rounded-xl shadow-lg object-cover w-48 h-48 md:w-64 md:h-64 animate-fade-in"
              loading="lazy"
              draggable={false}
            />
          </div>
          {/* Text Content */}
          <div className="w-full md:w-3/5 text-center md:text-left flex flex-col items-center md:items-start">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold leading-tight mb-2 animate-fade-in">
              Problem solving drives innovation.
            </h1>
            <h2 className="text-xl md:text-2xl font-inter text-primary mb-3 font-semibold animate-fade-in">
              AI Enthusiast &bull; Problem Solver
            </h2>
            {/* Short Personal Statement */}
            <p className="text-base md:text-lg text-muted-foreground font-inter mb-5 max-w-xl animate-fade-in">
              I’m an aspiring AI specialist passionate about solving real-world problems using data science and generative AI. I thrive on building innovative, accessible solutions—turning complex challenges into impactful products.
            </p>
            {/* Skills */}
            <ul className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start text-sm md:text-base animate-fade-in">
              <li className="bg-accent text-accent-foreground rounded px-3 py-1 font-inter">Python</li>
              <li className="bg-accent text-accent-foreground rounded px-3 py-1 font-inter">LLM</li>
              <li className="bg-accent text-accent-foreground rounded px-3 py-1 font-inter">PyTorch</li>
              <li className="bg-accent text-accent-foreground rounded px-3 py-1 font-inter">Transformers</li>
              <li className="bg-accent text-accent-foreground rounded px-3 py-1 font-inter">LangChain</li>
            </ul>
            {/* Quick Stats/Bio */}
            <div className="w-full mb-6">
              <ul className="space-y-1 text-left text-sm md:text-base text-foreground/90 font-inter">
                {/* --- removed bio stats per user request --- */}
              </ul>
            </div>
            <div className="flex gap-4 mb-2 animate-fade-in">
              <Link to="/projects" tabIndex={-1}>
                <Button className="font-inter text-base px-6 py-3 hover-scale" size="lg">
                  View Projects
                </Button>
              </Link>
              <Link to="/contact" tabIndex={-1}>
                <Button variant="outline" className="font-inter text-base px-6 py-3 hover-scale" size="lg">
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>
        </div>
        {/* === Featured Projects Section - ONLY SHOW FEATURED === */}
        <section className="relative z-10 mt-12 w-full max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold font-playfair mb-4 text-primary animate-fade-in">
            🌟 Featured Projects
          </h3>
          <div className="flex flex-col md:flex-row gap-6">
            {featuredProjects.length === 0 ? (
              <div className="w-full text-muted-foreground font-inter mt-6 text-center animate-fade-in">
                No featured projects yet.
              </div>
            ) : (
              featuredProjects.map((proj) => (
                <div key={proj.name} className="flex-1 min-w-0 animate-fade-in">
                  <div className="hover-scale transition-transform">
                    <ProjectCard project={proj} />
                  </div>
                </div>
              ))
            )}
          </div>
          {/* See All Projects button */}
          <div className="flex justify-center mt-6 animate-fade-in">
            <Button
              size="lg"
              className="font-inter px-8 py-3 text-base hover-scale"
              onClick={() => navigate("/projects")}
            >
              See All Projects
            </Button>
          </div>
        </section>
        {/* Blog/Writing Teaser */}
        <section className="relative z-10 mt-14 w-full max-w-4xl mx-auto text-center mb-6">
          <h3 className="text-xl md:text-2xl font-bold font-playfair mb-2 text-primary animate-fade-in">
            ✍️ Featured Blog Posts
          </h3>
          <p className="text-md md:text-lg font-inter text-muted-foreground mb-2 animate-fade-in">
            Browse my featured articles on AI, coding, product design, and tech journeys.
          </p>
          <div className="animate-fade-in">
            <HomeBlogGrid blogs={blogs} />
          </div>
          {/* See All Blogs button */}
          <div className="flex justify-center mt-8 animate-fade-in">
            <Button
              size="lg"
              className="font-inter px-8 py-3 text-base hover-scale"
              onClick={() => navigate("/blog")}
            >
              See All Blogs
            </Button>
          </div>
        </section>
        {/* === New Contact Call-To-Action Section Starts Here === */}
        <div className="animate-fade-in">
          <ContactCTA />
        </div>
        {/* === New Contact Call-To-Action Section Ends Here === */}
      </main>
      <footer className="bg-muted/50 border-t border-border text-muted-foreground py-4 mt-8 text-sm text-center relative z-10 shadow-inner">
        &copy; {new Date().getFullYear()} Kundhan Miriyala · Built with AI, code, and curiosity.
      </footer>
    </div>
  );
};

export default Index;

