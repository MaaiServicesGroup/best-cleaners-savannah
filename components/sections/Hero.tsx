import Image from "next/image";
import { Container } from "@/components/layout";
import { Button, HeritageBadge, Heading, Subheading } from "@/components/ui";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  showBadge?: boolean;
  backgroundImage?: string;
  variant?: "home" | "page";
}

export function Hero({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  showBadge = true,
  backgroundImage,
  variant = "home",
}: HeroProps) {
  const isHome = variant === "home";

  return (
    <section className={`relative ${isHome ? "py-24 md:py-32 lg:py-40" : "py-16 md:py-24"} overflow-hidden`}>
      {/* Background */}
      {backgroundImage ? (
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-charcoal/60" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-warm-cream via-clean-white to-warm-cream">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
            <div className="absolute top-20 right-20 w-64 h-64 border border-charcoal rounded-full" />
            <div className="absolute top-40 right-40 w-96 h-96 border border-charcoal rounded-full" />
            <div className="absolute bottom-20 right-10 w-48 h-48 border border-charcoal rounded-full" />
          </div>
        </div>
      )}

      <Container className="relative z-10">
        <div className={`${isHome ? "max-w-3xl" : "max-w-2xl"} ${backgroundImage ? "text-clean-white" : ""}`}>
          {showBadge && (
            <div className="mb-6 animate-fade-in stagger-1">
              <HeritageBadge />
            </div>
          )}

          {subtitle && (
            <p className={`text-sm uppercase tracking-widest font-semibold mb-4 animate-fade-in stagger-1 ${backgroundImage ? "text-clean-white/80" : "text-best-red"}`}>
              {subtitle}
            </p>
          )}

          <Heading
            as="h1"
            size={isHome ? "xl" : "lg"}
            className={`mb-6 animate-fade-in stagger-2 ${backgroundImage ? "text-clean-white" : ""}`}
          >
            {title}
          </Heading>

          {description && (
            <Subheading className={`mb-10 animate-fade-in stagger-3 ${backgroundImage ? "text-clean-white/90" : ""}`}>
              {description}
            </Subheading>
          )}

          {(primaryCta || secondaryCta) && (
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in stagger-4">
              {primaryCta && (
                <Button href={primaryCta.href} size="lg">
                  {primaryCta.text}
                </Button>
              )}
              {secondaryCta && (
                <Button href={secondaryCta.href} variant="outline" size="lg" className={backgroundImage ? "border-clean-white text-clean-white hover:bg-clean-white hover:text-charcoal" : ""}>
                  {secondaryCta.text}
                </Button>
              )}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

// Page-level hero for interior pages
interface PageHeroProps {
  title: string;
  description?: string;
  breadcrumb?: {
    label: string;
    href: string;
  }[];
}

export function PageHero({ title, description, breadcrumb }: PageHeroProps) {
  return (
    <section className="bg-clean-white border-b border-border py-12 md:py-16">
      <Container>
        {breadcrumb && breadcrumb.length > 0 && (
          <nav className="mb-4 text-sm">
            <ol className="flex items-center gap-2 text-muted">
              <li>
                <a href="/" className="hover:text-best-red transition-colors">Home</a>
              </li>
              {breadcrumb.map((item, i) => (
                <li key={item.href} className="flex items-center gap-2">
                  <span>/</span>
                  {i === breadcrumb.length - 1 ? (
                    <span className="text-charcoal">{item.label}</span>
                  ) : (
                    <a href={item.href} className="hover:text-best-red transition-colors">{item.label}</a>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <Heading as="h1" size="lg">
          {title}
        </Heading>
        {description && (
          <Subheading className="mt-4 max-w-2xl">
            {description}
          </Subheading>
        )}
      </Container>
    </section>
  );
}
