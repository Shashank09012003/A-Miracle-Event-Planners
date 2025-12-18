import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, Cake, Sparkles, Building2 } from "lucide-react";

const EventCategories = () => {
  const categories = [
    {
      icon: Heart,
      title: "Weddings",
      description: "Complete Shadi planning with Sangeet, Mehndi, Halal workflows",
      gradient: "gradient-wedding",
      iconEmoji: "💍",
    },
    {
      icon: Cake,
      title: "Birthdays & Anniversary",
      description: "Memorable birthday & anniversary celebrations ",
      gradient: "gradient-birthday",
      iconEmoji: "🎂💝",
    },
    {
      icon: Sparkles,
      title: "Festivals",
      description: "Traditional Puja and festival celebrations with cultural elements",
      gradient: "gradient-festival",
      iconEmoji: "🪔",
    },
    {
      icon: Building2,
      title: "Corporate",
      description: "Professional events, conferences and corporate celebrations",
      gradient: "gradient-corporate",
      iconEmoji: "🏢",
    },
    {
      icon: Building2,
      title: "Football Events",
      description: "Professional football tournaments with team management and official hosting",
      gradient: "gradient-football",
      iconEmoji: "⚽👟",
    },
    
  ];

  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Perfect for Every Celebration
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized templates and workflows for different event types
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Link to="/services" className="block group">
                  <div
                    className={`${category.gradient} rounded-3xl p-8 h-full min-h-[280px] shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}
                  >
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white blur-3xl" />
                      <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white blur-2xl" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                        {category.iconEmoji}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {category.title}
                      </h3>
                      <p className="text-white/90 leading-relaxed text-sm">
                        {category.description}
                      </p>
                    </div>

                    {/* Hover arrow */}
                    <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <span className="text-white text-xl">→</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EventCategories;