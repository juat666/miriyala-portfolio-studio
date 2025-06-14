
import React from "react";

interface AboutHighlightsProps {
  goodAt: string[];
  interestedAt: string[];
  workOn: string[];
}

const SECTIONS = [
  {
    key: "goodAt",
    label: "I am good at",
    icon: (
      <span
        className="inline-flex justify-center items-center bg-primary text-primary-foreground rounded-full w-10 h-10 mb-2 shadow-md"
        aria-label="Star"
      >
        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      </span>
    ),
  },
  {
    key: "interestedAt",
    label: "I am interested at",
    icon: (
      <span
        className="inline-flex justify-center items-center bg-primary text-primary-foreground rounded-full w-10 h-10 mb-2 shadow-md"
        aria-label="Heart"
      >
        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 21C12 21 4 13.436 4 8.727C4 6.2 6.239 4 8.958 4C10.509 4 12 5.03 12 5.03C12 5.03 13.491 4 15.042 4C17.761 4 20 6.2 20 8.727C20 13.436 12 21 12 21Z" />
        </svg>
      </span>
    ),
  },
  {
    key: "workOn",
    label: "I work on",
    icon: (
      <span
        className="inline-flex justify-center items-center bg-primary text-primary-foreground rounded-full w-10 h-10 mb-2 shadow-md"
        aria-label="Briefcase"
      >
        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 7V5A2 2 0 0 0 14 3H10A2 2 0 0 0 8 5V7" />
        </svg>
      </span>
    ),
  },
];

const sectionClasses =
  "flex-1 min-w-[210px] px-6 py-6 rounded-2xl bg-card border border-muted flex flex-col items-center gap-3 shadow-md transition-transform hover:scale-105 duration-150";

const listClasses =
  "list-disc list-inside text-muted-foreground text-sm font-inter space-y-1 text-center";

const AboutHighlights: React.FC<AboutHighlightsProps> = ({
  goodAt,
  interestedAt,
  workOn,
}) => {
  // mapping key to data
  const sectionData = { goodAt, interestedAt, workOn };

  return (
    <div className="flex flex-col gap-4 md:flex-row md:gap-6 mb-10 w-full animate-fade-in justify-center">
      {SECTIONS.map(({ key, label, icon }) => (
        <div className={sectionClasses} key={key}>
          {icon}
          <h3 className="font-semibold text-primary text-lg font-playfair mb-1 text-center">
            {label}
          </h3>
          <ul className={listClasses}>
            {(sectionData as any)[key]?.map((s: string, i: number) => (
              <li key={i} className="break-words">{s}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default AboutHighlights;

