import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/sections/Hero";
import { Container, Section } from "@/components/layout";
import { Card, CardTitle, CardDescription, Badge } from "@/components/ui";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Dry Cleaning Blog | Tips & Advice from Best Cleaners Savannah",
  description: "Expert dry cleaning tips, garment care advice, and local Savannah insights from Best Cleaners & Laundry. Over 110 years of knowledge shared.",
};

// Placeholder blog posts - in production, these would come from Sanity
const blogPosts = [
  {
    slug: "guide-to-keeping-your-clothes-looking-new",
    title: "Guide to Keeping Your Clothes Looking New",
    excerpt: "Learn the secrets professionals use to keep garments looking fresh and new for years. From proper storage to cleaning techniques.",
    publishedAt: "2024-12-15",
    category: "Garment Care",
    featuredImage: "/images/The Best Cleaners Cover.jpg",
  },
  {
    slug: "dry-cleaning-tips-every-local-should-know",
    title: "Dry Cleaning Tips Every Savannah Local Should Know",
    excerpt: "Savannah's humidity and climate require special attention to garment care. Here are tips tailored for our local conditions.",
    publishedAt: "2024-11-28",
    category: "Tips",
    featuredImage: "/images/The Best Cleaners.png",
  },
  {
    slug: "2026-dry-cleaning-laundry-trends",
    title: "2026 Dry Cleaning & Laundry Trends",
    excerpt: "What's new in the world of garment care? From eco-friendly solvents to smart fabrics, here's what we're seeing.",
    publishedAt: "2024-11-15",
    category: "Industry",
    featuredImage: null,
  },
  {
    slug: "serving-all-savannah-districts-since-1910",
    title: "Serving All Savannah Districts Since 1910",
    excerpt: "A look at our history serving Savannah's diverse neighborhoods, from the Historic District to the newest developments.",
    publishedAt: "2024-10-30",
    category: "History",
    featuredImage: null,
  },
  {
    slug: "what-is-detailed-pressing-dry-cleaning",
    title: "What is Detailed Pressing in Dry Cleaning?",
    excerpt: "Understanding the art of professional pressing and why it makes such a difference in how your clothes look and feel.",
    publishedAt: "2024-10-15",
    category: "Education",
    featuredImage: null,
  },
  {
    slug: "insane-stains-removal-guide",
    title: "The Ultimate Stain Removal Guide",
    excerpt: "From red wine to grass stains, learn how professionals tackle the toughest stains—and what you can do at home.",
    publishedAt: "2024-09-28",
    category: "Tips",
    featuredImage: null,
  },
  {
    slug: "5-key-questions-to-ask",
    title: "5 Key Questions to Ask Your Dry Cleaner",
    excerpt: "Not all dry cleaners are created equal. Here's how to evaluate whether a cleaner is right for your garments.",
    publishedAt: "2024-09-10",
    category: "Education",
    featuredImage: null,
  },
  {
    slug: "how-to-find-the-best-dry-cleaners",
    title: "How to Find the Best Dry Cleaners Near You",
    excerpt: "What to look for when choosing a dry cleaner, from certifications to customer reviews to pricing transparency.",
    publishedAt: "2024-08-22",
    category: "Tips",
    featuredImage: null,
  },
  {
    slug: "your-closet-could-use-a-dry-cleaning",
    title: "Your Closet Could Use a Professional Cleaning",
    excerpt: "Why seasonal wardrobe maintenance matters and how professional cleaning extends the life of your clothes.",
    publishedAt: "2024-08-05",
    category: "Garment Care",
    featuredImage: null,
  },
  {
    slug: "maintain-your-style-with-dry-cleaning",
    title: "Maintain Your Style with Regular Dry Cleaning",
    excerpt: "How establishing a dry cleaning routine helps you look your best every day without extra effort.",
    publishedAt: "2024-07-18",
    category: "Tips",
    featuredImage: null,
  },
  {
    slug: "difference-in-dry-cleaner-and-laundromat",
    title: "Dry Cleaner vs. Laundromat: What's the Difference?",
    excerpt: "Understanding when to use each service and why some garments require professional dry cleaning.",
    publishedAt: "2024-07-01",
    category: "Education",
    featuredImage: null,
  },
  {
    slug: "your-go-to-dry-cleaning",
    title: "Making Best Cleaners Your Go-To for All Garment Care",
    excerpt: "From everyday laundry to wedding dress preservation, discover the full range of services we offer.",
    publishedAt: "2024-06-15",
    category: "Services",
    featuredImage: null,
  },
];

export default function BlogIndexPage() {
  return (
    <>
      <PageHero
        title="Dry Cleaning Blog"
        description="Expert tips, garment care advice, and insights from over 110 years of professional cleaning experience."
        breadcrumb={[{ label: "Blog", href: "/best-dry-cleaning-blog/" }]}
      />

      <Section bg="white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/${post.slug}/`} className="group">
                <Card className="h-full flex flex-col">
                  {post.featuredImage && (
                    <div className="relative h-48 -mx-8 -mt-8 mb-6 overflow-hidden">
                      <Image
                        src={post.featuredImage}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="muted">{post.category}</Badge>
                    <span className="text-sm text-muted">{formatDate(post.publishedAt)}</span>
                  </div>
                  <CardTitle className="group-hover:text-best-red transition-colors mb-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="flex-grow">
                    {post.excerpt}
                  </CardDescription>
                  <div className="mt-4 text-sm font-semibold text-heritage-blue group-hover:text-best-red transition-colors flex items-center gap-1">
                    Read more
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
