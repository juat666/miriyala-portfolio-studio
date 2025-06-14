
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4 py-12 relative overflow-hidden">
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
              className="rounded-xl shadow-lg object-cover w-48 h-48 md:w-64 md:h-64"
              loading="lazy"
              draggable={false}
            />
          </div>
          {/* Text Content */}
          <div className="w-full md:w-3/5 text-center md:text-left flex flex-col items-center md:items-start">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold leading-tight mb-4">
              Kundhan Miriyala
            </h1>
            <h2 className="text-2xl md:text-3xl font-inter text-primary mb-2 font-semibold">
              Innovative Software Engineer & Aspiring Entrepreneur
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-inter mb-2 font-medium">
              AI Enthusiast&nbsp;&bull;&nbsp;Tech Problem Solver&nbsp;&bull;&nbsp;Community Builder
            </p>
            <ul className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start text-sm md:text-base">
              <li className="bg-accent text-accent-foreground rounded px-3 py-1 font-inter">React</li>
              <li className="bg-accent text-accent-foreground rounded px-3 py-1 font-inter">TypeScript</li>
              <li className="bg-accent text-accent-foreground rounded px-3 py-1 font-inter">Node.js</li>
              <li className="bg-accent text-accent-foreground rounded px-3 py-1 font-inter">Python</li>
              <li className="bg-accent text-accent-foreground rounded px-3 py-1 font-inter">UI/UX Design</li>
              <li className="bg-accent text-accent-foreground rounded px-3 py-1 font-inter">LangChain</li>
            </ul>
            <p className="text-lg md:text-xl text-muted-foreground font-inter mb-2 max-w-xl">
              Problem solving drives innovation.
            </p>
            <p className="text-base md:text-lg text-muted-foreground font-inter mb-6 max-w-xl">
              Empowering the next generation of tech talent by building robust digital experiences and sharing solutions.
            </p>
            <div className="flex gap-4">
              <Link to="/projects" tabIndex={-1}>
                <Button className="font-inter text-base px-6 py-3" size="lg">
                  View Projects
                </Button>
              </Link>
              <Link to="/contact" tabIndex={-1}>
                <Button variant="outline" className="font-inter text-base px-6 py-3" size="lg">
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
