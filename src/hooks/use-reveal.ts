import { useEffect } from "react";

/**
 * Observes elements with the `.reveal` class and toggles `.in-view`
 * once they cross into the viewport. Cinematic, slow, one-shot.
 */
export function useReveal(root: React.RefObject<HTMLElement> | null = null, deps: unknown[] = []) {
  useEffect(() => {
    const scope: ParentNode = root?.current ?? document;
    const els = scope.querySelectorAll<HTMLElement>(".reveal");
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
