const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex flex-col items-start leading-none">
            <span className="text-[10px] font-body font-medium text-muted-foreground tracking-wide uppercase">
              The
            </span>
            <span className="text-xl font-heading font-bold text-foreground">
              <span className="text-primary">.</span>school
            </span>
          </div>

          {/* Tagline */}
          <p className="text-sm text-muted-foreground">
            Built for future software engineers
          </p>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} The dotSchool. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
