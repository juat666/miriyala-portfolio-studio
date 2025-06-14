
import React from "react";
import BlogCard, { BlogData } from "./BlogCard";

interface BlogGridProps {
  blogs: BlogData[];
}

const BlogGrid: React.FC<BlogGridProps> = ({ blogs }) => {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => (
        <BlogCard key={blog.title} blog={blog} />
      ))}
    </div>
  );
};

export default BlogGrid;
