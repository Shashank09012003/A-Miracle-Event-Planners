import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Weddings",
      gradient: "gradient-wedding",
      icon: "💍",
      description: "Complete Shadi planning with traditional ceremonies",
      features: [
        "Sangeet & Mehndi planning",
        "Halal ceremony workflows",
        "Vendor coordination",
        "Guest management",
        "Budget tracking",
        "Timeline management",
      ],
      price: "Starting from $2,999",
    },
    {
      title: "Birthdays & Anniversary",
      gradient: "gradient-birthday",
      icon: "🎂💝",
      description:
        "Memorable birthday and anniversary celebrations for all ages",
      features: [
        "Custom theme design",
        "Venue decoration",
        "Entertainment booking",
        "Catering arrangements",
        "Photography & videography",
        "Guest invitations",
      ],
      price: "Starting from $499",
    },
    {
      title: "Festivals",
      gradient: "gradient-festival",
      icon: "🪔",
      description: "Traditional Puja and festival celebrations",
      features: [
        "Religious ceremony planning",
        "Cultural element integration",
        "Priest coordination",
        "Traditional decoration",
        "Community gathering management",
        "Food & prasad arrangements",
      ],
      price: "Starting from $799",
    },
    {
      title: "Corporate Events",
      gradient: "gradient-corporate",
      icon: "🏢",
      description: "Professional events and conferences",
      features: [
        "Conference planning",
        "Team building events",
        "Product launches",
        "Annual celebrations",
        "Professional networking",
        "Brand activation events",
      ],
      price: "Custom pricing",
    },
    {
      title: "Football Events",
      gradient: "bg-gradient-to-br from-green-600 via-lime-500 to-emerald-600",
      icon: "⚽👟👕",
      description: "Professional football tournaments and team management",
      features: [
        "Certified referee services",
        "Breakfast & lunch arrangements",
        "Football kits & jerseys",
        "Complete team management",
        "Tie-up with Madhya Pradesh Football Association",
        "Official tournament hosting & third-party events",
      ],
      price: "Custom pricing",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-background to-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Our Event Planning{" "}
                <span className="text-gradient">Services</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Specialized planning and execution for every type of celebration
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-card rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                    {/* Header with gradient */}
                    <div
                      className={`${service.gradient} p-8 relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white blur-3xl" />
                      </div>
                      <div className="relative z-10">
                        <div className="text-5xl mb-4">{service.icon}</div>
                        <h2 className="text-3xl font-bold text-white mb-2">
                          {service.title}
                        </h2>
                        <p className="text-white/90">{service.description}</p>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="p-8 flex-grow">
                      <ul className="space-y-4 mb-6">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="pt-6 border-t border-border">
                        <p className="text-2xl font-bold text-gradient mb-6">
                          {service.price}
                        </p>
                        <Button
                          className="w-full gradient-warm text-white group-hover:shadow-xl transition-all duration-300"
                          asChild
                        >
                          <Link to="/book-event">
                            Book Now
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Not Sure Which Service You Need?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our event planning experts are here to help you choose the
                perfect package for your celebration
              </p>
              <Button size="lg" variant="outline" asChild>
                <Link to="/book-event">
                  Talk to an Expert
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
