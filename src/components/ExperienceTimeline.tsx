import React, { useState } from "react";
import { Briefcase, GraduationCap, MapPin, Calendar, Award } from "lucide-react";
import { cn } from "@/lib/utils";

// Export the TimelineItem type so it can be imported elsewhere
export type TimelineItem = {
  id: string;
  title: string;
  org: string;
  location?: string;
  period: string;
  type: "work" | "education";
  description: string;
  achievements?: string[];
  techs?: string[];
};

export interface ExperienceTimelineProps {
  items: TimelineItem[];
  className?: string;
  accent?: "primary" | "secondary";
}

const icons = {
  work: Briefcase,
  education: GraduationCap,
};

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({
  items,
  className,
  accent = "primary",
}) => {
  // Select the most recent item by default
  const [selectedIdx, setSelectedIdx] = useState(0);

  const selected = items[selectedIdx];

  return (
    <div className={cn("flex flex-col md:flex-row gap-6", className)}>
      {/* Timeline Cards List */}
      <div className="flex-1">
        <ol className="relative border-l-2 border-muted pl-6 space-y-6">
          {items.map((item, idx) => {
            const Icon = icons[item.type] || Calendar;
            const isActive = idx === selectedIdx;
            return (
              <li
                key={item.id}
                className={cn(
                  "group cursor-pointer relative ml-2 transition-transform",
                  isActive && "scale-[1.03]"
                )}
                onClick={() => setSelectedIdx(idx)}
                tabIndex={0}
                aria-selected={isActive}
              >
                <span
                  className={cn(
                    "absolute -left-4 top-4 w-3.5 h-3.5 rounded-full ring-2 ring-background transition-all",
                    isActive
                      ? `bg-${accent} ring-2 ring-${accent}`
                      : "bg-muted-foreground"
                  )}
                  aria-hidden
                />
                <div
                  className={cn(
                    "rounded-xl border border-muted px-5 py-4 mb-1 bg-card shadow-sm",
                    isActive
                      ? "border-primary bg-background shadow-lg"
                      : "hover:border-primary/80 hover:bg-muted/70"
                  )}
                >
                  <div className="flex items-center gap-2 mb-1 text-xs text-muted-foreground">
                    <Icon className="w-4 h-4" />
                    <span>{item.period}</span>
                  </div>
                  <div className="font-bold text-lg font-inter mb-0.5 text-foreground">
                    {item.title}
                  </div>
                  <div className="text-sm flex items-center gap-2 text-muted-foreground whitespace-nowrap">
                    <MapPin className="w-3 h-3" />
                    {item.org}
                    {item.location && <span>• {item.location}</span>}
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
      {/* Details Card */}
      <div className="flex-1 w-full">
        <div className="rounded-2xl border border-muted px-7 py-6 bg-card shadow-lg h-full flex flex-col gap-4 min-h-[270px]">
          <div className="mb-1">
            <h3 className="text-xl font-bold font-inter text-foreground mb-1">
              {selected.title}
            </h3>
            <div className="text-muted-foreground text-sm flex flex-wrap items-center gap-2">
              <span>{selected.org}</span>
              {selected.location && (
                <>
                  <MapPin className="inline w-3 h-3" />
                  <span>{selected.location}</span>
                </>
              )}
              <span className="inline-flex items-center gap-1 ml-0.5">
                <Calendar className="w-3 h-3" />
                <span>{selected.period}</span>
              </span>
            </div>
          </div>
          <div className="text-muted-foreground text-base mb-0.5">
            {selected.description}
          </div>
          {selected.achievements && selected.achievements.length > 0 && (
            <div>
              <div className="font-semibold mb-1 flex gap-1 items-center text-foreground"><Award className="w-4 h-4" /> Key Achievements</div>
              <ul className="text-sm list-disc ml-5 text-muted-foreground space-y-0.5">
                {selected.achievements.map((ach, idx) => (
                  <li key={idx}>{ach}</li>
                ))}
              </ul>
            </div>
          )}
          {selected.techs && selected.techs.length > 0 && (
            <div>
              <div className="font-semibold mb-1">Technologies</div>
              <div className="flex flex-wrap gap-2">
                {selected.techs.map((tech, idx) => (
                  <span key={idx}
                      className="inline-block bg-muted px-3 py-1 rounded-full font-mono text-xs font-semibold text-foreground shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;
