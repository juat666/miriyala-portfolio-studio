
import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface BlogData {
  title: string;
  summary: string;
  tags: string[];
  image: string;
  date: string;
  url?: string;
}

interface BlogCardProps {
  blog: BlogData;
}

const SUMMARY_LIMIT = 150; // Characters

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  const [expanded, setExpanded] = useState(false);

  const needsTruncation = blog.summary.length > SUMMARY_LIMIT;
  const displaySummary = expanded || !needsTruncation
    ? blog.summary
    : blog.summary.slice(0, SUMMARY_LIMIT) + "…";

  return (
    <Card className="transition-shadow hover:shadow-lg bg-card animate-fade-in flex flex-col h-full">
      <img
        src={blog.image}
        alt={blog.title}
        className="rounded-t-lg w-full h-40 object-cover"
        loading="lazy"
      />
      <CardHeader>
        <CardTitle className="font-playfair text-xl">{blog.title}</CardTitle>
        <CardDescription>{blog.date}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <p className="mb-2 text-sm font-inter text-muted-foreground">
          {displaySummary}
          {needsTruncation && (
            <button
              className="ml-1 text-primary underline font-medium text-xs"
              type="button"
              onClick={() => setExpanded((ex) => !ex)}
            >
              {expanded ? "Show Less" : "Read More"}
            </button>
          )}
        </p>
        <div className="flex flex-wrap gap-1 mb-4">
          {blog.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-inter text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        {blog.url && (
          <a
            href={blog.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto underline text-primary text-sm font-inter transition-colors hover:text-primary/80"
          >
            Read more
          </a>
        )}
      </CardContent>
    </Card>
  );
};

export default BlogCard;

