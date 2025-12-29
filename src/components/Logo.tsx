interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}

const sizeStyles = {
  sm: {
    the: "text-[10px]",
    dot: "text-xl",
    school: "text-lg",
  },
  md: {
    the: "text-xs",
    dot: "text-2xl",
    school: "text-xl",
  },
  lg: {
    the: "text-sm",
    dot: "text-3xl",
    school: "text-2xl",
  },
};

const Logo = ({ variant = "dark", size = "md" }: LogoProps) => {
  const sizes = sizeStyles[size];
  const textColor = variant === "light" ? "text-primary-foreground" : "text-foreground";
  const dotColor = "text-accent";

  return (
    <div className="flex flex-col items-start leading-none">
      <span 
        className={`font-logo italic tracking-wide ${sizes.the} ${textColor} opacity-80`}
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        The
      </span>
      <div className="flex items-baseline -mt-1">
        <span className={`font-heading font-bold ${sizes.dot} ${dotColor}`}>.</span>
        <span className={`font-heading font-bold ${sizes.school} ${textColor}`}>school</span>
      </div>
    </div>
  );
};

export default Logo;
