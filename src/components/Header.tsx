import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";

const FORM_LINK = "https://forms.gle/FYkPynguzYwhhHDz5";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md shadow-soft py-3" 
          : "bg-primary/80 backdrop-blur-sm py-5"
      }`}
    >
      <div className="container">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#" 
            className="flex items-center gap-2 group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <Logo variant={isScrolled ? "dark" : "light"} size="md" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection("about")}
              className={`text-sm font-medium transition-colors ${
                isScrolled 
                  ? "text-foreground hover:text-primary" 
                  : "text-primary-foreground/90 hover:text-primary-foreground"
              }`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("courses")}
              className={`text-sm font-medium transition-colors ${
                isScrolled 
                  ? "text-foreground hover:text-primary" 
                  : "text-primary-foreground/90 hover:text-primary-foreground"
              }`}
            >
              Courses
            </button>
            <button 
              onClick={() => scrollToSection("testimonials")}
              className={`text-sm font-medium transition-colors ${
                isScrolled 
                  ? "text-foreground hover:text-primary" 
                  : "text-primary-foreground/90 hover:text-primary-foreground"
              }`}
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection("scholarship")}
              className={`text-sm font-medium transition-colors ${
                isScrolled 
                  ? "text-foreground hover:text-primary" 
                  : "text-primary-foreground/90 hover:text-primary-foreground"
              }`}
            >
              Scholarship
            </button>
            <Button 
              variant={isScrolled ? "default" : "hero"}
              size="sm"
              asChild
            >
              <a 
                href={FORM_LINK}
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
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled 
                ? "text-foreground hover:bg-muted" 
                : "text-primary-foreground hover:bg-primary-foreground/10"
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 p-4 rounded-xl bg-card border border-border shadow-elevated animate-scale-in">
            <div className="flex flex-col gap-2">
              <button 
                onClick={() => scrollToSection("about")}
                className="text-left py-3 px-4 rounded-lg text-foreground hover:bg-muted transition-colors font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("courses")}
                className="text-left py-3 px-4 rounded-lg text-foreground hover:bg-muted transition-colors font-medium"
              >
                Courses
              </button>
              <button 
                onClick={() => scrollToSection("testimonials")}
                className="text-left py-3 px-4 rounded-lg text-foreground hover:bg-muted transition-colors font-medium"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection("scholarship")}
                className="text-left py-3 px-4 rounded-lg text-foreground hover:bg-muted transition-colors font-medium"
              >
                Scholarship
              </button>
              <Button 
                variant="default"
                className="mt-2"
                asChild
              >
                <a 
                  href={FORM_LINK}
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
