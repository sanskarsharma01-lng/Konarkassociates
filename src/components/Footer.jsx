import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import logo from '../assets/logo.jpg';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Real Estate', href: '#real-estate' },
  { name: 'Contact', href: '#contact' },
];

const serviceLinks = [
  'Residential Building Design & Construction',
  'Commercial Building Design & Construction',
  'Bungalow Design & Construction',
  'Construction with Material Supply',
  'Complete Interior Design & Construction',
  'Architectural Drawing & Planning',
  'Interior Architecture Consultation',
  'Renovation & Remodelling',
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal-950 text-white relative">
      {/* Teal accent line */}
      <div className="h-1 bg-gradient-teal" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-5">
              <img src={logo} alt="Konark Associates Logo" className="h-14 w-auto object-contain" />
            </div>
            <p className="text-charcoal-400 text-sm leading-relaxed mb-6">
              Leading interior architect and construction firm serving Barnagar, Ujjain & Indore. Residential, commercial & bungalow design with end-to-end project delivery.
            </p>
            <a
              href="tel:09827953774"
              className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 text-sm font-medium transition-colors"
            >
              <Phone size={14} />
              098279 53774
            </a>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer navigation">
          <div>
            <h4 className="font-heading font-semibold text-lg mb-5 relative">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-teal rounded-full" />
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-charcoal-400 hover:text-teal-400 text-sm transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          </nav>

          {/* Services */}
          <nav aria-label="Services">
          <div>
            <h4 className="font-heading font-semibold text-lg mb-5 relative">
              Services
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-teal rounded-full" />
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <span className="text-charcoal-400 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>
          </nav>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-5 relative">
              Contact Us
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-teal rounded-full" />
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-teal-400 mt-0.5 flex-shrink-0" />
                <span className="text-charcoal-400 text-sm">Konark Associates, Main Road, Barnagar, Madhya Pradesh</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-teal-400 flex-shrink-0" />
                <a href="tel:09827953774" className="text-charcoal-400 hover:text-teal-400 text-sm transition-colors">
                  098279 53774
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-teal-400 flex-shrink-0" />
                <a href="mailto:konarkassociatesindore@gmail.com" className="text-charcoal-400 hover:text-teal-400 text-sm transition-colors">
                  konarkassociatesindore@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-charcoal-500 text-sm">
            © {new Date().getFullYear()} KONARK ASSOCIATES. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-teal-400/10 border border-teal-400/20 flex items-center justify-center text-teal-400 hover:bg-gradient-teal hover:text-white transition-all duration-300 hover:scale-110"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
