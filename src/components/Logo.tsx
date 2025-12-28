interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
  showText?: boolean;
}

const Logo = ({ variant = "dark", className = "", showText = true }: LogoProps) => {
  const isDark = variant === "dark";
  
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Logo Mark - Tech-inspired dots/nodes design */}
      <div className="relative">
        <svg 
          width="36" 
          height="36" 
          viewBox="0 0 36 36" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 group-hover:scale-105"
        >
          {/* Main dot */}
          <circle 
            cx="18" 
            cy="18" 
            r="6" 
            className={isDark ? "fill-primary" : "fill-primary-foreground"}
          />
          {/* Connection nodes */}
          <circle 
            cx="6" 
            cy="18" 
            r="3" 
            className={isDark ? "fill-secondary" : "fill-secondary/80"}
          />
          <circle 
            cx="30" 
            cy="18" 
            r="3" 
            className={isDark ? "fill-secondary" : "fill-secondary/80"}
          />
          <circle 
            cx="18" 
            cy="6" 
            r="3" 
            className={isDark ? "fill-accent" : "fill-accent"}
          />
          <circle 
            cx="18" 
            cy="30" 
            r="3" 
            className={isDark ? "fill-accent" : "fill-accent"}
          />
          {/* Connection lines */}
          <line 
            x1="12" 
            y1="18" 
            x2="9" 
            y2="18" 
            strokeWidth="1.5" 
            className={isDark ? "stroke-muted-foreground/30" : "stroke-primary-foreground/30"}
          />
          <line 
            x1="24" 
            y1="18" 
            x2="27" 
            y2="18" 
            strokeWidth="1.5" 
            className={isDark ? "stroke-muted-foreground/30" : "stroke-primary-foreground/30"}
          />
          <line 
            x1="18" 
            y1="12" 
            x2="18" 
            y2="9" 
            strokeWidth="1.5" 
            className={isDark ? "stroke-muted-foreground/30" : "stroke-primary-foreground/30"}
          />
          <line 
            x1="18" 
            y1="24" 
            x2="18" 
            y2="27" 
            strokeWidth="1.5" 
            className={isDark ? "stroke-muted-foreground/30" : "stroke-primary-foreground/30"}
          />
        </svg>
      </div>
      
      {/* Text */}
      {showText && (
        <span className={`text-xl font-heading font-bold tracking-tight ${
          isDark ? "text-foreground" : "text-primary-foreground"
        }`}>
          <span className={isDark ? "text-primary" : "text-primary-foreground"}>dot</span>
          <span className={isDark ? "text-foreground" : "text-primary-foreground"}>School</span>
        </span>
      )}
    </div>
  );
};

export default Logo;
