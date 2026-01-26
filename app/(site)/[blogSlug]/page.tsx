import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Container, Section } from "@/components/layout";
import { Heading, Badge, Button } from "@/components/ui";
import { CTABanner } from "@/components/sections/CTABanner";
import { PortableText } from "@/components/sanity";
import { formatDate } from "@/lib/utils";
import { sanityFetch, urlFor } from "@/lib/sanity/client";
import { blogPostBySlugQuery, blogPostSlugsQuery } from "@/lib/sanity/queries";

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body: any;
  featuredImage: string | null;
  featuredImageAlt: string | null;
  publishedAt: string;
  author: {
    name: string;
    role?: string;
    bio?: string;
    image: string | null;
  } | null;
  categories: string[] | null;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    ogImage?: string;
  };
}

interface BlogPostPageProps {
  params: Promise<{ blogSlug: string }>;
}

export async function generateStaticParams() {
  const slugs = await sanityFetch<string[]>({
    query: blogPostSlugsQuery,
    tags: ["blogPost"],
  });
  
  return slugs.map((slug) => ({
    blogSlug: slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { blogSlug } = await params;
  
  const post = await sanityFetch<BlogPost | null>({
    query: blogPostBySlugQuery,
    params: { slug: blogSlug },
    tags: ["blogPost"],
  });
  
  if (!post) {
    return {
      title: "Post Not Found | Best Cleaners Blog",
    };
  }
  
  return {
    title: post.seo?.metaTitle || `${post.title} | Best Cleaners Blog`,
    description: post.seo?.metaDescription || post.excerpt,
    openGraph: {
      title: post.seo?.metaTitle || post.title,
      description: post.seo?.metaDescription || post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      images: post.seo?.ogImage ? [{ url: post.seo.ogImage }] : post.featuredImage ? [{ url: urlFor(post.featuredImage).width(1200).height(630).url() }] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { blogSlug } = await params;
  
  const post = await sanityFetch<BlogPost | null>({
    query: blogPostBySlugQuery,
    params: { slug: blogSlug },
    tags: ["blogPost"],
  });
  
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
    ...(post.featuredImage && {
      image: urlFor(post.featuredImage).width(1200).height(630).url(),
    }),
    publisher: {
      "@type": "Organization",
      name: "Best Cleaners & Laundry",
      url: "https://bestcleanerssavannah.com",
    },
    author: post.author ? {
      "@type": "Person",
      name: post.author.name,
    } : {
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
            {post.categories?.[0] && (
              <Badge variant="muted">{post.categories[0]}</Badge>
            )}
            {post.publishedAt && (
              <span className="text-sm text-muted">{formatDate(post.publishedAt)}</span>
            )}
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
            src={urlFor(post.featuredImage).width(1200).height(600).url()}
            alt={post.featuredImageAlt || post.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Content */}
      <Section bg="white">
        <Container size="narrow">
          <article className="prose max-w-none">
            <PortableText value={post.body} />
          </article>

          {/* Author/About */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="bg-warm-cream p-6 flex items-start gap-4">
              {post.author?.image ? (
                <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0">
                  <Image
                    src={urlFor(post.author.image).width(128).height(128).url()}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="w-16 h-16 bg-heritage-blue text-clean-white rounded-full flex items-center justify-center font-display text-xl font-bold shrink-0">
                  BC
                </div>
              )}
              <div>
                <h3 className="font-semibold text-charcoal">
                  {post.author?.name || "Best Cleaners & Laundry"}
                </h3>
                <p className="text-sm text-muted mb-3">
                  {post.author?.role || "Savannah's Trusted Dry Cleaners Since 1910"}
                </p>
                <p className="text-sm text-muted">
                  {post.author?.bio || "For over 110 years, we've been providing expert garment care to Savannah families. Our blog shares the knowledge we've accumulated over four generations."}
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
