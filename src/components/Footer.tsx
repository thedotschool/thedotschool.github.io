import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground py-10">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="mb-4">
            <Logo variant="light" />
          </div>

          {/* Tagline */}
          <p className="text-background/70 text-sm mb-6">
            dotSchool Africa — Building practical software engineers.
          </p>

          {/* Minimal divider */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-background/20" />
            <div className="w-1.5 h-1.5 rounded-full bg-background/30" />
            <div className="h-px w-8 bg-background/20" />
          </div>

          {/* Copyright */}
          <p className="text-xs text-background/50">
            © {currentYear} dotSchool. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
