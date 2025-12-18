import { motion } from "framer-motion";
import { Camera, UtensilsCrossed, Sparkles, Music, Church, Building2 } from "lucide-react";

const VendorNetwork = () => {
  const vendors = [
    { icon: Camera, name: "Photography", color: "text-gold" },
    { icon: UtensilsCrossed, name: "Catering", color: "text-gold" },
    { icon: Sparkles, name: "Decoration", color: "text-gold" },
    { icon: Music, name: "DJ , Music & Artist", color: "text-gold" },
    { icon: Church, name: "Priest", color: "text-gold" },
    { icon: Building2, name: "Venues", color: "text-gold" },
  ];

  return (
    <section id="vendors" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted Vendor Network
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with verified professionals for every aspect of your event
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {vendors.map((vendor, index) => {
            const Icon = vendor.icon;
            return (
              <motion.div
                key={vendor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group cursor-pointer"
              >
                <div className="bg-card rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center h-full flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold/10 to-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className={`w-8 h-8 ${vendor.color}`} />
                  </div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {vendor.name}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VendorNetwork;
