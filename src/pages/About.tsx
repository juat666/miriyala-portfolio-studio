
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Download, User, Github, Linkedin } from "lucide-react";
import React from "react";

const profilePic =
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=facearea&w=320&h=320&facepad=3";

// Social links: add socials as needed
const socials = [
  {
    name: "GitHub",
    url: "https://github.com/kundhanmiriyala",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/kundhanmiriyala",
    icon: Linkedin,
  },
];

const workTimeline = [
  {
    title: "Machine Learning Intern",
    org: "Startup XYZ",
    period: "May 2024 – Jul 2024",
    desc: "Worked on developing reinforcement learning agents for real-world scenarios."
  },
  {
    title: "AI & Data Science Student",
    org: "Your University",
    period: "2022 – Present",
    desc: "Majoring in AI and Data Science with projects ranging from ML to deep learning."
  }
];

const achievements = [
  "Google AI Scholarship Recipient (2023)",
  "Won HackAI 2024 (Best Use of AI award)",
  "TensorFlow Developer Certificate (2024)"
];

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
          <h1 className="text-3xl md:text-4xl font-bold font-playfair text-primary text-center">Kundhan Miriyala</h1>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted text-muted-foreground font-inter text-xs">
            <User className="w-4 h-4" /> AI Enthusiast & Problem Solver
          </span>
          {/* Social Links */}
          <div className="flex gap-4 mt-1">
            {socials.map(({ name, url, icon: Icon }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="hover:text-primary/90 text-muted-foreground transition-colors"
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
        {/* Short Bio */}
        <div className="mb-6 text-center">
          <p className="text-lg font-inter mb-2 text-muted-foreground">
            Hello! I'm Kundhan, passionate about AI and creating accessible technology that makes a difference.
            Currently building foundations in artificial intelligence and agents, with a focus on reinforcement learning.
            Always eager to explore, learn, and share knowledge.
          </p>
        </div>
        {/* Structured Details */}
        <div className="grid gap-6 md:grid-cols-3 text-left">
          {/* Background */}
          <div>
            <h2 className="font-semibold text-primary mb-2 font-playfair text-lg">Background</h2>
            <ul className="list-disc list-inside text-muted-foreground text-sm font-inter space-y-1">
              <li>B.Tech majoring in AI and Data Science</li>
              <li>Currently building foundations on AI and agents</li>
              <li>Reinforcement learning</li>
            </ul>
          </div>
          {/* Skills */}
          <div>
            <h2 className="font-semibold text-primary mb-2 font-playfair text-lg">Skills</h2>
            <ul className="list-disc list-inside text-muted-foreground text-sm font-inter space-y-1">
              <li>Python</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Machine Learning</li>
              <li>Deep Learning</li>
            </ul>
          </div>
          {/* Hobbies */}
          <div>
            <h2 className="font-semibold text-primary mb-2 font-playfair text-lg">Hobbies</h2>
            <ul className="list-disc list-inside text-muted-foreground text-sm font-inter space-y-1">
              <li>Watching movies</li>
              <li>Playing chess</li>
              <li>Having great food</li>
            </ul>
          </div>
        </div>
        {/* Timeline: Work Experience & Education */}
        <div className="mt-10">
          <h2 className="font-bold text-primary mb-4 font-playfair text-xl text-center md:text-left">Work Experience & Education</h2>
          <ol className="relative border-l-2 border-primary/20 pl-6 space-y-6 font-inter">
            {workTimeline.map(({ title, org, period, desc }, idx) => (
              <li key={idx} className="ml-2">
                <div className="absolute -left-3.5 mt-2 w-3 h-3 bg-primary rounded-full border-2 border-background"></div>
                <div>
                  <span className="font-semibold text-primary">{title}</span>
                  <span className="block text-xs text-muted-foreground">{org} • {period}</span>
                  <span className="block text-sm mt-1 text-muted-foreground">{desc}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
        {/* Achievements / Certifications */}
        <div className="mt-10">
          <h2 className="font-bold text-primary mb-4 font-playfair text-xl text-center md:text-left">Achievements & Certifications</h2>
          <ul className="list-disc list-inside text-muted-foreground text-sm font-inter space-y-1">
            {achievements.map((ach, idx) => (
              <li key={idx}>{ach}</li>
            ))}
          </ul>
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

