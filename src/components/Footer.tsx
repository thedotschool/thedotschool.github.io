import { Code2 } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-12">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
              <Code2 className="w-5 h-5 text-accent" />
            </div>
            <span className="text-xl font-heading font-bold text-primary-foreground">
              TechSchool
            </span>
          </div>

          {/* Tagline */}
          <p className="text-primary-foreground/70 mb-6">
            Built for future software engineers
          </p>

          {/* Decorative divider */}
          <div className="flex items-center gap-2 mb-6">
            <div className="h-0.5 w-8 rounded-full bg-secondary/50" />
            <div className="h-0.5 w-3 rounded-full bg-accent/50" />
            <div className="h-0.5 w-8 rounded-full bg-primary-foreground/20" />
          </div>

          {/* Copyright */}
          <p className="text-sm text-primary-foreground/50">
            © {currentYear} TechSchool. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
