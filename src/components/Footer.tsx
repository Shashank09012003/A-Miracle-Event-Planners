import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  MessageCircle,
  Phone,
  MapPin,
  Mail,
  Sparkles,
} from "lucide-react";

const Footer = () => {
  const footerLinks = {
    features: [
      { name: "Wedding Planning", href: "/services" },
      { name: "Birthday Parties", href: "/services" },
      { name: "Corporate Events", href: "/services" },
      { name: "Festival Events", href: "/services" },
    ],
    support: [
      { name: "About Us", href: "/about" },
      { name: "Contact Us", href: "/book-event" },
      { name: "Gallery", href: "/gallery" },
      { name: "Testimonials", href: "/testimonials" },
    ],
  };

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/amiracleeventplanners",
      label: "Facebook",
      color: "hover:bg-gradient-to-br hover:from-[#1877F2] hover:to-[#0d5dbf]",
      isTextIcon: false,
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/amiracleeventplanners?igsh=aTVuYjM3MTFjdXp3",
      label: "Instagram",
      color:
        "hover:bg-gradient-to-br hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#dc2743]",
      isTextIcon: false,
    },
    {
      icon: "X",
      href: "https://x.com/amiracleevent",
      label: "X (Twitter)",
      color: "hover:bg-gradient-to-br hover:from-black hover:to-gray-800",
      isTextIcon: true,
    },
    {
      icon: MessageCircle,
      href: "https://wa.me/919303500200?text=Hi%2C%20I%20want%20to%20plan%20an%20event",
      label: "WhatsApp",
      color: "hover:bg-gradient-to-br hover:from-[#25D366] hover:to-[#128C7E]",
      isTextIcon: false,
    },
  ];

  return (
    <footer
      className="relative bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white overflow-hidden"
      itemScope
      itemType="https://schema.org/Organization"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {/* Top Decorative Line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 md:gap-16">
          {/* Brand Section - Takes up more space */}
          <div className="lg:col-span-5 space-y-6">
            {/* Logo & Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 group">
                <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center shadow-2xl shadow-purple-500/50 group-hover:scale-110 transition-transform duration-300 p-2">
                  <img
                    src="/LOGO.png"
                    alt="A Miracle Event Planners Logo"
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-white/20 blur-xl group-hover:bg-white/30 transition-all"></div>
                </div>
                <div>
                  <span
                    className="font-bold text-2xl bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent"
                    itemProp="name"
                  >
                    A Miracle Event Planners
                  </span>
                  <div className="flex items-center gap-1 text-xs text-purple-300">
                    <Sparkles className="w-3 h-3" />
                    <span>
                      Born to break the pattern , Built to create the moment
                    </span>
                  </div>
                </div>
              </div>

              <p
                className="text-gray-300 max-w-md leading-relaxed text-sm"
                itemProp="description"
              >
                Transform your events into magical experiences. Professional
                event planning services in Jabalpur, specializing in weddings,
                birthday parties, corporate events, and festivals.
              </p>
            </div>

            {/* Social Links - Highlighted */}
            <div className="pt-2">
              <p className="text-sm text-gray-400 mb-4 flex items-center gap-2">
                <span className="w-8 h-px bg-gradient-to-r from-purple-500 to-transparent"></span>
                Connect With Us
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit our ${social.label} page`}
                      title={social.label}
                      className={`relative w-12 h-12 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-white/30 ${social.color} group`}
                    >
                      {social.isTextIcon ? (
                        <span className="text-xl font-bold group-hover:scale-110 transition-transform">
                          𝕏
                        </span>
                      ) : (
                        <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      )}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Info - Styled as Cards */}
          <div
            className="lg:col-span-4 space-y-4"
            itemProp="address"
            itemScope
            itemType="https://schema.org/PostalAddress"
          >
            <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
              Get In Touch
            </h3>

            {/* Phone Card */}
            <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 text-purple-400" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-400 mb-1">Call Us</p>
                  <a
                    href="tel:+919303500200"
                    className="block text-white hover:text-purple-400 transition-colors font-medium"
                    itemProp="telephone"
                  >
                    +91 9303500200
                  </a>
                  <a
                    href="tel:+919977705032"
                    className="block text-white hover:text-purple-400 transition-colors font-medium"
                    itemProp="telephone"
                  >
                    +91 9977705032
                  </a>
                </div>
              </div>
            </div>

            {/* Address Card */}
            <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500/20 to-orange-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin className="w-5 h-5 text-pink-400" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-400 mb-1">Visit Us</p>
                  <address className="not-italic text-white text-sm leading-relaxed">
                    <span itemProp="streetAddress">
                      211 rajul landmark near opposite jabalpur hospital 
                    </span>
                    ,<br />
                    <span itemProp="addressLocality">
                      Russel Chowk, Jabalpur
                    </span>
                    , <span itemProp="addressRegion">MP</span>{" "}
                    <span itemProp="postalCode">482001</span>
                  </address>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500/20 to-yellow-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5 text-orange-400" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-400 mb-1">Email Us</p>
                  <a
                    href="mailto:info@amiracleeventplanners.com"
                    className="text-white hover:text-purple-400 transition-colors break-all font-medium"
                    itemProp="email"
                  >
                    amiracleevents@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-8 lg:gap-12">
            {/* Services */}
            <div>
              <h3 className="font-bold text-base mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-pink-500 to-orange-500 rounded-full"></span>
                Services
              </h3>
              <ul className="space-y-3">
                {footerLinks.features.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-all duration-200 inline-flex items-center gap-2 group text-sm"
                    >
                      <span className="w-0 group-hover:w-1.5 h-1.5 bg-purple-500 rounded-full transition-all duration-300"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-base mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-orange-500 to-yellow-500 rounded-full"></span>
                Links
              </h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-all duration-200 inline-flex items-center gap-2 group text-sm"
                    >
                      <span className="w-0 group-hover:w-1.5 h-1.5 bg-pink-500 rounded-full transition-all duration-300"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p className="flex items-center gap-2">
              © 2025 A Miracle Event Planners. All rights reserved.
            </p>
            <div className="flex gap-4 flex-wrap justify-center items-center">
              <span>Privacy Policy</span>
              <span className="text-gray-600">•</span>
              <span>Terms of Service</span>
              <span className="text-gray-600">•</span>
              <span className="text-purple-400">Jabalpur, MP</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
