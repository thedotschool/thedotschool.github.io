import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

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
          ? "bg-background/98 backdrop-blur-sm border-b border-border py-3" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <Logo variant={isScrolled ? "dark" : "light"} />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {["about", "courses", "scholarship", "faq"].map((section) => (
              <button 
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm font-medium transition-colors relative group ${
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full" />
              </button>
            ))}
            <Button 
              variant={isScrolled ? "default" : "heroOutline"}
              size="sm"
              asChild
            >
              <a 
                href="https://forms.google.com/your-form-link" 
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
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 p-4 rounded-lg bg-card border border-border shadow-card animate-scale-in">
            <div className="flex flex-col gap-1">
              {["about", "courses", "scholarship", "faq"].map((section) => (
                <button 
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-left py-3 px-4 rounded-lg text-foreground hover:bg-muted transition-colors font-medium"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
              <Button 
                variant="default"
                className="mt-3"
                asChild
              >
                <a 
                  href="https://forms.google.com/your-form-link" 
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
