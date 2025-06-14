
import Navbar from "@/components/Navbar";

const Contact = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <Navbar />
    <main className="flex-1 flex items-center justify-center px-4 py-12">
      <section className="max-w-lg w-full mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold font-playfair mb-2 text-primary">Contact</h1>
        <p className="text-lg text-muted-foreground mb-5 font-inter">
          Want to get in touch, collaborate, or discuss a project? Reach out to me via email or connect on social platforms linked below!
        </p>
        <div className="mt-4 flex flex-col items-center gap-2 font-inter">
          <span>Email: <a href="mailto:kundhan.miriyala@gmail.com" className="text-primary underline">kundhan.miriyala@gmail.com</a></span>
          {/* Add social links or a contact form here in future */}
        </div>
      </section>
    </main>
  </div>
);

export default Contact;
