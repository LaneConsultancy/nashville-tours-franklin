"use client";

/**
 * AnimateOnScroll — safe, additive scroll enhancement.
 *
 * Critical contract:
 * - Children render IMMEDIATELY at full opacity and no transform.
 *   Animation is purely additive polish — it never gates visibility.
 * - The motion-reduce media query disables all transforms for users
 *   who prefer reduced motion.
 * - IntersectionObserver adds a class that plays a subtle translateY
 *   movement. The class is applied once via data-animated to prevent
 *   re-triggering on scroll back.
 *
 * Usage:
 *   <AnimateOnScroll>
 *     <YourContent />
 *   </AnimateOnScroll>
 *
 *   <AnimateOnScroll delay={100} className="...">
 *     <YourContent />
 *   </AnimateOnScroll>
 */

import { useEffect, useRef } from "react";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  /** Delay before the entrance movement plays (ms). Default: 0 */
  delay?: number;
  /** Additional className for the wrapper div */
  className?: string;
  /**
   * How far the element must enter the viewport before triggering.
   * 0.1 = 10% visible. Default: 0.12
   */
  threshold?: number;
}

export default function AnimateOnScroll({
  children,
  delay = 0,
  className = "",
  threshold = 0.12,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect prefers-reduced-motion — skip all transforms
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    // Mark as ready for animation (CSS uses this to apply will-change)
    el.setAttribute("data-animate-ready", "true");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Only fire once — skip if already animated
          if (entry.isIntersecting && !el.hasAttribute("data-animated")) {
            el.setAttribute("data-animated", "true");

            // Apply delay via a short setTimeout so staggered siblings
            // don't all fire in the same rAF and cause layout thrash
            const timer = setTimeout(() => {
              el.classList.add("aos-in");
            }, delay);

            // Clean up the observer once triggered
            observer.unobserve(el);

            // Cleanup function can't reach this timer, so store on el
            el.dataset.animTimer = String(timer);
          }
        });
      },
      {
        threshold,
        // Start checking slightly before the element enters the viewport
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      // Clear any pending timer
      const timerId = el.dataset.animTimer;
      if (timerId) clearTimeout(Number(timerId));
    };
  }, [delay, threshold]);

  return (
    <div ref={ref} className={`aos-element ${className}`}>
      {children}
    </div>
  );
}
