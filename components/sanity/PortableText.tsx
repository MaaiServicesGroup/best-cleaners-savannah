import { PortableText as SanityPortableText, PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/lib/sanity/client";

// Type definitions for block content
interface ImageBlock {
  _type: "image";
  _key: string;
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
  caption?: string;
}

interface LinkMark {
  _type: "link";
  href: string;
  openInNewTab?: boolean;
}

interface InternalLinkMark {
  _type: "internalLink";
  reference?: {
    _type: string;
    slug?: { current: string };
  };
}

// Custom components for rendering Portable Text
const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="text-2xl font-display font-bold text-charcoal mt-8 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-display font-bold text-charcoal mt-6 mb-3">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-display font-semibold text-charcoal mt-4 mb-2">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="text-charcoal leading-relaxed mb-6">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-heritage-blue pl-4 italic text-muted my-6">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 mb-6 text-charcoal">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 mb-6 text-charcoal">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-relaxed">{children}</li>,
    number: ({ children }) => <li className="leading-relaxed">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    underline: ({ children }) => <span className="underline">{children}</span>,
    link: ({ children, value }) => {
      const link = value as LinkMark;
      const target = link.openInNewTab ? "_blank" : undefined;
      const rel = link.openInNewTab ? "noopener noreferrer" : undefined;
      return (
        <a
          href={link.href}
          target={target}
          rel={rel}
          className="text-heritage-blue hover:text-best-red underline transition-colors"
        >
          {children}
        </a>
      );
    },
    internalLink: ({ children, value }) => {
      const link = value as InternalLinkMark;
      if (!link.reference?.slug?.current) {
        return <span>{children}</span>;
      }
      
      // Determine the URL based on the reference type
      let href = `/${link.reference.slug.current}/`;
      if (link.reference._type === "servicePage") {
        href = `/services/${link.reference.slug.current}/`;
      }
      
      return (
        <Link
          href={href}
          className="text-heritage-blue hover:text-best-red underline transition-colors"
        >
          {children}
        </Link>
      );
    },
  },
  types: {
    image: ({ value }) => {
      const image = value as ImageBlock;
      if (!image?.asset) return null;
      
      return (
        <figure className="my-8">
          <div className="relative aspect-video">
            <Image
              src={urlFor(image).width(800).height(450).url()}
              alt={image.alt || ""}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          {image.caption && (
            <figcaption className="text-sm text-muted text-center mt-2">
              {image.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

interface PortableTextProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
}

export function PortableText({ value }: PortableTextProps) {
  if (!value) return null;
  return <SanityPortableText value={value} components={components} />;
}
