import { cn } from "@/lib/utils";

interface BadgeProps {
  variant?: "heritage" | "red" | "muted" | "light";
  className?: string;
  children: React.ReactNode;
}

export function Badge({ variant = "heritage", className, children }: BadgeProps) {
  const variants = {
    heritage: "text-charcoal/80 bg-charcoal/5 border-charcoal/15",
    red: "text-charcoal/80 bg-charcoal/5 border-charcoal/15",
    muted: "text-charcoal/60 bg-charcoal/5 border-charcoal/10",
    light: "text-clean-white/90 bg-clean-white/10 border-clean-white/30",
  };
  
  return (
    <span
      className={cn(
        "inline-flex items-center px-4 py-2 text-xs font-semibold uppercase tracking-widest border rounded-lg backdrop-blur-sm",
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
