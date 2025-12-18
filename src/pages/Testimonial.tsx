import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    id: 1,
    name: "Priya & Rahul Sharma",
    role: "Wedding Couple",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
    rating: 5,
    event: "Wedding",
    review: "A Miracle Event Planners truly made our dream wedding come true! From the stunning decorations to the flawless coordination, every detail was perfect. Our guests couldn't stop talking about how beautiful everything was.",
    date: "December 2024"
  },
  {
    id: 2,
    name: "Amit Patel",
    role: "Corporate Client",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
    rating: 5,
    event: "Corporate",
    review: "We hired them for our annual company event, and the professionalism was outstanding. The team handled everything seamlessly, from venue setup to guest management. Highly recommended for corporate events!",
    date: "November 2024"
  },
  {
    id: 3,
    name: "Sunita Agarwal",
    role: "Mother of the Birthday Girl",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
    rating: 5,
    event: "Birthday",
    review: "My daughter's 1st birthday was absolutely magical! The unicorn theme was executed beyond our expectations. The decorations, entertainment, and catering were all top-notch. Thank you for making her day so special!",
    date: "October 2024"
  },
  {
    id: 4,
    name: "Rajesh & Meena Kumar",
    role: "Anniversary Celebrants",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    rating: 5,
    event: "Anniversary",
    review: "Our 25th anniversary celebration was made unforgettable by this amazing team. They understood our vision and executed it flawlessly. The surprise elements they added made it even more special.",
    date: "September 2024"
  },
  {
    id: 5,
    name: "Vikram Singh",
    role: "Festival Organizer",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
    rating: 5,
    event: "Festival",
    review: "Organizing our community Diwali celebration was a breeze with A Miracle Event Planners. They brought in amazing vendors, managed the crowd perfectly, and created an atmosphere that everyone loved.",
    date: "October 2024"
  },
  {
    id: 6,
    name: "Neha Gupta",
    role: "Bride",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&q=80",
    rating: 5,
    event: "Wedding",
    review: "From sangeet to vidaai, every function was perfectly planned. The attention to detail, the beautiful decor, and the coordination between vendors was impeccable. They made my wedding week stress-free!",
    date: "November 2024"
  }
];

const featuredTestimonial = testimonials[0];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? "text-gold fill-gold" : "text-muted-foreground"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0 gradient-bg opacity-5" />
        <div className="absolute top-10 right-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-6 px-4 py-2 text-sm font-medium gradient-bg border-0">
              <MessageSquare className="w-4 h-4 mr-2" />
              Testimonials
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
              What Our <span className="gradient-text">Clients</span>
              <br />
              Say About Us
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Real stories from real families who trusted us with their most precious moments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 gradient-bg rounded-3xl opacity-10 blur-xl" />
            <Card className="relative border-0 shadow-card overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-shrink-0">
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="relative"
                    >
                      <div className="absolute -inset-2 gradient-bg rounded-full opacity-30 blur-md" />
                      <Avatar className="w-32 h-32 md:w-40 md:h-40 border-4 border-background shadow-xl">
                        <AvatarImage src={featuredTestimonial.avatar} alt={featuredTestimonial.name} />
                        <AvatarFallback className="text-2xl gradient-bg text-primary-foreground">
                          {featuredTestimonial.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                    </motion.div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <Quote className="w-12 h-12 text-primary/20 mb-4 mx-auto md:mx-0" />
                    <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-6 font-medium">
                      "{featuredTestimonial.review}"
                    </p>
                    <div className="flex items-center gap-2 justify-center md:justify-start mb-3">
                      {renderStars(featuredTestimonial.rating)}
                    </div>
                    <h3 className="text-xl font-display font-bold">{featuredTestimonial.name}</h3>
                    <p className="text-muted-foreground">{featuredTestimonial.role}</p>
                    <Badge variant="outline" className="mt-2">
                      {featuredTestimonial.event} • {featuredTestimonial.date}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Carousel */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              More <span className="gradient-text">Happy Clients</span>
            </h2>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <Card className="border-0 shadow-card">
                    <CardContent className="p-8 md:p-10 text-center">
                      <Avatar className="w-20 h-20 mx-auto mb-6 border-2 border-primary/20">
                        <AvatarImage src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].name} />
                        <AvatarFallback className="gradient-bg text-primary-foreground">
                          {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex items-center gap-1 justify-center mb-4">
                        {renderStars(testimonials[currentIndex].rating)}
                      </div>
                      <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                        "{testimonials[currentIndex].review}"
                      </p>
                      <h3 className="text-lg font-display font-bold">{testimonials[currentIndex].name}</h3>
                      <p className="text-muted-foreground text-sm">{testimonials[currentIndex].role}</p>
                      <Badge variant="outline" className="mt-3">
                        {testimonials[currentIndex].event}
                      </Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-background border border-border rounded-full flex items-center justify-center shadow-card hover:shadow-hover transition-shadow"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-background border border-border rounded-full flex items-center justify-center shadow-card hover:shadow-hover transition-shadow"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? "gradient-bg w-8" 
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              All <span className="gradient-text">Reviews</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="h-full border-0 shadow-card hover:shadow-hover transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Avatar className="w-12 h-12 border-2 border-primary/20">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback className="gradient-bg text-primary-foreground text-sm">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 mb-3">
                      {renderStars(testimonial.rating)}
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      "{testimonial.review}"
                    </p>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">
                        {testimonial.event}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{testimonial.date}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 gradient-bg brightness-[0.25] backdrop-blur-[2px]" />
            <div className="relative z-10 py-16 px-8 text-center">
              <Sparkles className="w-12 h-12 text-primary-foreground/80 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
                Ready to Create Your Own Story?
              </h2>
              <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
                Join our family of happy clients and let us help you create unforgettable memories.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-background text-foreground rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
              >
                Start Planning Your Event
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
