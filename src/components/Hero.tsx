import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Play, Plus, X } from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/hero-wedding.jpg";

const Hero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const stats = [
    { value: "100+", label: "Events Planned" },
    { value: "5k+", label: "Happy Guests" },
    { value: "500+", label: "Trusted Vendors" },
  ];

  return (
    <>
      <section className="relative py-12 md:py-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Plan events{" "}
                  <span className="text-gradient">effortlessly</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                  Shadi, Birthday, Festivals & more — Create unforgettable moments with our comprehensive event planning platform
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="gradient-warm text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <Link to="/book-event">
                    <Plus className="w-5 h-5 mr-2" />
                    Create Event
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  onClick={() => setIsVideoOpen(true)}
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 pt-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="space-y-1"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-gradient">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Image with Logo Watermark */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500">
                <img
                  src={heroImage}
                  alt="Beautiful wedding ceremony with traditional decorations"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                
                {/* Logo Watermark - Bottom Left (No Background) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="absolute bottom-6 left-6 z-10"
                >
                  <img 
                    src="/LOGO.png" 
                    alt="A Miracle Event Planners" 
                    className="w-24 h-24 object-contain drop-shadow-2xl"
                  />
                </motion.div>
              </div>
              
              {/* Floating decorative elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-24 h-24 rounded-full gradient-festival opacity-20 blur-2xl"
              />
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full gradient-wedding opacity-20 blur-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 pt-32 pb-8"
          onClick={() => setIsVideoOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-2xl mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-16 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Video Player */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
              <video
                className="w-full h-auto"
                controls
                autoPlay
                src="/introvideo.MP4"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Hero;