import { cn } from "@/lib/utils";
import Link from "next/link";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "glass" | "glass-outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", href, children, onClick, ...props }, ref) => {
    // Base styles with premium motion class for lift/shadow/sheen effects
    const baseStyles = cn(
      "btn-premium", // Premium motion from globals.css
      "inline-flex items-center justify-center gap-2",
      "font-montserrat font-semibold uppercase tracking-wide",
      "cursor-pointer border rounded-lg",
      "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clean-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
    );
    
    // Variant styles - premium liquid glass aesthetic
    const variants = {
      primary: "btn-glass-primary bg-charcoal/95 text-clean-white border-charcoal/80 hover:bg-charcoal hover:border-charcoal",
      secondary: "bg-charcoal-soft/90 text-clean-white border-charcoal-soft/60 hover:bg-charcoal hover:border-charcoal",
      outline: "bg-transparent text-charcoal border-charcoal/30 hover:bg-charcoal hover:text-clean-white hover:border-charcoal",
      ghost: "bg-transparent text-charcoal border-transparent hover:bg-warm-cream",
      glass: "btn-glass bg-charcoal/90 backdrop-blur-sm text-clean-white border-clean-white/20 hover:bg-charcoal hover:border-clean-white/30",
      "glass-outline": "btn-glass-outline bg-clean-white/10 backdrop-blur-sm text-clean-white border-clean-white/40 hover:bg-clean-white/20 hover:border-clean-white/60",
    };
    
    const sizes = {
      sm: "px-5 py-2.5 text-xs",
      md: "px-6 py-3 text-sm",
      lg: "px-8 py-4 text-base",
    };
    
    const classes = cn(baseStyles, variants[variant], sizes[size], className);
    
    if (href) {
      return (
        <Link 
          href={href} 
          className={classes}
          onClick={onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
        >
          {children}
        </Link>
      );
    }
    
    return (
      <button ref={ref} className={classes} onClick={onClick} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
