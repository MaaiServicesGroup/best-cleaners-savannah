import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/sections/Hero";
import { Container, Section } from "@/components/layout";
import { Card, CardTitle, CardDescription, Badge } from "@/components/ui";
import { formatDate } from "@/lib/utils";
import { sanityFetch, urlFor } from "@/lib/sanity/client";
import { allBlogPostsQuery } from "@/lib/sanity/queries";

export const metadata: Metadata = {
  title: "Dry Cleaning Blog | Tips & Advice from Best Cleaners Savannah",
  description: "Expert dry cleaning tips, garment care advice, and local Savannah insights from Best Cleaners & Laundry. Over 110 years of knowledge shared.",
};

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  featuredImage: string | null;
  featuredImageAlt: string | null;
  publishedAt: string;
  author: { name: string; image: string } | null;
  categories: string[] | null;
}

export default async function BlogIndexPage() {
  const blogPosts = await sanityFetch<BlogPost[]>({
    query: allBlogPostsQuery,
    tags: ["blogPost"],
  });

  return (
    <>
      <PageHero
        title="Dry Cleaning Blog"
        description="Expert tips, garment care advice, and insights from over 110 years of professional cleaning experience."
        breadcrumb={[{ label: "Blog", href: "/best-dry-cleaning-blog/" }]}
      />

      <Section bg="white">
        <Container>
          {blogPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted text-lg">No blog posts yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link key={post._id} href={`/${post.slug}/`} className="group">
                  <Card className="h-full flex flex-col">
                    {post.featuredImage && (
                      <div className="relative h-48 -mx-8 -mt-8 mb-6 overflow-hidden">
                        <Image
                          src={urlFor(post.featuredImage).width(600).height(400).url()}
                          alt={post.featuredImageAlt || post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="flex items-center gap-3 mb-3">
                      {post.categories?.[0] && (
                        <Badge variant="muted">{post.categories[0]}</Badge>
                      )}
                      {post.publishedAt && (
                        <span className="text-sm text-muted">{formatDate(post.publishedAt)}</span>
                      )}
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
          )}
        </Container>
      </Section>
    </>
  );
}
