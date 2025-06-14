
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Download, User } from "lucide-react";

const profilePic =
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=facearea&w=320&h=320&facepad=3";

const About = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <Navbar />
    <main className="flex-1 flex items-center justify-center px-4 py-12">
      <section className="max-w-2xl w-full mx-auto animate-fade-in">
        {/* Profile picture & Name */}
        <div className="flex flex-col items-center gap-3 mb-6">
          <img
            src={profilePic}
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover border-2 border-primary shadow-lg"
            loading="lazy"
          />
          <h1 className="text-3xl md:text-4xl font-bold font-playfair text-primary">Kundhan Miriyala</h1>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted text-muted-foreground font-inter text-xs">
            <User className="w-4 h-4" /> AI Enthusiast & Problem Solver
          </span>
        </div>
        {/* Short Bio */}
        <div className="mb-6 text-center">
          <p className="text-lg font-inter mb-2 text-muted-foreground">
            Hello! I'm Kundhan, passionate about AI and creating accessible technology that makes a difference.
            I enjoy solving real-world problems, learning new things, and sharing knowledge with the community.
          </p>
        </div>
        {/* Details: Background, Skills, Hobbies */}
        <div className="grid gap-6 md:grid-cols-3 text-left">
          <div>
            <h2 className="font-semibold text-primary mb-2 font-playfair text-lg">Background</h2>
            <ul className="list-disc list-inside text-muted-foreground text-sm font-inter">
              <li>B.Tech in Computer Science</li>
              <li>3+ years building web and AI projects</li>
              <li>Open Source Contributor</li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-primary mb-2 font-playfair text-lg">Skills</h2>
            <ul className="list-disc list-inside text-muted-foreground text-sm font-inter">
              <li>Python, TypeScript, React</li>
              <li>Machine Learning, Deep Learning</li>
              <li>Web Development</li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-primary mb-2 font-playfair text-lg">Hobbies</h2>
            <ul className="list-disc list-inside text-muted-foreground text-sm font-inter">
              <li>Solving puzzles & logic games</li>
              <li>Coffee brewing</li>
              <li>Photography & nature walks</li>
            </ul>
          </div>
        </div>
        {/* Download CV Button */}
        <div className="mt-8 flex justify-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="font-inter gap-2"
          >
            <a
              href="/cv.pdf"
              download
              className="flex items-center"
              aria-label="Download CV"
            >
              <Download className="mr-1" />
              Download CV
            </a>
          </Button>
        </div>
      </section>
    </main>
  </div>
);

export default About;

