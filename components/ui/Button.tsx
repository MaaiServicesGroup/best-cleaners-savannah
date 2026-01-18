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
  ({ className, variant = "primary", size = "md", href, children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center gap-2 font-montserrat font-semibold uppercase tracking-wider transition-all duration-250 cursor-pointer border-2 disabled:opacity-50 disabled:cursor-not-allowed";
    
    const variants = {
      primary: "bg-best-red text-clean-white border-best-red hover:bg-[#8f0e16] hover:border-[#8f0e16]",
      secondary: "bg-heritage-blue text-clean-white border-heritage-blue hover:bg-[#243875] hover:border-[#243875]",
      outline: "bg-transparent text-charcoal border-charcoal hover:bg-charcoal hover:text-clean-white",
      ghost: "bg-transparent text-charcoal border-transparent hover:bg-warm-cream",
    };
    
    const sizes = {
      sm: "px-4 py-2 text-xs",
      md: "px-6 py-3 text-sm",
      lg: "px-8 py-4 text-base",
    };
    
    const classes = cn(baseStyles, variants[variant], sizes[size], className);
    
    if (href) {
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }
    
    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
