
import React from "react";

interface LoadMoreButtonProps {
  onClick: () => void;
  label: string;
}

const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({ onClick, label }) => (
  <div className="flex justify-center mt-8">
    <button
      className="bg-primary text-primary-foreground font-medium rounded px-7 py-2 transition hover:bg-primary/80"
      onClick={onClick}
    >
      {label}
    </button>
  </div>
);

export default LoadMoreButton;
