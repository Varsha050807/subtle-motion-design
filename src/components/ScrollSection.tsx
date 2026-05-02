import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollSection = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const panelsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Filter out any null refs just in case
            const panels = panelsRef.current.filter(Boolean) as HTMLDivElement[];
            
            // We want to animate all panels EXCEPT the first one
            const panelsToAnimate = panels.slice(1);

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=300%", // Provides 300vh of scroll distance
                    scrub: 1, // 1-second lag for a smooth, premium feel
                    pin: true,
                },
            });

            // Animate opacity of each subsequent panel so it fades over the previous one
            panelsToAnimate.forEach((panel) => {
                tl.to(panel, {
                    opacity: 1,
                    duration: 1,
                    ease: "none", // Linear fade
                });
            });
        }, containerRef);

        return () => ctx.revert(); // Automatically cleans up GSAP instances
    }, []);

    return (
        <section ref={containerRef} className="relative h-screen w-full bg-black overflow-hidden">
            {/* PANEL 1 - Visible initially (base layer) */}
            <div 
                ref={(el) => { panelsRef.current[0] = el; }}
                className="absolute inset-0 z-10"
            >
                <img src="/images/img1.jpeg" className="w-full h-full object-cover" alt="Image 1" />
            </div>

            {/* PANEL 2 - Hidden initially, fades over Panel 1 */}
            <div 
                ref={(el) => { panelsRef.current[1] = el; }}
                className="absolute inset-0 z-20 opacity-0"
            >
                <img src="/images/img2.jpeg" className="w-full h-full object-cover" alt="Image 2" />
            </div>

            {/* PANEL 3 - Hidden initially, fades over Panel 2 */}
            <div 
                ref={(el) => { panelsRef.current[2] = el; }}
                className="absolute inset-0 z-30 opacity-0"
            >
                <img src="/images/img3.jpg" className="w-full h-full object-cover" alt="Image 3" />
            </div>
        </section>
    );
};

export default ScrollSection;