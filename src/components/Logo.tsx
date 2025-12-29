interface LogoProps {
  className?: string;
  size?: "sm" | "default";
}

const Logo = ({ className = "", size = "default" }: LogoProps) => {
  const textSize = size === "sm" ? "text-lg" : "text-xl";
  const dotSize = size === "sm" ? "w-1.5 h-1.5" : "w-2 h-2";
  
  return (
    <div className={`inline-flex items-baseline ${className}`}>
      <span className={`${textSize} font-semibold tracking-tight text-foreground`}>
        The dot
      </span>
      <span className="relative">
        {/* Dot positioned above 'school' */}
        <span 
          className={`absolute ${dotSize} rounded-full bg-primary`}
          style={{ 
            top: size === "sm" ? "-8px" : "-10px", 
            left: "50%", 
            transform: "translateX(-50%)" 
          }}
        />
        <span className={`${textSize} font-semibold tracking-tight text-foreground`}>
          School
        </span>
      </span>
    </div>
  );
};

export default Logo;
