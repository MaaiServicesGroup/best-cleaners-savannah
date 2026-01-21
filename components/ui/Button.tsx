import { cn } from "@/lib/utils";
import Link from "next/link";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
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
      "cursor-pointer border-2 rounded-md",
      "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-heritage-blue-soft focus-visible:ring-offset-2"
    );
    
    // Variant styles - softer colors, motion handled by btn-premium
    const variants = {
      primary: "bg-charcoal text-clean-white border-charcoal hover:bg-charcoal-soft hover:border-charcoal-soft",
      secondary: "bg-heritage-blue-soft text-clean-white border-heritage-blue-soft hover:bg-heritage-blue hover:border-heritage-blue",
      outline: "bg-transparent text-charcoal border-border hover:bg-charcoal hover:text-clean-white hover:border-charcoal",
      ghost: "bg-transparent text-charcoal border-transparent hover:bg-warm-cream",
    };
    
    const sizes = {
      sm: "px-4 py-2 text-xs rounded-md",
      md: "px-6 py-3 text-sm rounded-md",
      lg: "px-8 py-4 text-base rounded-md",
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
