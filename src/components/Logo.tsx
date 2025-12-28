interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
  showText?: boolean;
}

const Logo = ({ variant = "dark", className = "", showText = true }: LogoProps) => {
  const isDark = variant === "dark";
  
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Logo Mark - Minimal dot-based design */}
      <div className="relative">
        <svg 
          width="32" 
          height="32" 
          viewBox="0 0 32 32" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main central dot */}
          <circle 
            cx="16" 
            cy="16" 
            r="5" 
            className={isDark ? "fill-primary" : "fill-primary-foreground"}
          />
          {/* Surrounding dots - geometric grid */}
          <circle 
            cx="6" 
            cy="16" 
            r="2.5" 
            className={isDark ? "fill-primary/60" : "fill-primary-foreground/60"}
          />
          <circle 
            cx="26" 
            cy="16" 
            r="2.5" 
            className={isDark ? "fill-primary/60" : "fill-primary-foreground/60"}
          />
          <circle 
            cx="16" 
            cy="6" 
            r="2.5" 
            className={isDark ? "fill-primary/60" : "fill-primary-foreground/60"}
          />
          <circle 
            cx="16" 
            cy="26" 
            r="2.5" 
            className={isDark ? "fill-primary/60" : "fill-primary-foreground/60"}
          />
          {/* Connection lines */}
          <line 
            x1="11" y1="16" x2="8.5" y2="16" 
            strokeWidth="1" 
            className={isDark ? "stroke-border" : "stroke-primary-foreground/30"}
          />
          <line 
            x1="21" y1="16" x2="23.5" y2="16" 
            strokeWidth="1" 
            className={isDark ? "stroke-border" : "stroke-primary-foreground/30"}
          />
          <line 
            x1="16" y1="11" x2="16" y2="8.5" 
            strokeWidth="1" 
            className={isDark ? "stroke-border" : "stroke-primary-foreground/30"}
          />
          <line 
            x1="16" y1="21" x2="16" y2="23.5" 
            strokeWidth="1" 
            className={isDark ? "stroke-border" : "stroke-primary-foreground/30"}
          />
        </svg>
      </div>
      
      {/* Text */}
      {showText && (
        <span className={`text-lg font-heading font-bold tracking-tight ${
          isDark ? "text-foreground" : "text-primary-foreground"
        }`}>
          dot<span className={isDark ? "text-primary" : "text-primary-foreground"}>School</span>
        </span>
      )}
    </div>
  );
};

export default Logo;
