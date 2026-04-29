import { ReactNode, useRef } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useReveal } from "@/hooks/use-reveal";
import { useLocation } from "react-router-dom";

const SiteLayout = ({ children, hideFooter = false }: { children: ReactNode; hideFooter?: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);
  const location = useLocation();
  useReveal(ref, [location.pathname]);

  return (
    <div ref={ref} className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">{children}</main>
      {!hideFooter && <Footer />}
    </div>
  );
};

export default SiteLayout;
