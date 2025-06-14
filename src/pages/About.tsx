
import Navbar from "@/components/Navbar";

const About = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <Navbar />
    <main className="flex-1 flex items-center justify-center px-4 py-12">
      <section className="max-w-2xl w-full mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold font-playfair mb-2 text-primary">About Me</h1>
        <p className="text-lg text-muted-foreground mb-4 font-inter">
          Hi! I'm Kundhan Miriyala, an AI enthusiast and problem solver dedicated to building meaningful, accessible technology. This page will be updated soon with a detailed introduction, mission, and tech journey!
        </p>
        <p className="text-md font-inter">Stay tuned for more info about my experience, goals, and story.</p>
      </section>
    </main>
  </div>
);

export default About;
