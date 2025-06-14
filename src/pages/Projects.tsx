
import Navbar from "@/components/Navbar";

const Projects = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <Navbar />
    <main className="flex-1 flex items-center justify-center px-4 py-12">
      <section className="max-w-3xl w-full mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold font-playfair mb-2 text-primary text-center">Projects</h1>
        <p className="text-lg text-muted-foreground mb-4 text-center font-inter">
          Here you'll find a collection of my recent work, including AI projects, open-source tools, and more. Explore the project highlights and detailed case studies coming soon!
        </p>
        {/* Placeholder for project cards/list */}
        <div className="mt-8 text-center">
          <span className="text-accent-foreground font-inter">More detailed project showcase in progress...</span>
        </div>
      </section>
    </main>
  </div>
);

export default Projects;
