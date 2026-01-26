import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Class name merger with Tailwind deduplication
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Format phone number for display
export function formatPhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, "");
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }
  return phone;
}

// Format phone number for tel: link
export function phoneHref(phone: string): string {
  return `tel:+1${phone.replace(/\D/g, "")}`;
}

// Format date for display
export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Generate star rating display
export function starRating(rating: number): string {
  return "★".repeat(rating) + "☆".repeat(5 - rating);
}

// Truncate text with ellipsis
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + "...";
}

// Slugify a string
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Site metadata helper
export const siteConfig = {
  name: "Best Cleaners & Laundry",
  description: "Savannah's trusted dry cleaning and laundry service since 1910. Professional garment care with over 100 years of experience.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://bestcleanerssavannah.com",
  ogImage: "/images/GeneratedPhotosBC/HomepageImage.jpeg",
  keywords: [
    "dry cleaning",
    "laundry",
    "Savannah",
    "Georgia",
    "garment care",
    "dry cleaners near me",
    "professional cleaning",
  ],
};
