import { Metadata } from "next";
import { PageHero } from "@/components/sections/Hero";
import { Container, Section } from "@/components/layout";
import { Heading, Card, Button } from "@/components/ui";
import { starRating } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Customer Reviews | Best Cleaners Savannah",
  description: "Read what our customers say about Best Cleaners & Laundry. 4.9 star rating with over 250 reviews. Savannah's trusted dry cleaner since 1910.",
};

// Placeholder reviews - in production, these would come from Sanity or Google API
const reviews = [
  {
    id: "1",
    customerName: "Margaret S.",
    location: "Ardsley Park",
    quote: "I've been bringing my clothes here for over 20 years. The quality is consistently excellent, and the staff treats every garment like it's their own. True professionals who take pride in their work.",
    rating: 5,
    source: "google",
    date: "2024-12-15",
  },
  {
    id: "2",
    customerName: "Robert M.",
    location: "Historic District",
    quote: "Best Cleaners saved my grandfather's vintage suit that I thought was beyond repair. Their attention to detail and care for delicate fabrics is unmatched in Savannah. Worth every penny.",
    rating: 5,
    source: "yelp",
    date: "2024-11-28",
  },
  {
    id: "3",
    customerName: "Jennifer L.",
    location: "Pooler",
    quote: "The convenience and quality keep me coming back. Even living in Pooler, it's worth the trip to their Waters Avenue location. My work uniforms have never looked better.",
    rating: 5,
    source: "google",
    date: "2024-11-15",
  },
  {
    id: "4",
    customerName: "David W.",
    location: "Midtown",
    quote: "As a business owner, I need my suits to look impeccable. Best Cleaners delivers every single time. Over a century of experience really shows in their work. Highly recommend.",
    rating: 5,
    source: "direct",
    date: "2024-10-30",
  },
  {
    id: "5",
    customerName: "Sarah K.",
    location: "Victorian District",
    quote: "They cleaned and preserved my wedding dress beautifully. It's now stored perfectly for my future daughter. The care and attention they showed made such a meaningful difference.",
    rating: 5,
    source: "google",
    date: "2024-10-20",
  },
  {
    id: "6",
    customerName: "Michael T.",
    location: "Georgetown",
    quote: "Fair prices, friendly staff, and exceptional results. This is how dry cleaning should be. A true Savannah institution that hasn't lost its touch over the years.",
    rating: 5,
    source: "yelp",
    date: "2024-10-05",
  },
  {
    id: "7",
    customerName: "Patricia B.",
    location: "Thunderbolt",
    quote: "Switched to Best Cleaners after being disappointed elsewhere. What a difference! They actually care about getting stains out properly and my clothes always smell fresh.",
    rating: 5,
    source: "google",
    date: "2024-09-22",
  },
  {
    id: "8",
    customerName: "James R.",
    location: "Starland District",
    quote: "The Abercorn location is super convenient and the staff is always helpful. They've helped me with everything from regular dry cleaning to getting red wine out of a silk tie.",
    rating: 4,
    source: "google",
    date: "2024-09-10",
  },
];

const stats = {
  averageRating: 4.9,
  totalReviews: 250,
  fiveStarPercentage: 94,
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        title="Customer Reviews"
        description="Don't just take our word for it. See what our customers have to say about their experience with Best Cleaners & Laundry."
        breadcrumb={[{ label: "Reviews", href: "/reviews/" }]}
      />

      {/* Stats Banner */}
      <Section bg="heritage-blue" padding="sm">
        <Container>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 text-clean-white">
            <div className="text-center">
              <div className="font-display text-5xl font-bold">{stats.averageRating}</div>
              <div className="text-clean-white/80 mt-1">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="font-display text-5xl font-bold">{stats.totalReviews}+</div>
              <div className="text-clean-white/80 mt-1">Customer Reviews</div>
            </div>
            <div className="text-center">
              <div className="font-display text-5xl font-bold">{stats.fiveStarPercentage}%</div>
              <div className="text-clean-white/80 mt-1">5-Star Reviews</div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Reviews Grid */}
      <Section bg="white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review) => (
              <Card key={review.id}>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-best-red text-lg tracking-wider">
                    {starRating(review.rating)}
                  </span>
                  <span className="text-xs text-muted uppercase tracking-wider">
                    {review.source === "google" && "Google"}
                    {review.source === "yelp" && "Yelp"}
                    {review.source === "direct" && "Direct"}
                  </span>
                </div>
                <blockquote className="text-charcoal leading-relaxed mb-6">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <p className="font-semibold text-charcoal">{review.customerName}</p>
                    <p className="text-sm text-muted">{review.location}</p>
                  </div>
                  <p className="text-sm text-muted">
                    {new Date(review.date).toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Leave a Review CTA */}
      <Section bg="cream">
        <Container size="narrow">
          <div className="text-center">
            <Heading as="h2" size="md" className="mb-4">
              Share Your Experience
            </Heading>
            <p className="text-muted mb-8">
              We appreciate your feedback! If you&apos;ve had a great experience with Best Cleaners, 
              please consider leaving us a review. Your kind words help other Savannah residents 
              find quality garment care.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                href="https://google.com/maps"
                variant="secondary"
              >
                Review on Google
              </Button>
              <Button
                href="https://yelp.com"
                variant="outline"
              >
                Review on Yelp
              </Button>
            </div>
            <p className="text-sm text-muted mt-6">
              Have concerns or feedback? Please{" "}
              <a href="/customer-feedback/" className="text-heritage-blue hover:text-best-red">
                contact us directly
              </a>{" "}
              so we can make it right.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
