"use client";

import { useState } from "react";
import { Container, Section } from "@/components/layout";
import { Heading, Subheading, Card, Button } from "@/components/ui";
import { starRating } from "@/lib/utils";

// Placeholder testimonials - in production, these would come from Sanity or Google Reviews API
// Google Reviews integration: When API keys are available, replace with live data
const testimonials = [
  {
    id: "1",
    customerName: "Margaret S.",
    location: "Ardsley Park",
    quote: "I've been bringing my clothes here for over 20 years. The quality is consistently excellent, and the staff treats every garment like it's their own. True professionals.",
    rating: 5,
    source: "google" as const,
  },
  {
    id: "2",
    customerName: "Robert M.",
    location: "Historic District",
    quote: "Best Cleaners saved my grandfather's vintage suit that I thought was beyond repair. Their attention to detail and care for delicate fabrics is unmatched in Savannah.",
    rating: 5,
    source: "yelp" as const,
  },
  {
    id: "3",
    customerName: "Jennifer L.",
    location: "Pooler",
    quote: "The convenience and quality keep me coming back. Even living in Pooler, it's worth the trip. My work uniforms have never looked better.",
    rating: 5,
    source: "google" as const,
  },
  {
    id: "4",
    customerName: "David W.",
    location: "Midtown",
    quote: "As a business owner, I need my suits to look impeccable. Best Cleaners delivers every single time. Over a century of experience really shows in their work.",
    rating: 5,
    source: "direct" as const,
  },
  {
    id: "5",
    customerName: "Sarah K.",
    location: "Victorian District",
    quote: "They cleaned and preserved my wedding dress beautifully. It's now stored perfectly for my future daughter. Such a meaningful service.",
    rating: 5,
    source: "google" as const,
  },
  {
    id: "6",
    customerName: "Michael T.",
    location: "Georgetown",
    quote: "Fair prices, friendly staff, and exceptional results. This is how dry cleaning should be. A true Savannah institution.",
    rating: 5,
    source: "yelp" as const,
  },
];

const sourceIcons = {
  google: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  ),
  yelp: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#FF1A1A">
      <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.072 1.072 0 011.596-.206 9.194 9.194 0 011.67 4.711zm-6.063 2.547l4.98 1.528c.96.295 1.204 1.546.368 1.885a9.223 9.223 0 01-4.933.675c-.848-.095-1.195-1.14-.665-1.77l2.25-2.318zm-1.3-9.452l-.003-5.19a.5.5 0 00-.5-.499h-2.59a.5.5 0 00-.5.5v5.189c0 4.62 2.045 6.968 3.59 8.338a.672.672 0 00.95-.028l.948-.948a.672.672 0 00-.046-.977c-1.255-1.07-1.852-2.63-1.849-6.385z"/>
    </svg>
  ),
  facebook: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#1877F2">
      <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
    </svg>
  ),
  direct: (
    <svg className="w-5 h-5 text-charcoal" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
    </svg>
  ),
};

interface TestimonialsProps {
  title?: string;
  subtitle?: string;
  showAll?: boolean;
}

export function Testimonials({ 
  title = "What Our Customers Say", 
  subtitle = "Generations of Savannah families have trusted us with their garments. Here's what they have to say.",
  showAll = false 
}: TestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const displayedTestimonials = showAll ? testimonials : testimonials.slice(0, 3);

  return (
    <Section bg="cream">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <Heading as="h2" className="mb-4">
            {title}
          </Heading>
          <Subheading className="max-w-2xl mx-auto">
            {subtitle}
          </Subheading>
          
          {/* Google Rating Badge - Schema-friendly container for future Google Reviews integration */}
          <div 
            className="inline-flex items-center gap-3 mt-6 px-5 py-3 bg-clean-white rounded-lg border border-border shadow-sm"
            itemScope 
            itemType="https://schema.org/AggregateRating"
          >
            <div className="flex items-center gap-1.5">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-charcoal font-semibold" itemProp="ratingValue">4.9</span>
            </div>
            <div className="h-4 w-px bg-border" />
            <span className="text-sm text-muted">
              Based on <span itemProp="reviewCount">250+</span> reviews
            </span>
          </div>
        </div>

        {/* Desktop Grid - Schema-friendly review cards */}
        <div 
          className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          itemScope 
          itemType="https://schema.org/ItemList"
        >
          {displayedTestimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="flex flex-col"
              itemScope 
              itemType="https://schema.org/Review"
            >
              <meta itemProp="position" content={String(index + 1)} />
              <div className="flex items-center justify-between mb-4">
                <span className="text-best-red-soft text-lg tracking-wider" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                  <meta itemProp="ratingValue" content={String(testimonial.rating)} />
                  {starRating(testimonial.rating)}
                </span>
                {sourceIcons[testimonial.source]}
              </div>
              <blockquote className="text-charcoal leading-relaxed flex-grow" itemProp="reviewBody">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="mt-6 pt-4 border-t border-border" itemProp="author" itemScope itemType="https://schema.org/Person">
                <p className="font-semibold text-charcoal" itemProp="name">{testimonial.customerName}</p>
                <p className="text-sm text-muted">{testimonial.location}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Card className="mb-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-best-red-soft text-lg tracking-wider">
                {starRating(testimonials[activeIndex].rating)}
              </span>
              {sourceIcons[testimonials[activeIndex].source]}
            </div>
            <blockquote className="text-charcoal leading-relaxed">
              &ldquo;{testimonials[activeIndex].quote}&rdquo;
            </blockquote>
            <div className="mt-6 pt-4 border-t border-border">
              <p className="font-semibold text-charcoal">{testimonials[activeIndex].customerName}</p>
              <p className="text-sm text-muted">{testimonials[activeIndex].location}</p>
            </div>
          </Card>
          
          {/* Dots */}
          <div className="flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === activeIndex ? "bg-charcoal" : "bg-border"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Google Reviews Container Placeholder - Ready for live embed */}
        {/* 
        When Google Reviews API is available, uncomment and replace:
        <div 
          id="google-reviews-embed" 
          className="mt-12 min-h-[200px] bg-clean-white rounded-lg border border-border p-6"
          data-google-place-id="YOUR_PLACE_ID"
        >
          Loading Google Reviews...
        </div>
        */}

        <div className="text-center mt-12">
          <Button href="/reviews/" variant="outline">
            Read More Reviews
          </Button>
        </div>
      </Container>
    </Section>
  );
}
