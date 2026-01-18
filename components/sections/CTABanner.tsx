import { Container } from "@/components/layout";
import { Heading, Button } from "@/components/ui";

interface CTABannerProps {
  title: string;
  description?: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  variant?: "default" | "dark" | "red";
}

export function CTABanner({
  title,
  description,
  primaryCta,
  secondaryCta,
  variant = "default",
}: CTABannerProps) {
  const variants = {
    default: "bg-heritage-blue text-clean-white",
    dark: "bg-charcoal text-clean-white",
    red: "bg-best-red text-clean-white",
  };

  return (
    <section className={`py-16 md:py-20 ${variants[variant]}`}>
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-2xl">
            <Heading as="h2" size="md" className="text-clean-white mb-4">
              {title}
            </Heading>
            {description && (
              <p className="text-clean-white/80 text-lg">
                {description}
              </p>
            )}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Button
              href={primaryCta.href}
              variant={variant === "red" ? "outline" : "primary"}
              className={variant === "red" ? "border-clean-white text-clean-white hover:bg-clean-white hover:text-best-red" : ""}
            >
              {primaryCta.text}
            </Button>
            {secondaryCta && (
              <Button
                href={secondaryCta.href}
                variant="outline"
                className="border-clean-white text-clean-white hover:bg-clean-white hover:text-charcoal"
              >
                {secondaryCta.text}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

// Softer CTA for within content
interface SoftCTAProps {
  title: string;
  description?: string;
  cta: {
    text: string;
    href: string;
  };
}

export function SoftCTA({ title, description, cta }: SoftCTAProps) {
  return (
    <div className="bg-warm-cream border border-border p-8 md:p-12 text-center">
      <h3 className="font-display text-2xl md:text-3xl font-semibold text-charcoal mb-4">
        {title}
      </h3>
      {description && (
        <p className="text-muted max-w-xl mx-auto mb-6">
          {description}
        </p>
      )}
      <Button href={cta.href} variant="secondary">
        {cta.text}
      </Button>
    </div>
  );
}
