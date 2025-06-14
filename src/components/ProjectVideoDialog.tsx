
import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface ProjectVideoDialogProps {
  videoUrl: string | undefined;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  projectName: string;
}

const ProjectVideoDialog: React.FC<ProjectVideoDialogProps> = ({
  videoUrl,
  open,
  onOpenChange,
  projectName,
}) => {
  if (!videoUrl) return null;
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0 overflow-hidden max-w-2xl w-full aspect-video bg-black">
        <iframe
          className="w-full h-[360px] sm:h-[440px] md:h-[500px] xl:h-[600px] rounded"
          src={videoUrl}
          title={`Project demo video for ${projectName}`}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </DialogContent>
    </Dialog>
  );
};

export default ProjectVideoDialog;
