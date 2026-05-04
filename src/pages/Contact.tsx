import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "lenis";
import SiteLayout from "@/components/SiteLayout";
import { toast } from "sonner";

function ContactHero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const spotlightX = useSpring(mouseX, { damping: 30, stiffness: 100 });
  const spotlightY = useSpring(mouseY, { damping: 30, stiffness: 100 });

  return (
    <section
      className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-[#27445D] text-[#F7F5EF] cursor-crosshair pt-20"
      onMouseMove={handleMouseMove}
    >
      {/* Reactive Spotlight Glow */}
      <motion.div
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none mix-blend-screen z-0"
        style={{
          background: "radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 60%)",
          x: spotlightX,
          y: spotlightY,
          translateX: "-50%",
          translateY: "-50%"
        }}
      />

      {/* Subtle Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        <motion.div
          className="absolute top-[20%] left-[10%] w-[40vw] h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-[70%] left-[30%] w-[60vw] h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"
          animate={{ x: ["200%", "-100%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        {/* Abstract Geometry */}
        <motion.div
          className="absolute top-[10%] right-[5%] w-[40vw] h-[40vw] border border-white/5 rounded-full"
          animate={{ rotate: 360, scale: [1, 1.05, 1] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container relative z-10 text-center">
        <h1 className="text-5xl md:text-[8rem] leading-[0.9] font-serif tracking-tight flex flex-col items-center">
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Begin a dialogue.
          </motion.span>
        </h1>
        <motion.p
          className="mt-12 text-lg md:text-2xl max-w-3xl mx-auto text-[#ECE8DF]/70 font-light leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
        >
          Precision communication. Absolute discretion.
        </motion.p>
      </div>
    </section>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [0, 800], [5, -5]);
  const rotateY = useTransform(mouseX, [0, 800], [-5, 5]);
  const springRotateX = useSpring(rotateX, { damping: 30, stiffness: 100 });
  const springRotateY = useSpring(rotateY, { damping: 30, stiffness: 100 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    // Assuming form is centered, we calculate relative to the form's center
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    // Normalize values roughly
    mouseX.set(x + 400); 
    mouseY.set(y + 400);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    toast.success("Message received.");
    e.currentTarget.reset();
    setTimeout(() => setSent(false), 2000);
  };

  return (
    <section className="py-32 px-4 md:px-8 relative z-10 flex justify-center bg-[#F7F5EF] overflow-hidden">
      
      {/* Ambient Moving Elements for Form Section */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <motion.div
          className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] blur-[120px] rounded-full mix-blend-multiply"
          style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)' }}
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[10%] right-[5%] w-[50vw] h-[50vw] blur-[120px] rounded-full mix-blend-multiply"
          style={{ background: 'radial-gradient(circle, rgba(39,68,93,0.06) 0%, transparent 70%)' }}
          animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        className="w-full max-w-3xl relative"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {
          mouseX.set(400);
          mouseY.set(400);
        }}
        style={{ perspective: 1200 }}
      >
        <motion.div
          className="group relative bg-[#ffffff]/70 backdrop-blur-xl border border-[#0D2342]/10 p-10 md:p-16 shadow-[0_40px_100px_rgba(0,0,0,0.05)] overflow-hidden"
          style={{ rotateX: springRotateX, rotateY: springRotateY }}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Glass Reflection Sweep */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -skew-x-12 pointer-events-none z-0"
            variants={{
              rest: { left: "-100%" },
              hover: { left: "200%" }
            }}
            initial="rest"
            whileHover="hover"
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          <form onSubmit={onSubmit} className="relative z-10 space-y-12">
            {["Name", "Email", "Subject"].map((f) => (
              <div key={f} className="relative">
                <input
                  required
                  id={f}
                  placeholder=" "
                  onFocus={() => setFocusedField(f)}
                  onBlur={() => setFocusedField(null)}
                  className="peer w-full border-b border-[#0D2342]/20 bg-transparent py-4 text-[#0D2342] text-lg outline-none focus:border-transparent transition-colors"
                />
                <label 
                  htmlFor={f}
                  className="absolute left-0 top-4 text-[#0D2342]/50 text-lg transition-all duration-300 pointer-events-none
                  peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#D4AF37] peer-focus:tracking-[0.2em] peer-focus:uppercase
                  peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-[#5E748E] peer-not-placeholder-shown:tracking-[0.2em] peer-not-placeholder-shown:uppercase"
                >
                  {f}
                </label>
                {/* Animated Underline */}
                <motion.div 
                  className="absolute bottom-0 left-0 h-[1px] bg-[#D4AF37]"
                  initial={{ width: "0%" }}
                  animate={{ width: focusedField === f ? "100%" : "0%" }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </div>
            ))}

            <div className="relative">
              <textarea
                required
                id="Message"
                rows={4}
                placeholder=" "
                onFocus={() => setFocusedField("Message")}
                onBlur={() => setFocusedField(null)}
                className="peer w-full border-b border-[#0D2342]/20 bg-transparent py-4 text-[#0D2342] text-lg outline-none focus:border-transparent transition-colors resize-none"
              />
              <label 
                htmlFor="Message"
                className="absolute left-0 top-4 text-[#0D2342]/50 text-lg transition-all duration-300 pointer-events-none
                peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#D4AF37] peer-focus:tracking-[0.2em] peer-focus:uppercase
                peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-[#5E748E] peer-not-placeholder-shown:tracking-[0.2em] peer-not-placeholder-shown:uppercase"
              >
                Message
              </label>
              {/* Animated Underline */}
              <motion.div 
                className="absolute bottom-0 left-0 h-[1px] bg-[#D4AF37]"
                initial={{ width: "0%" }}
                animate={{ width: focusedField === "Message" ? "100%" : "0%" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </div>

            <div className="flex justify-between items-center pt-8 border-t border-[#0D2342]/10 mt-12">
              <span className="text-xs tracking-[0.2em] text-[#5E748E] uppercase">
                Strictly Confidential
              </span>

              <button type="submit" className="group flex items-center gap-4 text-sm uppercase tracking-[0.3em] text-[#0D2342] font-medium relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  {sent ? "Message Sent" : "Send Message"}
                  <motion.span 
                    className="inline-block"
                    variants={{
                      rest: { x: 0 },
                      hover: { x: 5 }
                    }}
                    initial="rest"
                    whileHover="hover"
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    →
                  </motion.span>
                </span>
                {/* Gold Underline Draw */}
                <motion.div
                  className="absolute bottom-0 left-0 h-[1px] bg-[#D4AF37]"
                  variants={{
                    rest: { width: "0%" },
                    hover: { width: "100%" }
                  }}
                  initial="rest"
                  whileHover="hover"
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                />
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}

function ContactMap() {
  return (
    <section className="relative h-[60vh] overflow-hidden bg-[#27445D]">
      {/* Map iframe with scale animation */}
      <motion.iframe
        src="https://maps.google.com/maps?q=New%20Delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
        className="absolute inset-0 w-full h-full border-none grayscale contrast-125 brightness-90"
        initial={{ scale: 1.15 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Dark blue overlay to match theme */}
      <div className="absolute inset-0 bg-[#27445D]/40 mix-blend-multiply pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#27445D] via-transparent to-transparent opacity-80 pointer-events-none" />

      {/* Floating Glass Info Card */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-xl px-12 py-8 shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-white/50 text-center"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-[#5E748E] mb-3">
          Office
        </p>
        <p className="font-serif text-2xl text-[#0D2342]">
          New Delhi, India
        </p>
      </motion.div>
    </section>
  );
}

export default function Contact() {
  useEffect(() => {
    // Lenis Smooth Scroll Setup for this page
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <SiteLayout>
      <div className="bg-[#F7F5EF] min-h-screen">
        <ContactHero />
        <ContactForm />
        <ContactMap />
      </div>
    </SiteLayout>
  );
}