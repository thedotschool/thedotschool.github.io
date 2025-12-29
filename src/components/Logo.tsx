interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}

const sizeStyles = {
  sm: {
    the: "text-[9px]",
    dot: "text-2xl",
    school: "text-base",
    container: "gap-0",
  },
  md: {
    the: "text-[10px]",
    dot: "text-3xl",
    school: "text-lg",
    container: "gap-0",
  },
  lg: {
    the: "text-xs",
    dot: "text-4xl",
    school: "text-xl",
    container: "gap-0",
  },
};

const Logo = ({ variant = "dark", size = "md" }: LogoProps) => {
  const sizes = sizeStyles[size];
  const textColor = variant === "light" ? "text-primary-foreground" : "text-foreground";
  const dotColor = "text-accent";

  return (
    <div className={`flex items-end leading-none ${sizes.container}`}>
      {/* "the" positioned elegantly */}
      <div className="flex flex-col items-end mr-0.5">
        <span 
          className={`italic tracking-wide ${sizes.the} ${textColor} opacity-60`}
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
        >
          the
        </span>
      </div>
      {/* Main logo: .school */}
      <div className="flex items-baseline">
        <span 
          className={`font-black ${sizes.dot} ${dotColor} leading-none`}
          style={{ 
            fontFamily: "'Outfit', sans-serif",
            textShadow: '1px 1px 0 hsl(var(--primary))'
          }}
        >
          .
        </span>
        <span 
          className={`font-bold tracking-tight ${sizes.school} ${textColor}`}
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          school
        </span>
      </div>
    </div>
  );
};

export default Logo;
