
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ContactCTA: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full mt-16 flex flex-col items-center px-4">
      <div className="max-w-xl w-full bg-muted rounded-lg p-8 shadow flex flex-col items-center gap-4 text-center">
        <h2 className="text-2xl font-bold font-playfair text-primary">
          Interested in working together? Let's discuss your next project.
        </h2>
        <Button
          size="lg"
          className="mt-2 font-inter px-8 py-3 text-base"
          onClick={() => navigate("/contact")}
        >
          Get In Touch
        </Button>
      </div>
    </section>
  );
};

export default ContactCTA;
