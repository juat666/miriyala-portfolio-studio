
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Download, User, Github, Linkedin } from "lucide-react";
import React from "react";
import ExperienceTimeline, { ExperienceTimelineProps } from "@/components/ExperienceTimeline";
import WorkExperienceSection from "@/components/WorkExperienceSection";
import EducationSection from "@/components/EducationSection";
// ADD THIS IMPORT
import type { TimelineItem } from "@/components/ExperienceTimeline";

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

// Explicitly type as TimelineItem[] for both arrays
const workExperience: TimelineItem[] = [
  {
    id: "exp1",
    type: "work",
    title: "Machine Learning Intern",
    org: "Startup XYZ",
    location: "Remote",
    period: "May 2024 – Jul 2024",
    description:
      "Developed reinforcement learning agents for logistics scheduling, resulting in 20% efficiency increase. Collaborated on state-of-the-art RL research applied to real-world problems.",
    achievements: [
      "Built scalable RL pipelines for simulation",
      "Published internal whitepaper on RL tuning",
      "Demoed project to C-level stakeholders"
    ],
    techs: ["Python", "TensorFlow", "RLlib", "Docker"],
  },
  {
    id: "exp2",
    type: "work",
    title: "AI & Data Science Student",
    org: "Your University",
    location: "Hyderabad, India",
    period: "2022 – Present",
    description:
      "Majoring in AI & Data Science with hands-on experience in ML, deep learning, and applied AI. Led multiple capstone projects in RL and MLOps.",
    achievements: [
      "Dean’s List, 3 semesters",
      "Led a student ML research club",
      "Organized HackAI 2024 campus edition"
    ],
    techs: ["Python", "PyTorch", "Pandas", "scikit-learn"],
  },
  // You can add a new work experience object here:
  // {
  //   id: "exp3",
  //   type: "work",
  //   title: "New Job Title",
  //   org: "New Organization",
  //   location: "City, Country",
  //   period: "Start – End",
  //   description: "...",
  //   achievements: [/* ... */],
  //   techs: [/* ... */],
  // },
];

const education: TimelineItem[] = [
  {
    id: "edu1",
    type: "education",
    title: "B.Tech in AI & Data Science",
    org: "Your University",
    location: "Hyderabad, India",
    period: "2022 – Present",
    description:
      "Core coursework in deep learning, probability, statistics, and artificial intelligence. Participated in research seminars and open source academic projects.",
    achievements: [
      "Google AI Scholarship Recipient (2023)",
      "TensorFlow Developer Certificate (2024)",
      "Research on RL for Smart Grids"
    ],
    techs: ["Python", "TensorFlow", "Research", "Statistics"]
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
      <section className="max-w-3xl w-full mx-auto animate-fade-in">
        {/* Profile picture & Name */}
        <div className="flex flex-col items-center gap-3 mb-6">
          <img
            src={
              "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=facearea&w=320&h=320&facepad=3"
            }
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
            {[
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
            ].map(({ name, url, icon: Icon }) => (
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
        {/* Three-column: Background/Skills/Hobbies */}
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
        {/* Work Experience Section */}
        <WorkExperienceSection items={workExperience} />
        {/* Education Section */}
        <EducationSection items={education} />
        {/* Download CV Button */}
        <div className="mt-12 flex justify-center">
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

