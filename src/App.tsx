import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom"; // BrowserRouter hatao

import Index from "./pages/Index";
import Services from "./pages/Services";
import BookEvent from "./pages/BookEvent";
import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/NotFound";

// ⭐ NEW IMPORTS
import About from "./pages/AboutUs";
import Gallery from "./pages/Gallery";
import Testimonials from "./pages/Testimonial";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* BrowserRouter yahan se REMOVE karo */}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/services" element={<Services />} />
        <Route path="/book-event" element={<BookEvent />} />
        <Route path="/portfolio" element={<Portfolio />} />
        
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/testimonials" element={<Testimonials />} />

        <Route path="/login" element={<BookEvent />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* closing BrowserRouter tag bhi hatao */}
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;