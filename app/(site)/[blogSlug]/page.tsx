import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Container, Section } from "@/components/layout";
import { Heading, Badge, Button } from "@/components/ui";
import { CTABanner } from "@/components/sections/CTABanner";
import { formatDate } from "@/lib/utils";

// Valid blog post slugs - must match existing URLs exactly
const validBlogSlugs = [
  "guide-to-keeping-your-clothes-looking-new",
  "dry-cleaning-tips-every-local-should-know",
  "2026-dry-cleaning-laundry-trends",
  "serving-all-savannah-districts-since-1910",
  "what-is-detailed-pressing-dry-cleaning",
  "insane-stains-removal-guide",
  "5-key-questions-to-ask",
  "how-to-find-the-best-dry-cleaners",
  "your-closet-could-use-a-dry-cleaning",
  "maintain-your-style-with-dry-cleaning",
  "difference-in-dry-cleaner-and-laundromat",
  "your-go-to-dry-cleaning",
];

// Placeholder blog content - in production, this would come from Sanity
const blogPostsData: Record<string, {
  title: string;
  excerpt: string;
  publishedAt: string;
  category: string;
  content: string[];
  featuredImage?: string;
}> = {
  "guide-to-keeping-your-clothes-looking-new": {
    title: "Guide to Keeping Your Clothes Looking New",
    excerpt: "Learn the secrets professionals use to keep garments looking fresh and new for years.",
    publishedAt: "2024-12-15",
    category: "Garment Care",
    featuredImage: "/images/The Best Cleaners Cover.jpg",
    content: [
      "Your clothes are an investment. Whether it's a well-tailored suit, a favorite dress, or everyday essentials, proper care can extend their lifespan significantly. At Best Cleaners, we've been helping Savannah residents keep their garments looking new since 1910.",
      "The first rule of garment care is to read the label. Care labels exist for a reason—they tell you exactly how the manufacturer intended the item to be cleaned. Ignoring these instructions is one of the fastest ways to damage clothing.",
      "Between professional cleanings, proper storage matters. Use appropriate hangers for different garments—wooden hangers for suits, padded hangers for delicate items. Never leave clothes crumpled in a heap, and allow garments to air out before putting them back in your closet.",
      "When it comes to stains, time is of the essence. The longer a stain sits, the harder it is to remove. Blot (don't rub) fresh stains, and bring the item to a professional cleaner as soon as possible for the best results.",
      "Regular professional cleaning isn't just about removing dirt—it's about maintaining the fabric's integrity. Professional cleaning removes oils and residues that can break down fibers over time, and proper pressing keeps clothes looking crisp and new.",
    ],
  },
  "dry-cleaning-tips-every-local-should-know": {
    title: "Dry Cleaning Tips Every Savannah Local Should Know",
    excerpt: "Savannah's humidity and climate require special attention to garment care.",
    publishedAt: "2024-11-28",
    category: "Tips",
    content: [
      "Living in Savannah means dealing with humidity that can affect your clothes in ways you might not expect. The moisture in our air can lead to mildew, odors, and fabric deterioration if you're not careful.",
      "Store seasonal items properly. Before putting winter clothes away, have them cleaned. Even if they look clean, body oils and invisible stains can attract pests and cause yellowing over time. The same goes for summer clothes before the cooler months.",
      "Don't let damp clothes sit. Savannah's humidity means your clothes might not dry as quickly as you'd like. If something is even slightly damp, don't stuff it in your closet—you're inviting mildew.",
      "Consider the frequency of your dry cleaning. In our humid climate, suits and other professional attire may need more frequent cleaning than in drier regions. Pay attention to how garments smell and feel.",
      "For those special occasions—weddings at Forsyth Park, galas at the Jepson, or events in the Historic District—plan ahead. Get your formal wear cleaned and pressed a few days before, not the day of.",
    ],
  },
  "2026-dry-cleaning-laundry-trends": {
    title: "2026 Dry Cleaning & Laundry Trends",
    excerpt: "What's new in the world of garment care? From eco-friendly solvents to smart fabrics.",
    publishedAt: "2024-11-15",
    category: "Industry",
    content: [
      "The dry cleaning industry continues to evolve, and at Best Cleaners, we stay current with the latest developments while honoring the time-tested techniques that have served us for over a century.",
      "Eco-friendly cleaning solutions are more effective than ever. Modern green solvents can tackle tough stains while being gentler on both fabrics and the environment. We've invested in these technologies because it's the right thing to do.",
      "Smart fabrics are becoming more common in everyday clothing. These technical materials require specialized care—what works for traditional cotton won't necessarily work for moisture-wicking performance wear.",
      "Convenience continues to drive innovation. From better tracking systems to more efficient processes, the industry is finding ways to serve customers faster without sacrificing quality.",
      "Sustainability is on everyone's mind. From reduced water usage to energy-efficient equipment, dry cleaners are finding ways to minimize environmental impact while maintaining the high standards customers expect.",
    ],
  },
  "serving-all-savannah-districts-since-1910": {
    title: "Serving All Savannah Districts Since 1910",
    excerpt: "A look at our history serving Savannah's diverse neighborhoods.",
    publishedAt: "2024-10-30",
    category: "History",
    content: [
      "When Best Cleaners opened in 1910, Savannah looked very different than it does today. The Historic District was the center of commerce, streetcars ran down Bull Street, and the city's expansion southward was just beginning.",
      "We've watched Savannah grow and change over the decades. New neighborhoods emerged—Ardsley Park in the 1920s, the suburbs in the 1950s and 60s, and the revitalization of areas like the Starland District in recent years.",
      "Through all these changes, one thing has remained constant: our commitment to serving every Savannah neighborhood with the same quality and care. Whether you live in a historic rowhouse downtown or a new home in Pooler, you deserve excellent garment care.",
      "Our two locations—Waters Avenue and Abercorn Street—were strategically chosen to serve as much of our community as possible. We're not just a business; we're part of Savannah's fabric (pun intended).",
      "As Savannah continues to grow and evolve, we'll be here. Four generations of our family have served this community, and we're committed to many more.",
    ],
  },
  "what-is-detailed-pressing-dry-cleaning": {
    title: "What is Detailed Pressing in Dry Cleaning?",
    excerpt: "Understanding the art of professional pressing and why it makes such a difference.",
    publishedAt: "2024-10-15",
    category: "Education",
    content: [
      "Cleaning a garment is only half the job. What really makes clothes look professional is the pressing—and professional pressing is an art form that takes years to master.",
      "Detailed pressing involves individually pressing each part of a garment: lapels, collars, cuffs, seams, and pleats all receive specific attention. It's not just running a hot iron over fabric; it's understanding how different materials respond to heat and steam.",
      "Different fabrics require different techniques. Silk needs gentle heat and careful handling. Wool responds well to steam but can be damaged by direct iron contact. Linen loves high heat but wrinkles easily if not handled properly while cooling.",
      "The equipment matters too. Professional pressing equipment provides consistent heat and steam that's impossible to replicate with a home iron. Our equipment can also handle garments that would be difficult or impossible to press at home.",
      "The result of detailed pressing is a garment that looks new—crisp lines, smooth surfaces, and professional appearance. It's the difference between clothes that look fine and clothes that look exceptional.",
    ],
  },
  "insane-stains-removal-guide": {
    title: "The Ultimate Stain Removal Guide",
    excerpt: "From red wine to grass stains, learn how professionals tackle the toughest stains.",
    publishedAt: "2024-09-28",
    category: "Tips",
    content: [
      "Stains are the number one reason people bring clothes to the dry cleaner. While some stains are straightforward, others require expertise and specialized techniques to remove without damaging the fabric.",
      "Red wine is notorious, but it's actually treatable if caught quickly. The key is to blot, not rub, and to avoid hot water which can set the stain. Professional cleaners have specific treatments for tannin-based stains.",
      "Grease and oil stains are tricky because water alone won't remove them. That's where dry cleaning solvents excel—they're specifically designed to dissolve oily substances without harming delicate fabrics.",
      "Ink stains vary widely depending on the type of ink. Ballpoint, permanent marker, and printer ink all require different approaches. What removes one might set another, so always consult a professional.",
      "The best advice for any stain: act quickly and don't experiment. Many home remedies can make stains worse or damage fabric. When in doubt, bring it to us—we've seen it all and know how to handle it.",
    ],
  },
  "5-key-questions-to-ask": {
    title: "5 Key Questions to Ask Your Dry Cleaner",
    excerpt: "Not all dry cleaners are created equal. Here's how to evaluate whether a cleaner is right for your garments.",
    publishedAt: "2024-09-10",
    category: "Education",
    content: [
      "Choosing a dry cleaner is about more than convenience. You're trusting them with garments that may be valuable, irreplaceable, or simply important to you. Here are the questions you should ask.",
      "First: How long have you been in business? Experience matters in dry cleaning. There's no substitute for the knowledge that comes from handling thousands of garments over many years.",
      "Second: What cleaning methods do you use? A good cleaner should be able to explain their process and discuss how they handle different fabrics and stains.",
      "Third: What's your policy on damaged items? Accidents can happen, and a reputable cleaner will have a clear policy for addressing any issues.",
      "Fourth: Can you handle specialty items? Wedding dresses, leather, suede, and vintage clothing require specific expertise. Not every cleaner can handle these items properly.",
      "Fifth: Do you inspect garments before cleaning? Professional cleaners check for existing damage, stains, and special care needs before processing. This protects both you and them.",
    ],
  },
  "how-to-find-the-best-dry-cleaners": {
    title: "How to Find the Best Dry Cleaners Near You",
    excerpt: "What to look for when choosing a dry cleaner, from certifications to customer reviews.",
    publishedAt: "2024-08-22",
    category: "Tips",
    content: [
      "Finding a good dry cleaner is about more than proximity. Quality, reliability, and trust should factor into your decision. Here's what to look for.",
      "Check reviews, but read them critically. Look for patterns—consistent praise for quality work is a good sign, as are responses to complaints that show the business cares about making things right.",
      "Visit in person. A good dry cleaner should have clean, organized facilities and staff who are knowledgeable and willing to answer questions.",
      "Ask about their experience with items similar to yours. If you have lots of suits, make sure they handle professional attire regularly. If you need wedding dress preservation, ask specifically about their process.",
      "Consider the relationship. Dry cleaning is an ongoing need for most people. Finding a cleaner you trust means one less thing to worry about in your busy life.",
    ],
  },
  "your-closet-could-use-a-dry-cleaning": {
    title: "Your Closet Could Use a Professional Cleaning",
    excerpt: "Why seasonal wardrobe maintenance matters and how professional cleaning extends the life of your clothes.",
    publishedAt: "2024-08-05",
    category: "Garment Care",
    content: [
      "When was the last time you had your entire wardrobe professionally cleaned? If you're like most people, the answer is probably never. But seasonal closet maintenance can significantly extend the life of your clothes.",
      "Clothes accumulate dirt, oils, and odors even when they don't look dirty. These contaminants can break down fibers over time, leading to premature wear and yellowing.",
      "Seasonal transitions are the perfect time for closet maintenance. Before storing winter clothes, have them cleaned. The same goes for summer items before cooler weather arrives.",
      "Professional cleaning also gives you the opportunity to assess your wardrobe. We often spot issues—loose buttons, small tears, worn areas—that you might not notice. Catching these early means easier, cheaper repairs.",
      "Think of it as maintenance for your wardrobe investment. Just like you service your car or maintain your home, your clothes benefit from regular professional attention.",
    ],
  },
  "maintain-your-style-with-dry-cleaning": {
    title: "Maintain Your Style with Regular Dry Cleaning",
    excerpt: "How establishing a dry cleaning routine helps you look your best every day.",
    publishedAt: "2024-07-18",
    category: "Tips",
    content: [
      "Looking put-together isn't about having the most expensive clothes—it's about keeping the clothes you have in excellent condition. Regular dry cleaning is a key part of that equation.",
      "Establish a routine that works for your lifestyle. Some people drop off weekly, others every two weeks. The key is consistency so you never find yourself without clean, pressed clothes when you need them.",
      "Plan ahead for events. Nothing ruins an important day like realizing your best outfit needs cleaning. Keep track of upcoming occasions and prepare accordingly.",
      "Don't wait until something looks dirty. Professional cleaning between obvious soil builds prevents the gradual degradation that makes clothes look worn out over time.",
      "Trust your cleaner with your regular items, not just special occasions. The suit you wear weekly deserves the same care as the one you save for weddings.",
    ],
  },
  "difference-in-dry-cleaner-and-laundromat": {
    title: "Dry Cleaner vs. Laundromat: What's the Difference?",
    excerpt: "Understanding when to use each service and why some garments require professional dry cleaning.",
    publishedAt: "2024-07-01",
    category: "Education",
    content: [
      "Many people don't understand the difference between dry cleaning and laundry—or when each service is appropriate. Here's what you need to know.",
      "Dry cleaning doesn't use water. Instead, it uses special solvents that dissolve oils and lift dirt without soaking the fabric. This makes it essential for materials that water would damage, like silk, wool, and many blends.",
      "Laundry uses water and detergent—great for cotton, linen, and synthetic fabrics that can handle moisture. Laundromats are fine for everyday items, but they can't safely clean delicate or specialty garments.",
      "The key difference is also in the finishing. Professional dry cleaners don't just clean—they press, inspect, and make minor repairs. That level of attention isn't available at a self-service laundromat.",
      "Check your care labels. If it says 'dry clean only,' there's a reason. Taking that garment to a laundromat could ruin it. When in doubt, ask a professional.",
    ],
  },
  "your-go-to-dry-cleaning": {
    title: "Making Best Cleaners Your Go-To for All Garment Care",
    excerpt: "From everyday laundry to wedding dress preservation, discover the full range of services we offer.",
    publishedAt: "2024-06-15",
    category: "Services",
    content: [
      "Best Cleaners isn't just a dry cleaner—we're a full-service garment care provider. Whatever your cleaning needs, we likely have a solution.",
      "Our core dry cleaning service handles everything from everyday suits to delicate evening wear. We use modern, eco-friendly solvents and time-tested techniques passed down through four generations.",
      "Laundry and press services are perfect for dress shirts, blouses, and items that need professional finishing but not dry cleaning solvents.",
      "Wash and fold is our most convenient service—drop off your laundry, and we'll wash, dry, and neatly fold it for pickup. Perfect for busy families and professionals.",
      "Specialty services include wedding dress preservation, leather and suede care, household items like comforters and drapes, and commercial services for local businesses. Whatever you need, we're here to help.",
    ],
  },
};

