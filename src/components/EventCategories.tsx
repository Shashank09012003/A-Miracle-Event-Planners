import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, Cake, Sparkles, Building2 } from "lucide-react";

const EventCategories = () => {
  const categories = [
    {
      icon: Heart,
      title: "Wedding Planning",
      description: "Best wedding planner in Jabalpur. Complete Shaadi planning with Sangeet, Mehndi, and traditional ceremonies",
      gradient: "gradient-wedding",
      iconEmoji: "💍",
    },
    {
      icon: Cake,
      title: "Birthday & Anniversary",
      description: "Professional birthday party planner and organizer. Memorable celebration services for all ages",
      gradient: "gradient-birthday",
      iconEmoji: "🎂💝",
    },
    {
      icon: Sparkles,
      title: "Festival Events",
      description: "Traditional Puja and cultural festival event management services with authentic Indian elements",
      gradient: "gradient-festival",
      iconEmoji: "🪔",
    },
    {
      icon: Building2,
      title: "Corporate Events",
      description: "Corporate event planner in Jabalpur. Professional conferences, seminars, and business celebrations",
      gradient: "gradient-corporate",
      iconEmoji: "🏢",
    },
    {
      icon: Building2,
      title: "Sports Events",
      description: "Professional football tournaments and sports event management with team coordination",
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
          {/* H2 with Keywords */}
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Event Management Services in Jabalpur, MP
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Leading event organisers in Jabalpur offering wedding planning, birthday parties, corporate events, and festival celebrations across Madhya Pradesh
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