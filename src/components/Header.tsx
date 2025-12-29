import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex flex-col items-start leading-none"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <span className="text-[10px] font-body font-medium text-muted-foreground tracking-wide uppercase">
              The
            </span>
            <span className="text-xl font-heading font-bold text-foreground">
              <span className="text-primary">.</span>school
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("courses")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Courses
            </button>
            <button
              onClick={() => scrollToSection("scholarship")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Scholarship
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Testimonials
            </button>
            <Button size="sm" asChild>
              <a
                href="https://forms.gle/FYkPynguzYwhhHDz5"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply Now
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background">
            <div className="flex flex-col gap-2">
              <button
                onClick={() => scrollToSection("courses")}
                className="text-left py-3 px-4 text-foreground hover:bg-secondary rounded-lg transition-colors"
              >
                Courses
              </button>
              <button
                onClick={() => scrollToSection("scholarship")}
                className="text-left py-3 px-4 text-foreground hover:bg-secondary rounded-lg transition-colors"
              >
                Scholarship
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-left py-3 px-4 text-foreground hover:bg-secondary rounded-lg transition-colors"
              >
                Testimonials
              </button>
              <Button className="mt-2" asChild>
                <a
                  href="https://forms.gle/FYkPynguzYwhhHDz5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply Now
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
