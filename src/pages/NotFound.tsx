import SiteLayout from "@/components/SiteLayout";
import { Link } from "react-router-dom";

const NotFound = () => (
  <SiteLayout>
    <section className="container min-h-[80vh] flex flex-col items-center justify-center text-center pt-32">
      <p className="reveal text-[11px] uppercase tracking-[0.3em] text-muted-foreground">404</p>
      <h1 className="reveal mt-6 font-serif text-5xl md:text-7xl leading-[1.05] balance max-w-3xl">
        This page could not be located.
      </h1>
      <p className="reveal mt-6 text-muted-foreground max-w-md">
        The address you sought does not exist in our chambers.
      </p>
      <Link
        to="/"
        className="reveal mt-10 inline-flex items-center text-xs uppercase tracking-[0.25em] border-b border-foreground/40 pb-1 transition-opacity duration-700 hover:opacity-70"
      >
        Return home
      </Link>
    </section>
  </SiteLayout>
);

export default NotFound;
