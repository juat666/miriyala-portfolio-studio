
import React from "react";
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

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
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
        <p className="mb-3 text-sm font-inter text-muted-foreground">{blog.summary}</p>
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
