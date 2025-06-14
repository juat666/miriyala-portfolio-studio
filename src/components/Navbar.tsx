
import React from "react";
import { Link } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => (
  <nav className="bg-background border-b border-muted-foreground/10 sticky top-0 z-20">
    <div className="container mx-auto px-4 flex h-16 items-center justify-between">
      <Link to="/" className="text-xl font-bold tracking-tight hover:opacity-80">
        Kundhan Miriyala
      </Link>
      <div className="flex gap-5">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="text-muted-foreground/90 hover:text-primary transition-colors font-medium"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  </nav>
);

export default Navbar;
