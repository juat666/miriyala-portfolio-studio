
import Navbar from "@/components/Navbar";
import BlogGrid from "@/components/BlogGrid";

// Dummy blog data (replace/extend as needed)
const blogs = [
  {
    title: "Understanding Reinforcement Learning",
    summary: "A beginner’s dive into RL principles, value functions, and how agents learn from reward feedback.",
    tags: ["AI", "Reinforcement Learning", "Machine Learning"],
    image: "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=crop&w=600&q=80",
    date: "2024-06-10",
    url: "#",
  },
  {
    title: "GPT in Product Design: Real-World Uses",
    summary: "How large language models are transforming app interfaces and business processes, with practical examples.",
    tags: ["GPT", "Product Design", "OpenAI"],
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    date: "2024-05-28",
    url: "#",
  },
  {
    title: "From Hackathon to Launch: Lessons Learned",
    summary: "Behind the scenes of shipping an MVP in 48 hours—including mistakes, pivots, and ultimate success.",
    tags: ["Startups", "Hackathon"],
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    date: "2024-04-13",
    url: "#",
  }
  // Add more blogs here!
];

const Blog = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <Navbar />
    <main className="flex-1 flex items-center justify-center px-4 py-12">
      <section className="max-w-5xl w-full mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold font-playfair mb-2 text-primary">Blog</h1>
        <p className="text-lg text-muted-foreground mb-6 font-inter">
          Posts on AI, product design, coding, open source, and behind-the-scenes.<br />
          Browse recent articles below!
        </p>
        {/* Blog Cards Grid */}
        <BlogGrid blogs={blogs} />
        {/* No Blogs Message */}
        {blogs.length === 0 && (
          <div className="text-center text-muted-foreground font-inter mt-12 animate-fade-in">
            No blog posts found.
          </div>
        )}
      </section>
    </main>
  </div>
);

export default Blog;
