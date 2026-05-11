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
import IPInsights from "./pages/IPInsights.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Team from "./pages/Team.tsx";
import Newsletter from "./pages/Newsletter.tsx";
import SubscriptionModel from "./pages/SubscriptionModel.tsx";
import { MessageCircle } from "lucide-react";

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

            <span>|</span>

            <a
              href="https://wa.me/917019979704"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25D366] hover:scale-110 transition-all duration-300 flex items-center"
            >
              <a
                href="https://wa.me/917019979704"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#25D366] hover:scale-110 transition-all duration-300 flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  width="18"
                  height="18"
                  fill="currentColor"
                >
                  <path d="M16 .396C7.163.396 0 7.558 0 16.396c0 2.89.756 5.714 2.188 8.204L0 32l7.597-2.155a15.92 15.92 0 0 0 8.403 2.35c8.837 0 16-7.162 16-16S24.837.396 16 .396zm0 29.29c-2.52 0-4.99-.675-7.147-1.953l-.51-.302-4.51 1.278 1.203-4.395-.332-.535A13.44 13.44 0 0 1 2.56 16.396c0-7.407 6.033-13.44 13.44-13.44 7.407 0 13.44 6.033 13.44 13.44 0 7.407-6.033 13.29-13.44 13.29zm7.41-9.984c-.405-.203-2.4-1.185-2.772-1.32-.372-.135-.643-.203-.914.203-.27.405-1.05 1.32-1.29 1.59-.237.27-.473.304-.878.102-.405-.203-1.71-.63-3.258-2.01-1.204-1.073-2.016-2.397-2.25-2.802-.237-.405-.025-.624.178-.826.183-.182.405-.473.608-.71.203-.237.27-.405.405-.675.135-.27.068-.507-.034-.71-.102-.203-.914-2.2-1.252-3.01-.33-.795-.667-.687-.914-.7l-.778-.014c-.27 0-.71.102-1.083.507-.372.405-1.42 1.39-1.42 3.39 0 2 .15 3.507 1.45 5.507 1.3 2 3.4 4.5 6.7 5.9 3.3 1.4 3.3.93 3.9.87.6-.06 2.4-.98 2.7-1.93.3-.95.3-1.76.2-1.93-.1-.17-.37-.27-.78-.47z" />
                </svg>
              </a>
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
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/subscription-model" element={<SubscriptionModel />} />
          <Route path="/ip-insights" element={<IPInsights />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* ✅ FLOATING WHATSAPP BUTTON */}
        <a
          href="https://wa.me/917019979704"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#25D366] hover:scale-110 transition-all duration-300 flex items-center"
        >
          <MessageCircle size={18} />
        </a>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
