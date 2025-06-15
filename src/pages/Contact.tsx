
import Navbar from "@/components/Navbar";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>();

  const onSubmit = (data: ContactFormValues) => {
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
      duration: 3500,
    });
    reset();
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <section className="max-w-lg w-full mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold font-playfair mb-2 text-primary text-center">Contact</h1>
          <p className="text-lg text-muted-foreground mb-7 font-inter text-center">
            Want to get in touch, collaborate, or discuss a project? Fill the form below or connect via email/socials!
          </p>
          <form
            className="space-y-5"
            onSubmit={handleSubmit(onSubmit)}
            autoComplete="off"
          >
            <div>
              <label className="block text-sm font-medium mb-1 font-inter" htmlFor="name">
                Name
              </label>
              <Input
                id="name"
                placeholder="Your name"
                {...register("name", { required: "Name is required." })}
                disabled={isSubmitting}
              />
              {errors.name && (
                <span className="text-xs text-destructive font-inter">{errors.name.message}</span>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 font-inter" htmlFor="email">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="you@email.com"
                {...register("email", {
                  required: "Email is required.",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Enter a valid email address.",
                  },
                })}
                disabled={isSubmitting}
              />
              {errors.email && (
                <span className="text-xs text-destructive font-inter">{errors.email.message}</span>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 font-inter" htmlFor="message">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Your message"
                rows={5}
                {...register("message", { required: "Message is required." })}
                disabled={isSubmitting}
              />
              {errors.message && (
                <span className="text-xs text-destructive font-inter">{errors.message.message}</span>
              )}
            </div>
            <Button type="submit" className="w-full font-inter" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
          <div className="text-center mt-7 text-muted-foreground font-inter text-sm">
            Or email:{" "}
            <a href="mailto:kundhan.miriyala@gmail.com" className="text-primary underline">
              kundhan.miriyala@gmail.com
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
