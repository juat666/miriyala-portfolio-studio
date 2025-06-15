
import React from "react";

interface Props {
  selectedTech: string | null;
  onClear: () => void;
}

const ProjectsStackMessage: React.FC<Props> = ({ selectedTech, onClear }) => (
  <div className="mb-6 px-4 py-2 bg-yellow-100 border-l-4 border-yellow-400 text-yellow-800 rounded font-inter text-sm flex items-center justify-between gap-4">
    <span>Too many tech stacks? Try narrowing your filter for a better experience.</span>
    {selectedTech && (
      <button
        className="ml-4 bg-yellow-200 hover:bg-yellow-300 text-yellow-900 px-3 py-1 rounded text-xs font-semibold transition"
        onClick={onClear}
        type="button"
      >
        Clear Filters
      </button>
    )}
  </div>
);

export default ProjectsStackMessage;
