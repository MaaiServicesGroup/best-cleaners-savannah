import Link from "next/link";
import { Container } from "@/components/layout";

interface SameDayBannerProps {
  variant?: "light" | "dark" | "accent";
}

export function SameDayBanner({ variant = "accent" }: SameDayBannerProps) {
  const variants = {
    light: "bg-warm-cream border-y border-border",
    dark: "bg-charcoal text-clean-white",
    accent: "bg-heritage-blue text-clean-white",
  };

  const textVariants = {
    light: "text-charcoal",
    dark: "text-clean-white",
    accent: "text-clean-white",
  };

  const subtextVariants = {
    light: "text-charcoal-soft",
    dark: "text-clean-white/80",
    accent: "text-clean-white/90",
  };

  const linkVariants = {
    light: "text-heritage-blue hover:text-heritage-blue/80",
    dark: "text-clean-white/90 hover:text-clean-white underline underline-offset-2",
    accent: "text-clean-white/90 hover:text-clean-white underline underline-offset-2",
  };

  return (
    <section className={`py-4 ${variants[variant]}`}>
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center sm:text-left">
          {/* Clock Icon */}
          <div className="flex items-center gap-2">
            <svg 
              className={`w-6 h-6 ${textVariants[variant]}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
            <span className={`font-display font-bold text-lg ${textVariants[variant]}`}>
              Same-Day Service
            </span>
          </div>

          {/* Message */}
          <div className="flex items-center gap-2">
            <span className={`font-medium ${subtextVariants[variant]}`}>
              In by 9am, Out by 5pm
            </span>
            <span className={`text-sm ${subtextVariants[variant]}`}>
              (Waters Ave Location)
            </span>
          </div>

          {/* Link */}
          <Link 
            href="/best-cleaners-savannah-locations/" 
            className={`text-sm font-medium transition-colors ${linkVariants[variant]}`}
          >
            View Hours & Locations →
          </Link>
        </div>
      </Container>
    </section>
  );
}
