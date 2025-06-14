
import React from "react";
import ExperienceTimeline, { ExperienceTimelineProps } from "./ExperienceTimeline";

interface EducationSectionProps {
  items: ExperienceTimelineProps["items"];
}

const EducationSection: React.FC<EducationSectionProps> = ({ items }) => {
  return (
    <section className="mt-12">
      <h2 className="font-bold text-primary mb-4 font-playfair text-2xl text-center md:text-left">
        Education
      </h2>
      <ExperienceTimeline items={items} accent="secondary" />
    </section>
  );
};

export default EducationSection;

