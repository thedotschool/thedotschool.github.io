interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}

const sizeStyles = {
  sm: {
    the: "text-sm",
    dot: "w-2 h-2",
    school: "text-base",
  },
  md: {
    the: "text-lg",
    dot: "w-2.5 h-2.5",
    school: "text-xl",
  },
  lg: {
    the: "text-xl",
    dot: "w-3 h-3",
    school: "text-2xl",
  },
};

const Logo = ({ variant = "dark", size = "md" }: LogoProps) => {
  const sizes = sizeStyles[size];
  const textColor = variant === "light" ? "text-background" : "text-foreground";

  return (
    <div className="flex flex-col leading-none">
      {/* "The" in Caveat font */}
      <span 
        className={`${sizes.the} ${textColor} italic`}
        style={{ fontFamily: "'Caveat', cursive", fontWeight: 600 }}
      >
        The
      </span>
      {/* .school with solid dot */}
      <div className="flex items-center -mt-1">
        <span 
          className={`${sizes.dot} rounded-full bg-accent inline-block`}
          style={{ 
            boxShadow: '1px 2px 4px rgba(0,0,0,0.3)'
          }}
        />
        <span 
          className={`font-bold ${sizes.school} ${textColor} ml-0.5`}
          style={{ fontFamily: "'Lexend', sans-serif" }}
        >
          school
        </span>
      </div>
    </div>
  );
};

export default Logo;
