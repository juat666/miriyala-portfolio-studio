
import React from "react";

interface AboutHighlightsProps {
  goodAt: string[];
  interestedAt: string[];
  workAt: string[];
}

const sectionClasses =
  "flex-1 min-w-[180px] p-4 rounded-lg bg-muted flex flex-col items-center gap-2 shadow transition hover:scale-105";

const AboutHighlights: React.FC<AboutHighlightsProps> = ({
  goodAt,
  interestedAt,
  workAt,
}) => (
  <div className="flex flex-col md:flex-row md:items-start gap-4 mb-10 animate-fade-in">
    <div className={sectionClasses}>
      <h3 className="font-semibold text-primary text-lg font-playfair mb-2">
        I am good at
      </h3>
      <ul className="list-disc list-inside text-muted-foreground text-sm font-inter space-y-1">
        {goodAt.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </div>
    <div className={sectionClasses}>
      <h3 className="font-semibold text-primary text-lg font-playfair mb-2">
        I am interested at
      </h3>
      <ul className="list-disc list-inside text-muted-foreground text-sm font-inter space-y-1">
        {interestedAt.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </div>
    <div className={sectionClasses}>
      <h3 className="font-semibold text-primary text-lg font-playfair mb-2">
        I work at
      </h3>
      <ul className="list-disc list-inside text-muted-foreground text-sm font-inter space-y-1">
        {workAt.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default AboutHighlights;
