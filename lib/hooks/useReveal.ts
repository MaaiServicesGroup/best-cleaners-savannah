"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface UseRevealOptions {
  /** Intersection threshold (0-1). Default: 0.1 */
  threshold?: number;
  /** Root margin for earlier/later triggering. Default: "0px 0px -40px 0px" */
  rootMargin?: string;
  /** Only trigger once. Default: true */
  once?: boolean;
  /** Disable animation (for reduced motion). Default: false */
  disabled?: boolean;
}

interface UseRevealReturn {
  ref: React.RefObject<HTMLElement | null>;
  isVisible: boolean;
}

/**
 * Lightweight Intersection Observer hook for viewport-triggered reveal animations.
 * 
 * Adds 'visible' class when element enters viewport. SEO-safe: content is always
 * in DOM, animations are purely visual enhancement.
 * 
 * @example
 * ```tsx
 * const { ref, isVisible } = useReveal();
 * return <section ref={ref} className={cn("reveal", isVisible && "visible")}>...</section>
 * ```
 */
export function useReveal(options: UseRevealOptions = {}): UseRevealReturn {
  const {
    threshold = 0.1,
    rootMargin = "0px 0px -40px 0px",
    once = true,
    disabled = false,
  } = options;

  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasTriggered = useRef(false);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      
      if (entry.isIntersecting) {
        setIsVisible(true);
        hasTriggered.current = true;
      } else if (!once && hasTriggered.current) {
        setIsVisible(false);
      }
    },
    [once]
  );

  useEffect(() => {
    // Skip if disabled or already triggered (for once mode)
    if (disabled || (once && hasTriggered.current)) {
      setIsVisible(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin,
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, once, disabled, handleIntersection]);

  return { ref, isVisible };
}

/**
 * Hook to check if user prefers reduced motion.
 * Useful for conditionally applying animations.
 */
export function usePrefersReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return prefersReducedMotion;
}
