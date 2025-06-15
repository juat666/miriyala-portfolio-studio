
export interface BlogData {
  title: string;
  summary: string;
  tags: string[];
  image: string;
  date: string;
  url?: string;
  featured?: boolean;
}

export const blogs: BlogData[] = [
  {
    title: "Understanding Reinforcement Learning",
    summary:
      "A beginner’s dive into RL principles, value functions, and how agents learn from reward feedback. In this article, we break down the key aspects of RL and explore how algorithms adapt through exploration and exploitation, providing many practical examples and illustrations. By the end, you'll have a fundamental grasp on how machines improve decision-making over time.",
    tags: ["AI", "Reinforcement Learning", "Machine Learning"],
    image: "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=crop&w=600&q=80",
    date: "2024-06-10",
    url: "https://towardsdatascience.com/reinforcement-learning-demystified-1f686157d9f6",
    featured: true,
  },
  {
    title: "GPT in Product Design: Real-World Uses",
    summary:
      "How large language models are transforming app interfaces and business processes, with practical examples. Discover ways GPT is augmenting user research, automating wireframe generation, and powering new forms of prototyping that were nearly impossible before. The article explores successes and challenges from real case studies, giving you inspiration for your next AI-driven product.",
    tags: ["GPT", "Product Design", "OpenAI"],
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    date: "2024-05-28",
    url: "https://uxdesign.cc/how-gpt-3-is-redefining-product-design-b67f71c686f6",
    featured: false,
  },
  {
    title: "From Hackathon to Launch: Lessons Learned",
    summary:
      "Behind the scenes of shipping an MVP in 48 hours—including mistakes, pivots, and ultimate success. Read about the pressures of tight timelines, rapidly iterating based on feedback, and how our small team overcame seemingly impossible odds to deliver a working product. We distill what worked, what didn’t, and how to avoid common pitfalls in rapid prototyping and product launches.",
    tags: ["Startups", "Hackathon"],
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    date: "2024-04-13",
    url: "https://medium.com/swlh/launching-an-mvp-in-48-hours-3f8c1c3b80be",
    featured: false,
  }
];
