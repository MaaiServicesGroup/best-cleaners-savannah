import { cn } from "@/lib/utils";
import Link from "next/link";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "glass" | "glass-outline" | "burgundy";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", href, children, onClick, ...props }, ref) => {
    // Base styles
    const baseStyles = cn(
      "btn-premium",
      "inline-flex items-center justify-center gap-2",
      "font-semibold uppercase tracking-wide",
      "cursor-pointer rounded-lg",
      "transition-all duration-200",
      "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
    );
    
    // Primary CTAs: deep navy (heritage-blue) with white text
    const variants = {
      primary: "bg-heritage-blue border-2 border-heritage-blue hover:bg-heritage-blue-hover hover:border-heritage-blue-hover",
      secondary: "bg-heritage-blue-soft border-2 border-heritage-blue-soft hover:bg-heritage-blue hover:border-heritage-blue",
      outline: "bg-transparent border-2 border-heritage-blue hover:bg-heritage-blue",
      ghost: "bg-transparent border-2 border-transparent hover:bg-warm-cream hover:border-warm-cream",
      glass: "bg-heritage-blue/90 backdrop-blur-sm border-2 border-white/20 hover:bg-heritage-blue hover:border-white/40",
      "glass-outline": "bg-white/10 backdrop-blur-sm border-2 border-white/50 hover:bg-white/20 hover:border-white/70",
      burgundy: "bg-burgundy border-2 border-burgundy hover:bg-burgundy-hover hover:border-burgundy-hover",
    };
    
    const sizes = {
      sm: "px-5 py-2.5 text-xs",
      md: "px-6 py-3 text-sm",
      lg: "px-8 py-4 text-base",
    };
    
    // Determine text color - white for most variants, navy for ghost/outline default state
    const needsDarkText = variant === "ghost" || variant === "outline";
    const textColorStyle = needsDarkText ? { color: '#2F4699' } : { color: '#FFFFFF' };
    
    const classes = cn(baseStyles, variants[variant], sizes[size], className);
    
    if (href) {
      return (
        <Link 
          href={href} 
          className={classes}
          style={textColorStyle}
          onClick={onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
        >
          {children}
        </Link>
      );
    }
    
    return (
      <button ref={ref} className={classes} style={textColorStyle} onClick={onClick} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
