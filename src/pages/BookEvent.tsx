import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar as CalendarIcon, MapPin, Users, Sparkles, PartyPopper, CheckCircle2 } from "lucide-react";
import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";


const eventTypes = [
  "Wedding",
  "Birthday Party",
  "Corporate Event",
  "Anniversary",
  "Concert / Live Show",
  "Conference",
  "Private Gathering",
];

// ✅ CHANGE 1: Indian currency
const budgetRanges = [
  { value: "starter", label: "Starter", price: "₹50k – ₹2L" },
  { value: "premium", label: "Premium", price: "₹2L – ₹8L" },
  { value: "luxury", label: "Luxury", price: "₹8L+" },
];

const perks = [
  "Dedicated event planner",
  "End-to-end vendor coordination",
  "Custom theme & decor design",
  "On-site management team",
];


const BookEvent = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    location: "",
    guests: "",
    budget: "premium",
    details: "",
  });

  const update = (key: string, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.eventType || !date) {
      toast({
        title: "Missing details",
        description: "Please fill in your name, email, event type and date.",
        variant: "destructive",
      });
      return;
    }

    setSubmitted(true);
    toast({
      title: "Booking request received! 🎉",
      description: "Our team will reach out within 24 hours.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(45_93%_60%/0.4),transparent_50%)]" />
        <div className="relative container mx-auto px-4 py-24 md:py-32 text-center text-primary-foreground">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-6 bg-background/20 text-primary-foreground border-background/30 backdrop-blur">
              <Sparkles className="w-3 h-3 mr-1" />
              Let's plan something unforgettable
            </Badge>

            {/* ✅ CHANGE 3: Heading dark kiya — drop-shadow + text-white */}
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-lg text-white">
              Book Your <span className="italic">Dream</span> Event
            </h1>

            {/* ✅ CHANGE 3: Subtext bhi dark kiya — opacity hata ke text-white */}
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-white">
              Tell us about your vision and our team will craft an experience your guests will talk about for years.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + Perks */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <Card className="glass-card shadow-xl">
              <CardHeader>
                <CardTitle className="font-serif text-3xl">
                  {submitted ? "You're all set!" : "Event Details"}
                </CardTitle>
                <CardDescription>
                  {submitted
                    ? "We've received your request and will be in touch shortly."
                    : "The more we know, the better we can tailor your celebration."}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full gradient-bg mb-6">
                      <PartyPopper className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <h3 className="font-serif text-2xl font-semibold mb-3">
                      Thank you, {form.name.split(" ")[0]}!
                    </h3>
                    <p className="text-muted-foreground max-w-md mx-auto mb-6">
                      A dedicated planner will review your {form.eventType.toLowerCase()} request and
                      contact you at <span className="text-foreground font-medium">{form.email}</span> within 24 hours.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setSubmitted(false);
                        setForm({
                          name: "",
                          email: "",
                          phone: "",
                          eventType: "",
                          location: "",
                          guests: "",
                          budget: "premium",
                          details: "",
                        });
                        setDate(undefined);
                      }}
                    >
                      Book another event
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="Jane Doe"
                          value={form.name}
                          onChange={(e) => update("name", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="jane@example.com"
                          value={form.email}
                          onChange={(e) => update("email", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          placeholder="+91 98765 43210"
                          value={form.phone}
                          onChange={(e) => update("phone", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Event Type *</Label>
                        <Select
                          value={form.eventType}
                          onValueChange={(v) => update("eventType", v)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Choose an event" />
                          </SelectTrigger>
                          <SelectContent>
                            {eventTypes.map((t) => (
                              <SelectItem key={t} value={t}>
                                {t}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Event Date *</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full justify-start text-left font-normal",
                                !date && "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {date ? format(date, "PPP") : "Pick a date"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              disabled={(d) => d < new Date()}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="guests">
                          <Users className="inline w-4 h-4 mr-1" />
                          Guests
                        </Label>
                        <Input
                          id="guests"
                          type="number"
                          min={1}
                          placeholder="120"
                          value={form.guests}
                          onChange={(e) => update("guests", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location">
                        <MapPin className="inline w-4 h-4 mr-1" />
                        Location / Venue
                      </Label>
                      <Input
                        id="location"
                        placeholder="City, venue or 'help me choose'"
                        value={form.location}
                        onChange={(e) => update("location", e.target.value)}
                      />
                    </div>

                    <div className="space-y-3">
                      <Label>Budget Range</Label>
                      <RadioGroup
                        value={form.budget}
                        onValueChange={(v) => update("budget", v)}
                        className="grid sm:grid-cols-3 gap-3"
                      >
                        {budgetRanges.map((b) => (
                          <Label
                            key={b.value}
                            htmlFor={b.value}
                            className={cn(
                              "flex flex-col gap-1 rounded-lg border-2 p-4 cursor-pointer transition-all",
                              form.budget === b.value
                                ? "border-primary bg-primary/5"
                                : "border-border hover:border-primary/50"
                            )}
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-semibold">{b.label}</span>
                              <RadioGroupItem value={b.value} id={b.value} />
                            </div>
                            <span className="text-sm text-muted-foreground">{b.price}</span>
                          </Label>
                        ))}
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="details">Tell us about your vision</Label>
                      <Textarea
                        id="details"
                        rows={4}
                        placeholder="Theme ideas, must-haves, vibe..."
                        value={form.details}
                        onChange={(e) => update("details", e.target.value)}
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full gradient-bg text-primary-foreground hover:opacity-90 transition-opacity"
                    >
                      <Sparkles className="w-4 h-4 mr-2" />
                      Submit Booking Request
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* ✅ CHANGE 2: Sirf "What's Included" card rakha, "Schedule a call" card hataya */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-6"
          >
            <Card className="glass-card hover-lift">
              <CardHeader>
                <CardTitle className="font-serif text-2xl gradient-text">
                  What's Included
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {perks.map((perk, i) => (
                  <motion.div
                    key={perk}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm">{perk}</span>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BookEvent;