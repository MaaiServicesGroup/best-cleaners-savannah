import { Metadata } from "next";
import { PageHero } from "@/components/sections/Hero";
import { Container, Section } from "@/components/layout";
import { Heading, Button } from "@/components/ui";
import { GoogleReviews, GoogleRatingBadge } from "@/components/sections";

export const metadata: Metadata = {
  title: "Customer Reviews | Best Cleaners Savannah",
  description: "Read what our customers say about Best Cleaners & Laundry. Real reviews from Google. Savannah's trusted dry cleaner since 1910.",
};

// Google Place ID for Best Cleaners Savannah
// Find yours at: https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder
const GOOGLE_PLACE_ID = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID || "YOUR_PLACE_ID";

export default function ReviewsPage() {
  const reviewUrl = `https://search.google.com/local/writereview?placeid=${GOOGLE_PLACE_ID}`;
  const mapsUrl = `https://www.google.com/maps/place/?q=place_id:${GOOGLE_PLACE_ID}`;

  return (
    <>
      <PageHero
        title="Customer Reviews"
        description="Don't just take our word for it. See what our customers have to say about their experience with Best Cleaners & Laundry."
        breadcrumb={[{ label: "Reviews", href: "/reviews/" }]}
      />

      {/* Rating Summary Banner */}
      <Section bg="heritage-blue" padding="sm">
        <Container>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-clean-white">
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-xl font-semibold">Real reviews from Google</span>
            </div>
            <p className="text-clean-white/80 text-center md:text-left">
              All reviews shown are verified Google reviews from real customers.
            </p>
          </div>
        </Container>
      </Section>

      {/* Live Google Reviews Feed */}
      <Section bg="white">
        <Container>
          <div className="mb-8 text-center">
            <GoogleRatingBadge />
          </div>
          
          <GoogleReviews />
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
                href={reviewUrl}
                variant="secondary"
              >
                Leave a Google Review
              </Button>
              <Button
                href={mapsUrl}
                variant="outline"
              >
                View on Google Maps
              </Button>
            </div>
            <p className="text-sm text-muted mt-6">
              Have concerns or feedback? Please{" "}
              <a href="/customer-feedback/" className="text-heritage-blue hover:text-best-red transition-colors">
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
