import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-12">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="mb-4">
            <Logo variant="light" />
          </div>

          {/* Tagline */}
          <p className="text-primary-foreground/80 mb-6">
            dotSchool Africa — Building practical software engineers.
          </p>

          {/* Decorative divider */}
          <div className="flex items-center gap-2 mb-6">
            <div className="h-0.5 w-8 rounded-full bg-secondary/50" />
            <div className="h-0.5 w-3 rounded-full bg-accent/50" />
            <div className="h-0.5 w-8 rounded-full bg-primary-foreground/20" />
          </div>

          {/* Copyright */}
          <p className="text-sm text-primary-foreground/60">
            © {currentYear} dotSchool. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
