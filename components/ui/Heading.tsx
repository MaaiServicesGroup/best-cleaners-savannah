import { cn } from "@/lib/utils";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface HeadingProps {
  as?: HeadingLevel;
  size?: "xl" | "lg" | "md" | "sm";
  className?: string;
  children: React.ReactNode;
  balance?: boolean;
}

export function Heading({
  as: Component = "h2",
  size,
  className,
  children,
  balance = true,
}: HeadingProps) {
  // Default size based on heading level if not specified
  const defaultSizes: Record<HeadingLevel, string> = {
    h1: "text-4xl md:text-5xl lg:text-6xl",
    h2: "text-3xl md:text-4xl lg:text-5xl",
    h3: "text-2xl md:text-3xl",
    h4: "text-xl md:text-2xl",
    h5: "text-lg md:text-xl",
    h6: "text-base md:text-lg",
  };
  
  const sizeClasses = {
    xl: "text-4xl md:text-5xl lg:text-6xl",
    lg: "text-3xl md:text-4xl lg:text-5xl",
    md: "text-2xl md:text-3xl",
    sm: "text-xl md:text-2xl",
  };
  
  const sizeClass = size ? sizeClasses[size] : defaultSizes[Component];
  
  // Check if a text color class is provided in className to avoid override conflicts
  const hasTextColor = className?.includes("text-");
  
  return (
    <Component
      className={cn(
        "font-display font-bold leading-tight",
        !hasTextColor && "text-charcoal",
        sizeClass,
        balance && "text-balance",
        className
      )}
    >
      {children}
    </Component>
  );
}

// Subheading component for taglines - improved readability
interface SubheadingProps {
  className?: string;
  children: React.ReactNode;
}

export function Subheading({ className, children }: SubheadingProps) {
  return (
    <p
      className={cn(
        "font-body font-medium text-lg md:text-xl leading-relaxed tracking-wide",
        // Improved contrast - using charcoal-soft instead of muted for better readability
        "text-charcoal-soft",
        className
      )}
    >
      {children}
    </p>
  );
}
