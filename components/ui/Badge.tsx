import { cn } from "@/lib/utils";

interface BadgeProps {
  variant?: "heritage" | "red" | "muted" | "light";
  className?: string;
  children: React.ReactNode;
}

export function Badge({ variant = "heritage", className, children }: BadgeProps) {
  const variants = {
    heritage: "text-heritage-blue-soft bg-heritage-blue-soft/8 border-heritage-blue-soft/30",
    red: "text-best-red-soft bg-best-red-soft/8 border-best-red-soft/30",
    muted: "text-muted bg-muted/8 border-muted/30",
    light: "text-clean-white bg-clean-white/15 border-clean-white/50",
  };
  
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1.5 text-xs font-semibold uppercase tracking-widest border rounded",
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
