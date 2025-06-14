
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
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
            <h2 className="text-2xl md:text-3xl font-inter text-primary mb-2">
              Full Stack Developer & Designer
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground font-inter mb-6 max-w-xl">
              I build beautiful, performant digital experiences with a focus on simplicity, accessibility, and craft. Let’s create something amazing together!
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
