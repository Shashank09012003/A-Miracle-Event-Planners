import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, Heart, Camera } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const categories = ["All", "Weddings", "Birthdays", "Corporate", "Festivals"];

const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    category: "Weddings",
    title: "Grand Wedding Ceremony",
    description: "A beautiful traditional wedding celebration"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
    category: "Birthdays",
    title: "Colorful Birthday Party",
    description: "Festive birthday celebration with balloons"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    category: "Corporate",
    title: "Corporate Conference",
    description: "Professional business event setup"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
    category: "Festivals",
    title: "Diwali Celebration",
    description: "Beautiful festival of lights decoration"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
    category: "Weddings",
    title: "Beach Wedding",
    description: "Romantic seaside wedding ceremony"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&q=80",
    category: "Birthdays",
    title: "Kids Birthday Bash",
    description: "Fun-filled children's party setup"
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80",
    category: "Corporate",
    title: "Product Launch",
    description: "Grand product launch event"
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80",
    category: "Festivals",
    title: "Holi Festival",
    description: "Colorful Holi celebration event"
  },
  {
    id: 9,
    url: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&q=80",
    category: "Weddings",
    title: "Sangeet Night",
    description: "Vibrant sangeet dance celebration"
  },
  {
    id: 10,
    url: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800&q=80",
    category: "Birthdays",
    title: "Milestone Birthday",
    description: "Elegant adult birthday celebration"
  },
  {
    id: 11,
    url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
    category: "Corporate",
    title: "Award Ceremony",
    description: "Prestigious corporate awards night"
  },
  {
    id: 12,
    url: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=800&q=80",
    category: "Festivals",
    title: "Navratri Celebration",
    description: "Traditional Navratri garba night"
  }
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredImages = activeCategory === "All"
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-5" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-6 px-4 py-2 text-sm font-medium gradient-bg border-0">
              <Camera className="w-4 h-4 mr-2" />
              Our Gallery
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
              Captured{" "}
              <span className="gradient-text">Moments</span>
              <br />
              Of Joy
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our collection of beautiful events and celebrations we've had the 
              privilege to plan and execute.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 sticky top-0 bg-background/80 backdrop-blur-lg z-40 border-b border-border">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "gradient-bg text-primary-foreground shadow-glow"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onHoverStart={() => setHoveredId(image.id)}
                  onHoverEnd={() => setHoveredId(null)}
                  onClick={() => setSelectedImage(image)}
                  className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group"
                >
                  <motion.img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  {/* Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredId === image.id ? 1 : 0 }}
                    className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent"
                  />
                  
                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: hoveredId === image.id ? 1 : 0,
                      y: hoveredId === image.id ? 0 : 20
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 right-0 p-5"
                  >
                    <Badge className="mb-2 gradient-bg border-0 text-xs">
                      {image.category}
                    </Badge>
                    <h3 className="text-primary-foreground font-semibold text-lg mb-1">
                      {image.title}
                    </h3>
                    <p className="text-primary-foreground/70 text-sm">
                      {image.description}
                    </p>
                  </motion.div>

                  {/* Zoom Icon */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ 
                      opacity: hoveredId === image.id ? 1 : 0,
                      scale: hoveredId === image.id ? 1 : 0.5
                    }}
                    className="absolute top-4 right-4 w-10 h-10 bg-background/90 rounded-full flex items-center justify-center"
                  >
                    <ZoomIn className="w-5 h-5 text-foreground" />
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-foreground/90 backdrop-blur-lg z-50 flex items-center justify-center p-4"
          >
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute top-6 right-6 w-12 h-12 bg-background/10 rounded-full flex items-center justify-center text-primary-foreground hover:bg-background/20 transition-colors"
            >
              <X className="w-6 h-6" />
            </motion.button>
            
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full"
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-2xl"
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-foreground/80 to-transparent rounded-b-2xl"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <Badge className="mb-2 gradient-bg border-0">
                      {selectedImage.category}
                    </Badge>
                    <h3 className="text-2xl font-display font-bold text-primary-foreground">
                      {selectedImage.title}
                    </h3>
                    <p className="text-primary-foreground/70">
                      {selectedImage.description}
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-background/20 rounded-full flex items-center justify-center"
                  >
                    <Heart className="w-6 h-6 text-primary-foreground" />
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Every Image Tells a <span className="gradient-text">Story</span>
            </h2>
            <p className="text-muted-foreground mb-12">
              Each photograph in our gallery represents a moment of joy, celebration, 
              and the trust families placed in us to make their events perfect.
            </p>
            <div className="grid grid-cols-3 gap-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <span className="text-4xl md:text-5xl font-bold gradient-text block mb-2">500+</span>
                <span className="text-muted-foreground">Events Captured</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <span className="text-4xl md:text-5xl font-bold gradient-text block mb-2">10K+</span>
                <span className="text-muted-foreground">Photos Taken</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <span className="text-4xl md:text-5xl font-bold gradient-text block mb-2">100%</span>
                <span className="text-muted-foreground">Happy Clients</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
