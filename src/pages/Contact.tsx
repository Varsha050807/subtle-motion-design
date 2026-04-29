import SiteLayout from "@/components/SiteLayout";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    toast.success("Thank you. A partner will be in touch shortly.");
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSent(false), 1200);
  };

  return (
    <SiteLayout>
      <section className="container pt-40 pb-16">
        <p className="reveal text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Contact</p>
        <h1 className="reveal mt-6 font-serif text-5xl md:text-7xl leading-[1.05] balance max-w-4xl">
          Begin a private conversation.
        </h1>
        <p className="reveal mt-8 max-w-2xl text-muted-foreground leading-relaxed">
          Engagements begin with a single letter. Tell us what you have built; we will respond within
          two business days, in the hand of a partner.
        </p>
      </section>

      <div className="hairline container" />

      <section className="container py-20 md:py-28 grid md:grid-cols-12 gap-12">
        <div className="reveal reveal-left md:col-span-5 space-y-10">
          <div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-3">Office</div>
            <p className="font-serif text-xl leading-relaxed">
              12 Court Chambers<br />New Delhi, India 110001
            </p>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-3">Correspondence</div>
            <a href="mailto:hello@avimukta.law" className="font-serif text-xl nav-link">hello@avimukta.law</a>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-3">Hours</div>
            <p className="font-serif text-xl">Mon — Fri, 09:30 — 18:00 IST</p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="reveal reveal-right md:col-span-7 space-y-8">
          {[
            { id: "name", label: "Your name", type: "text" },
            { id: "email", label: "Email", type: "email" },
            { id: "subject", label: "Subject", type: "text" },
          ].map((f) => (
            <label key={f.id} className="block">
              <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{f.label}</span>
              <input
                required
                id={f.id}
                name={f.id}
                type={f.type}
                className="mt-3 w-full bg-transparent border-0 border-b border-border py-3 text-lg font-serif outline-none transition-colors duration-500 focus:border-foreground"
              />
            </label>
          ))}
          <label className="block">
            <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Message</span>
            <textarea
              required
              name="message"
              rows={5}
              className="mt-3 w-full bg-transparent border-0 border-b border-border py-3 text-lg font-serif outline-none transition-colors duration-500 focus:border-foreground resize-none"
            />
          </label>
          <button
            type="submit"
            disabled={sent}
            className="inline-flex items-center text-xs uppercase tracking-[0.25em] border-b border-foreground/40 pb-1 transition-opacity duration-700 hover:opacity-70 disabled:opacity-40"
          >
            {sent ? "Sending…" : "Send letter"}
          </button>
        </form>
      </section>
    </SiteLayout>
  );
};

export default Contact;
