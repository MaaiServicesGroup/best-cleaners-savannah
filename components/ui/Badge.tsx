import { cn } from "@/lib/utils";

interface BadgeProps {
  variant?: "heritage" | "red" | "muted" | "light";
  className?: string;
  children: React.ReactNode;
}

export function Badge({ variant = "heritage", className, children }: BadgeProps) {
  const variants = {
    heritage: "text-heritage-blue bg-heritage-blue/10 border-heritage-blue",
    red: "text-best-red bg-best-red/10 border-best-red",
    muted: "text-muted bg-muted/10 border-muted",
    light: "text-clean-white bg-clean-white/15 border-clean-white/60",
  };
  
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1.5 text-xs font-semibold uppercase tracking-widest border",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

// Heritage badge specifically for "Since 1910"
interface HeritageBadgeProps {
  className?: string;
  variant?: "heritage" | "light";
}

export function HeritageBadge({ className, variant = "heritage" }: HeritageBadgeProps) {
  return (
    <Badge variant={variant} className={className}>
      <span className="mr-1">Est.</span> 1910
    </Badge>
  );
}
