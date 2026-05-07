import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import Index from "./pages/Index.tsx";
import Services from "./pages/Services.tsx";
import About from "./pages/About.tsx";
import Blog from "./pages/Blog.tsx";
import BlogPost from "./pages/BlogPost.tsx";
import Contact from "./pages/Contact.tsx";
import IPHealth from "./pages/IPHealth.tsx";
import NotFound from "./pages/NotFound.tsx";
import Disclaimer from "./components/Disclaimer.tsx";
import Team from "./pages/Team.tsx";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Disclaimer />
        {/* 🔥 GLOBAL CONTACT BAR */}
        <div className="fixed top-0 left-0 w-full z-[200] 
bg-[#27445D]/90 backdrop-blur-md
text-[#ECE8DF] text-xs md:text-sm 
px-8 py-2 flex justify-center items-center 
tracking-wide border-b border-white/10">

          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">

            <a href="mailto:info@avimuktaip.com" className="hover:underline">
              info@avimuktaip.com
            </a>

            <span>|</span>

            <a href="mailto:avimuktaip@gmail.com" className="hover:underline">
              avimuktaip@gmail.com
            </a>

            <span>|</span>

            <a href="tel:+917019979704" className="hover:underline">
              +91 70199 79704
            </a>

            <span>|</span>

            <a href="tel:+917892312058" className="hover:underline">
              +91 7892 312058
            </a>

          </div>
        </div>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ip-health" element={<IPHealth />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
