
import React from "react";
import BlogCard, { BlogData } from "./BlogCard";

interface HomeBlogGridProps {
  blogs: BlogData[]; // Now expecting blogs w/ possibly additional properties like 'featured'
}

const HomeBlogGrid: React.FC<HomeBlogGridProps> = ({ blogs }) => {
  // Only show blogs where featured == true
  const featuredBlogs = blogs.filter((blog: any) => blog.featured);

  if (featuredBlogs.length === 0) {
    return (
      <div className="w-full text-muted-foreground font-inter mt-6 text-center animate-fade-in">
        No featured blog posts yet.
      </div>
    );
  }

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-6">
      {featuredBlogs.map((blog) => (
        <BlogCard key={blog.title} blog={blog} />
      ))}
    </div>
  );
};

export default HomeBlogGrid;
