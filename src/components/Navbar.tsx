
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  React.useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className="bg-background border-b border-muted-foreground/10 sticky top-0 z-20 w-full">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <Link 
          to="/" 
          className="text-xl font-bold tracking-tight hover:opacity-80 whitespace-nowrap font-playfair"
        >
          Kundhan Miriyala
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-5">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`story-link hover-scale text-muted-foreground/90 hover:text-primary transition-colors font-medium font-inter ${
                location.pathname === item.path ? "text-primary font-semibold" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        {/* Mobile Burger */}
        <button
          className="md:hidden p-2 rounded hover:bg-muted focus:outline-none"
          aria-label="Open menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-background border-b border-border px-4 py-2 pb-4 animate-fade-in absolute w-full left-0 top-16 z-30 shadow-lg">
          <div className="flex flex-col gap-3 items-start">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`story-link hover-scale w-full py-2 text-base transition-colors font-inter ${
                  location.pathname === item.path
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
