import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { Terms } from "./pages/Terms";
import { Privacy } from "./pages/Privacy";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { ProductDetail } from "./pages/ProductDetail";
import Returns from "./pages/Returns";
import FAQ from "./pages/FAQ";
import Auth from "./pages/Auth";
import Account from "./pages/Account";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Antivirus from "./pages/Antivirus";
import Printers from "./pages/Printers";
import HotDeals from "./pages/HotDeals";
import Reviews from "./pages/Reviews";
import AffiliateDisclosure from "./pages/AffiliateDisclosure";
import SupportPromisePage from "./pages/SupportPromisePage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/antivirus" element={<Antivirus />} />
            <Route path="/printers" element={<Printers />} />
            <Route path="/hot-deals" element={<HotDeals />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/returns" element={<Returns />} />
            <Route path="/affiliate-disclosure" element={<AffiliateDisclosure />} />
            <Route path="/support-promise" element={<SupportPromisePage />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/account" element={<Account />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
