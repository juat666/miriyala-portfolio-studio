
import React from "react";
import ExperienceTimeline, { ExperienceTimelineProps } from "./ExperienceTimeline";

interface WorkExperienceSectionProps {
  items: ExperienceTimelineProps["items"];
}

const WorkExperienceSection: React.FC<WorkExperienceSectionProps> = ({ items }) => {
  return (
    <section className="mt-12">
      <h2 className="font-bold text-primary mb-4 font-playfair text-2xl text-center md:text-left">
        Work Experience
      </h2>
      <ExperienceTimeline items={items} accent="primary" />
    </section>
  );
};

export default WorkExperienceSection;

