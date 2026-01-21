import { cn } from "@/lib/utils";

interface CardProps {
  className?: string;
  children: React.ReactNode;
  hover?: boolean;
}

export function Card({ className, children, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "bg-clean-white p-8 rounded-lg",
        // Use premium card styles from globals.css for refined hover effects
        hover ? "card-premium" : "border border-border rounded-lg",
        className
      )}
    >
      {children}
    </div>
  );
}

interface CardHeaderProps {
  className?: string;
  children: React.ReactNode;
}

export function CardHeader({ className, children }: CardHeaderProps) {
  return (
    <div className={cn("mb-4", className)}>
      {children}
    </div>
  );
}

interface CardTitleProps {
  className?: string;
  children: React.ReactNode;
  as?: "h2" | "h3" | "h4";
}

export function CardTitle({ className, children, as: Component = "h3" }: CardTitleProps) {
  return (
    <Component className={cn("font-display font-semibold text-charcoal", className)}>
      {children}
    </Component>
  );
}

interface CardDescriptionProps {
  className?: string;
  children: React.ReactNode;
}

export function CardDescription({ className, children }: CardDescriptionProps) {
  return (
    <p className={cn("text-muted text-sm mt-1", className)}>
      {children}
    </p>
  );
}

interface CardContentProps {
  className?: string;
  children: React.ReactNode;
}

export function CardContent({ className, children }: CardContentProps) {
  return (
    <div className={cn("", className)}>
      {children}
    </div>
  );
}

interface CardFooterProps {
  className?: string;
  children: React.ReactNode;
}

export function CardFooter({ className, children }: CardFooterProps) {
  return (
    <div className={cn("mt-6 pt-4 border-t border-border", className)}>
      {children}
    </div>
  );
}