interface BlogPostPageProps {
  params: Promise<{ blogSlug: string }>;
}

export async function generateStaticParams() {
  return validBlogSlugs.map((slug) => ({
    blogSlug: slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { blogSlug } = await params;
  const post = blogPostsData[blogSlug];
  
  if (!post) {
    return {
      title: "Post Not Found | Best Cleaners Blog",
    };
  }
  
  return {
    title: `${post.title} | Best Cleaners Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { blogSlug } = await params;
  
  // Validate slug
  if (!validBlogSlugs.includes(blogSlug)) {
    notFound();
  }
  
  const post = blogPostsData[blogSlug];
  
  if (!post) {
    notFound();
  }

  // JSON-LD for Article
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    publisher: {
      "@type": "Organization",
      name: "Best Cleaners & Laundry",
      url: "https://bestcleanerssavannah.com",
    },
    author: {
      "@type": "Organization",
      name: "Best Cleaners & Laundry",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-clean-white border-b border-border py-12 md:py-16">
        <Container size="narrow">
          <nav className="mb-4 text-sm">
            <ol className="flex items-center gap-2 text-muted">
              <li><Link href="/" className="hover:text-best-red">Home</Link></li>
              <li>/</li>
              <li><Link href="/best-dry-cleaning-blog/" className="hover:text-best-red">Blog</Link></li>
              <li>/</li>
              <li className="text-charcoal truncate">{post.title}</li>
            </ol>
          </nav>
          
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="muted">{post.category}</Badge>
            <span className="text-sm text-muted">{formatDate(post.publishedAt)}</span>
          </div>
          
          <Heading as="h1" size="lg">
            {post.title}
          </Heading>
        </Container>
      </section>

      {/* Featured Image */}
      {post.featuredImage && (
        <div className="relative h-64 md:h-96 bg-warm-cream">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Content */}
      <Section bg="white">
        <Container size="narrow">
          <article className="prose max-w-none">
            {post.content.map((paragraph, index) => (
              <p key={index} className="text-charcoal leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </article>

          {/* Author/About */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="bg-warm-cream p-6 flex items-start gap-4">
              <div className="w-16 h-16 bg-heritage-blue text-clean-white rounded-full flex items-center justify-center font-display text-xl font-bold shrink-0">
                BC
              </div>
              <div>
                <h3 className="font-semibold text-charcoal">Best Cleaners & Laundry</h3>
                <p className="text-sm text-muted mb-3">Savannah&apos;s Trusted Dry Cleaners Since 1910</p>
                <p className="text-sm text-muted">
                  For over 110 years, we&apos;ve been providing expert garment care to Savannah families. 
                  Our blog shares the knowledge we&apos;ve accumulated over four generations.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex justify-between">
            <Button href="/best-dry-cleaning-blog/" variant="outline">
              ← All Posts
            </Button>
            <Button href="/contact-best-dry-cleaners/">
              Contact Us
            </Button>
          </div>
        </Container>
      </Section>

      <CTABanner
        title="Have Questions About Garment Care?"
        description="Our team is always happy to share our expertise. Stop by or give us a call."
        primaryCta={{
          text: "Contact Us",
          href: "/contact-best-dry-cleaners/",
        }}
        variant="default"
      />
    </>
  );
}
