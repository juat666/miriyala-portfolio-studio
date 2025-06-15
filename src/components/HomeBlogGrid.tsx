
import React from "react";
import BlogCard, { BlogData } from "./BlogCard";

interface HomeBlogGridProps {
  blogs: BlogData[];
}

const HomeBlogGrid: React.FC<HomeBlogGridProps> = ({ blogs }) => {
  // Show up to 3 most recent blog posts
  const displayedBlogs = blogs.slice(0, 3);
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-6">
      {displayedBlogs.map((blog) => (
        <BlogCard key={blog.title} blog={blog} />
      ))}
    </div>
  );
};

export default HomeBlogGrid;
