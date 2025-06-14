
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
    <nav className="bg-background border-b border-muted-foreground/10 sticky top-0 z-20 w-full shadow-sm">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        {/* Brand */}
        <Link
          to="/"
          className="text-2xl md:text-2xl font-playfair font-bold tracking-tight hover:opacity-90 whitespace-nowrap transition-colors"
          style={{ letterSpacing: "0.01em" }}
        >
          Kundhan Miriyala
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-5">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`relative nav-anim cursor-pointer transition-transform duration-150 font-inter font-medium px-2 py-1
                ${
                  location.pathname === item.path
                    ? "text-primary font-semibold after:w-full"
                    : "text-muted-foreground hover:text-primary/90"
                }
                after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-primary after:rounded-full after:w-0 after:transition-all after:duration-200 hover:after:w-full
              `}
              style={{ outline: "none" }}
              tabIndex={0}
              aria-current={location.pathname === item.path ? "page" : undefined}
            >
              {item.name}
            </Link>
          ))}
        </div>
        {/* Mobile Burger */}
        <button
          className="md:hidden p-2 rounded hover:bg-muted focus:outline-none transition-colors active:scale-95"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-background border-b border-border px-4 py-2 pb-4 animate-fade-in absolute w-full left-0 top-16 z-30 shadow-lg">
          <div className="flex flex-col gap-2 items-start">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`w-full font-inter text-base px-2 py-3 transition-colors rounded hover:bg-muted focus:bg-accent focus:text-accent-foreground ${
                  location.pathname === item.path
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-primary"
                }`}
                style={{
                  transition: "background 0.17s, color 0.17s, transform 0.13s",
                }}
                tabIndex={0}
                aria-current={location.pathname === item.path ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
      <style>{`
        .nav-anim {
          cursor: pointer;
        }
        .nav-anim:active {
          transform: scale(0.96);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;

