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
    <div className={`flex flex-col items-start leading-none ${sizes.container}`}>
      {/* "the" in elegant italic script */}
      <span 
        className={`italic tracking-widest ${sizes.the} ${textColor} opacity-70 ml-0.5`}
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        the
      </span>
      {/* Main logo: .school */}
      <div className="flex items-baseline -mt-0.5">
        <span 
          className={`font-black ${sizes.dot} ${dotColor} leading-none`}
          style={{ 
            fontFamily: "'Outfit', sans-serif",
            textShadow: '2px 2px 0 hsl(var(--primary))'
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
