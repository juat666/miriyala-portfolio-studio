
import React from "react";
import { Briefcase, MapPin, Calendar, Award } from "lucide-react";

export interface WorkExperienceItemProps {
  title: string;
  org: string;
  location?: string;
  period: string;
  description: string;
  achievements?: string[];
  techs?: string[];
}

const WorkExperienceItem: React.FC<WorkExperienceItemProps> = ({
  title,
  org,
  location,
  period,
  description,
  achievements,
  techs,
}) => (
  <div className="rounded-xl border border-muted px-5 py-4 mb-4 bg-card shadow-sm">
    <div className="flex items-center gap-2 mb-1 text-xs text-muted-foreground">
      <Briefcase className="w-4 h-4" />
      <span>{period}</span>
    </div>
    <div className="font-bold text-lg font-inter mb-0.5 text-foreground">{title}</div>
    <div className="text-sm flex items-center gap-2 text-muted-foreground whitespace-nowrap">
      <MapPin className="w-3 h-3" />
      {org}
      {location && <span>• {location}</span>}
    </div>
    <div className="text-muted-foreground text-base my-2">{description}</div>
    {achievements && achievements.length > 0 && (
      <div className="mb-1">
        <div className="font-semibold flex gap-1 items-center text-foreground">
          <Award className="w-4 h-4" /> Key Achievements
        </div>
        <ul className="text-sm list-disc ml-5 text-muted-foreground space-y-0.5">
          {achievements.map((ach, idx) => (
            <li key={idx}>{ach}</li>
          ))}
        </ul>
      </div>
    )}
    {techs && techs.length > 0 && (
      <div>
        <div className="font-semibold mb-1">Technologies</div>
        <div className="flex flex-wrap gap-2">
          {techs.map((tech, idx) => (
            <span
              key={idx}
              className="inline-block bg-muted px-3 py-1 rounded-full font-mono text-xs font-semibold text-foreground shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    )}
  </div>
);

export default WorkExperienceItem;
