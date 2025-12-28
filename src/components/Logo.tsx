interface LogoProps {
  className?: string;
}

const Logo = ({ className = "" }: LogoProps) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Dot above */}
      <div className="w-2 h-2 rounded-full bg-foreground mb-1" />
      {/* Text with "dot" emphasized */}
      <span className="text-lg font-semibold tracking-tight text-foreground">
        <span className="font-bold">dot</span>School
      </span>
    </div>
  );
};

export default Logo;
