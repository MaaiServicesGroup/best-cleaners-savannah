"use client";

import { Container, Section } from "@/components/layout";
import { Heading, Subheading, Button } from "@/components/ui";
import { GoogleReviews, GoogleRatingBadge } from "./GoogleReviews";

interface TestimonialsProps {
  title?: string;
  subtitle?: string;
  /** Show embedded reviews preview (vs just the rating badge) */
  showReviewsPreview?: boolean;
  /** Number of reviews to show in preview */
  previewCount?: number;
}

/**
 * Testimonials section that displays live Google Reviews
 * Shows a rating badge and optionally a preview of reviews
 * Links to the full /reviews page
 */
export function Testimonials({ 
  title = "What Our Customers Say", 
  subtitle = "Real reviews from our customers, straight from Google.",
  showReviewsPreview = true,
  previewCount = 3
}: TestimonialsProps) {
  return (
    <Section bg="cream">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-12">
          <Heading as="h2" className="mb-4">
            {title}
          </Heading>
          <Subheading className="max-w-2xl mx-auto mb-6">
            {subtitle}
          </Subheading>
          
          {/* Google Rating Badge */}
          <div className="flex justify-center">
            <GoogleRatingBadge />
          </div>
        </div>

        {/* Reviews Preview */}
        {showReviewsPreview && (
          <div className="mb-12">
            <GoogleReviews maxItems={previewCount} />
          </div>
        )}

        {/* CTA to full reviews page */}
        <div className="text-center">
          <Button href="/reviews/" variant="outline">
            Read All Reviews
          </Button>
        </div>
      </Container>
    </Section>
  );
}

/**
 * Compact testimonials section with just the rating badge
 * Good for use in sidebars or footers
 */
export function TestimonialsBadge() {
  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-cream rounded-lg">
      <GoogleRatingBadge />
      <a 
        href="/reviews/" 
        className="text-sm text-heritage-blue hover:text-best-red transition-colors font-medium"
      >
        Read our reviews &rarr;
      </a>
    </div>
  );
}
