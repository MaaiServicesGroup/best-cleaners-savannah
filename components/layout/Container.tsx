import { cn } from "@/lib/utils";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
  size?: "default" | "narrow" | "wide";
}

export function Container({ className, children, size = "default" }: ContainerProps) {
  const sizes = {
    narrow: "max-w-3xl",
    default: "max-w-7xl",
    wide: "max-w-screen-2xl",
  };
  
  return (
    <div className={cn("w-full mx-auto px-4 sm:px-6 lg:px-8", sizes[size], className)}>
      {children}
    </div>
  );
}

// Section wrapper with padding
interface SectionProps {
  className?: string;
  children: React.ReactNode;
  bg?: "cream" | "white" | "charcoal" | "heritage-blue";
  padding?: "sm" | "md" | "lg";
  id?: string;
}

export function Section({ className, children, bg = "cream", padding = "md", id }: SectionProps) {
  const backgrounds = {
    cream: "bg-warm-cream",
    white: "bg-clean-white",
    charcoal: "bg-charcoal text-clean-white",
    "heritage-blue": "bg-heritage-blue text-clean-white",
  };
  
  const paddings = {
    sm: "py-12 md:py-16",
    md: "py-16 md:py-24",
    lg: "py-24 md:py-32",
  };
  
  return (
    <section id={id} className={cn(backgrounds[bg], paddings[padding], className)}>
      {children}
    </section>
  );
}
