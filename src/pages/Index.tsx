
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
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
              className="rounded-xl shadow-lg object-cover w-48 h-48 md:w-64 md:h-64"
              loading="lazy"
              draggable={false}
            />
          </div>
          {/* Text Content */}
          <div className="w-full md:w-3/5 text-center md:text-left flex flex-col items-center md:items-start">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold leading-tight mb-2">
              Problem solving drives innovation.
            </h1>
            <h2 className="text-xl md:text-2xl font-inter text-primary mb-3 font-semibold">
              AI Enthusiast &bull; Problem Solver
            </h2>
            {/* Short Personal Statement */}
            <p className="text-base md:text-lg text-muted-foreground font-inter mb-5 max-w-xl">
              I’m an aspiring AI specialist passionate about solving real-world problems using data science and generative AI. I thrive on building innovative, accessible solutions—turning complex challenges into impactful products.
            </p>
            {/* Skills */}
            <ul className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start text-sm md:text-base">
              <li className="bg-accent text-accent-foreground rounded px-3 py-1 font-inter">Python</li>
              <li className="bg-accent text-accent-foreground rounded px-3 py-1 font-inter">LLM</li>
              <li className="bg-accent text-accent-foreground rounded px-3 py-1 font-inter">PyTorch</li>
              <li className="bg-accent text-accent-foreground rounded px-3 py-1 font-inter">Transformers</li>
              <li className="bg-accent text-accent-foreground rounded px-3 py-1 font-inter">LangChain</li>
            </ul>
            {/* Quick Stats/Bio */}
            <div className="w-full mb-6">
              <ul className="space-y-1 text-left text-sm md:text-base text-foreground/90 font-inter">
                <li>
                  <span className="mr-2" role="img" aria-label="graduation cap">🎓</span>
                  <strong>2nd Year BTech Student –</strong> Artificial Intelligence & Data Science @ Amrita Vishwa Vidyapeetham
                </li>
                <li>
                  <span className="mr-2" role="img" aria-label="laptop">👨‍💻</span>
                  <strong>10+ AI Projects –</strong> including LLM agents, hybrid encryption tools, and real-time subtitle matchers
                </li>
                <li>
                  <span className="mr-2" role="img" aria-label="rocket">🚀</span>
                  <strong>Founder –</strong> Kenatics, a startup helping SMBs innovate with data and cloud tech
                </li>
                <li>
                  <span className="mr-2" role="img" aria-label="handshake">🤝</span>
                  Open Source Contributor & Tech Club Member
                </li>
                <li>
                  <span className="mr-2" role="img" aria-label="calendar">📅</span>
                  Learning & building 6 hours/day (10 hrs on Sundays!)
                </li>
              </ul>
            </div>
            <div className="flex gap-4 mb-2">
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
        {/* Featured Projects */}
        <section className="relative z-10 mt-12 w-full max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold font-playfair mb-4 text-primary">🌟 Featured Projects</h3>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 bg-card rounded-lg shadow-md p-6 mb-2 md:mb-0">
              <h4 className="text-lg md:text-xl font-semibold font-inter mb-1 flex items-center gap-2">
                <span role="img" aria-label="lock">🔐</span> Hybrid Encryption Security App
              </h4>
              <p className="text-muted-foreground mb-3">
                Built a Python-based security app using AES + RSA encryption with a frontend interface.
              </p>
              <Link to="/projects">
                <Button size="sm" className="font-inter">View Project →</Button>
              </Link>
            </div>
            <div className="flex-1 bg-card rounded-lg shadow-md p-6">
              <h4 className="text-lg md:text-xl font-semibold font-inter mb-1 flex items-center gap-2">
                <span role="img" aria-label="clapper">🎬</span> Subtitle Matcher CLI App
              </h4>
              <p className="text-muted-foreground mb-3">
                Smart tool that finds accurate subtitles for any MP4 file using web scraping and hashing techniques.
              </p>
              <Link to="/projects">
                <Button size="sm" className="font-inter">View Project →</Button>
              </Link>
            </div>
          </div>
        </section>
        {/* Blog/Writing Teaser */}
        <section className="relative z-10 mt-14 w-full max-w-4xl mx-auto text-center mb-6">
          <h3 className="text-xl md:text-2xl font-bold font-playfair mb-2 text-primary">✍️ Recent Blog Posts or Writings</h3>
          <p className="text-md md:text-lg font-inter text-muted-foreground mb-2">
            (Coming soon! Maybe a blog on <strong>“How I Built a Low-Cost Bluetooth Audio Sharing Prototype”</strong> or <strong>“My Journey with AI Agents &amp; LLMs”</strong> would be perfect!)
          </p>
          <span className="text-sm text-accent-foreground font-inter">
            Let me know if you'd like help drafting one.
          </span>
        </section>
      </main>
      {/* Simple Footer */}
      <footer className="bg-muted/50 border-t border-border text-muted-foreground py-4 mt-8 text-sm text-center relative z-10 shadow-inner">
        &copy; {new Date().getFullYear()} Kundhan Miriyala · Built with AI, code, and curiosity.
      </footer>
    </div>
  );
};

export default Index;
