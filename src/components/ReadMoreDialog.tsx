
import React from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface ReadMoreDialogProps {
  url: string;
  trigger: React.ReactNode;
}

const ReadMoreDialog: React.FC<ReadMoreDialogProps> = ({ url, trigger }) => {
  // We use a ref to close the dialog when Continue is clicked
  const [open, setOpen] = React.useState(false);

  const handleContinue = () => {
    window.open(url, "_blank", "noopener,noreferrer");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {React.cloneElement(trigger as React.ReactElement, { onClick: () => setOpen(true) })}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Continue to full blog post?</DialogTitle>
        </DialogHeader>
        <div className="text-muted-foreground text-sm py-2">
          You are about to leave this site and open the blog post in a new tab.
        </div>
        <DialogFooter>
          <Button variant="secondary" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button variant="default" onClick={handleContinue}>
            Continue
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ReadMoreDialog;

