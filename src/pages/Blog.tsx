
import Navbar from "@/components/Navbar";

const Blog = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <Navbar />
    <main className="flex-1 flex items-center justify-center px-4 py-12">
      <section className="max-w-2xl w-full mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold font-playfair mb-2 text-primary">Blog</h1>
        <p className="text-lg text-muted-foreground mb-4 font-inter">
          Coming soon: technical write-ups, AI deep dives, and behind-the-scenes on recent projects. Stay tuned for upcoming posts!
        </p>
      </section>
    </main>
  </div>
);

export default Blog;
