import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <Logo />
          <p className="text-sm text-muted-foreground">
            © {currentYear} dotSchool. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
