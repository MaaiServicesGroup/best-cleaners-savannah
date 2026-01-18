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
  
  return (
    <Component
      className={cn(
        "font-display font-bold text-charcoal leading-tight",
        sizeClass,
        balance && "text-balance",
        className
      )}
    >
      {children}
    </Component>
  );
}

// Subheading component for taglines
interface SubheadingProps {
  className?: string;
  children: React.ReactNode;
}

export function Subheading({ className, children }: SubheadingProps) {
  return (
    <p
      className={cn(
        "font-body font-medium text-muted text-lg md:text-xl",
        className
      )}
    >
      {children}
    </p>
  );
}
