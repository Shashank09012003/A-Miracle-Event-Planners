import { motion } from "framer-motion";
import { Lightbulb, Mail, TrendingUp, Sparkles } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: Lightbulb,
      title: "Plan Your Event",
      description: "Choose your event type - wedding, birthday, corporate, or festival. Our event management company in Jabalpur provides customized checklists and timelines.",
      gradient: "gradient-wedding",
    },
    {
      icon: Mail,
      title: "Send Invitations",
      description: "Professional digital invitations via WhatsApp, email or SMS with RSVP tracking for all your guests.",
      gradient: "gradient-birthday",
    },
    {
      icon: TrendingUp,
      title: "Track Progress",
      description: "Monitor RSVPs, manage budget, coordinate with vendors across Jabalpur and Madhya Pradesh, and track all event progress.",
      gradient: "gradient-festival",
    },
    {
      icon: Sparkles,
      title: "Execute Perfectly",
      description: "Run your event seamlessly with expert timeline management and real-time coordination from our experienced team.",
      gradient: "gradient-corporate",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
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
            How Our Event Planning Process Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional event organizer in Jabalpur - From planning to execution, we handle every detail of your marriage, birthday, or corporate event
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl ${step.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>

                  {/* Step number */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm font-bold text-muted-foreground">
                    {index + 1}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;