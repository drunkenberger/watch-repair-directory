import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <nav className="h-16 border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        <Link to="/" className="text-xl font-serif font-medium">
          Watch Repair Finder
        </Link>
        <div className="flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location.pathname === link.href
                  ? "text-primary"
                  : "text-gray-600",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
