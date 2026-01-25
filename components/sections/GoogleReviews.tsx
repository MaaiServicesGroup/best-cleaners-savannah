"use client";

import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";

interface GoogleReviewsProps {
  /** Maximum number of reviews to display */
  maxItems?: number;
}

/**
 * GoogleReviews component that displays live Google reviews in a carousel
 * Uses Featurable API for unlimited reviews with 24-hour caching
 * 
 * Requires NEXT_PUBLIC_FEATURABLE_WIDGET_ID environment variable
 */
export function GoogleReviews({ maxItems = 10 }: GoogleReviewsProps) {
  const featurableWidgetId = process.env.NEXT_PUBLIC_FEATURABLE_WIDGET_ID;

  // Fallback UI when widget ID is not configured
  if (!featurableWidgetId) {
    return (
      <div className="bg-cream rounded-lg p-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          <span className="font-semibold text-charcoal">Google Reviews</span>
        </div>
        <p className="text-muted text-sm">
          Reviews will appear here once configured.
        </p>
        <p className="text-muted text-xs mt-2">
          Set NEXT_PUBLIC_FEATURABLE_WIDGET_ID in your environment.
        </p>
      </div>
    );
  }

  return (
    <div className="google-reviews-container">
      <ReactGoogleReviews
        layout="carousel"
        featurableId={featurableWidgetId}
        maxCharacters={200}
        dateDisplay="relative"
        reviewVariant="card"
        carouselSpeed={5000}
        carouselAutoplay={true}
        maxItems={maxItems}
      />

      {/* Custom styles to match site aesthetic */}
      <style jsx global>{`
        .google-reviews-container {
          --grw-bg-color: var(--clean-white, #ffffff);
          --grw-text-color: var(--charcoal, #2C2C2C);
          --grw-star-color: #FACC15;
          --grw-border-radius: 0.5rem;
        }
        
        .google-reviews-container .grw-card {
          background: var(--clean-white, #ffffff);
          border: 1px solid var(--border, #E5E5E0);
          border-radius: 0.5rem;
          padding: 1.5rem;
          transition: box-shadow 0.2s ease, transform 0.2s ease;
        }
        
        .google-reviews-container .grw-card:hover {
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transform: translateY(-2px);
        }
        
        .google-reviews-container .grw-reviewer-name {
          font-weight: 600;
          color: var(--charcoal, #2C2C2C);
        }
        
        .google-reviews-container .grw-review-text {
          color: var(--charcoal, #2C2C2C);
          line-height: 1.6;
        }
        
        .google-reviews-container .grw-date {
          color: var(--muted, #6B6B6B);
          font-size: 0.875rem;
        }
        
        /* Hide default branding for cleaner look */
        .google-reviews-container .grw-branding {
          opacity: 0.5;
        }
      `}</style>
    </div>
  );
}

/**
 * Compact Google rating badge for use in headers/sidebars
 */
export function GoogleRatingBadge() {
  const featurableWidgetId = process.env.NEXT_PUBLIC_FEATURABLE_WIDGET_ID;

  if (!featurableWidgetId) {
    // Static fallback badge
    return (
      <div 
        className="inline-flex items-center gap-3 px-5 py-3 bg-clean-white rounded-lg border border-border shadow-sm"
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
    );
  }

  return (
    <div className="google-rating-badge">
      <ReactGoogleReviews
        layout="badge"
        featurableId={featurableWidgetId}
      />
      
      <style jsx global>{`
        .google-rating-badge .grw-badge {
          background: var(--clean-white, #ffffff);
          border: 1px solid var(--border, #E5E5E0);
          border-radius: 0.5rem;
          padding: 0.75rem 1.25rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }
      `}</style>
    </div>
  );
}
