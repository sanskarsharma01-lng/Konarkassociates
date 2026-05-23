import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Real Estate', href: '#real-estate' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header>
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-black/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex items-center gap-3 group" onClick={(e) => handleLinkClick(e, '#home')} aria-label="Konark Associates — Home">
            <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
              <span className="text-white font-heading font-bold text-lg">K</span>
            </div>
            <div className="text-left">
              <span className={`block text-sm font-heading font-bold tracking-widest uppercase transition-colors duration-300 ${
                scrolled ? 'text-charcoal-950' : 'text-white'
              }`}>
                Konark
              </span>
              <span className={`block text-[10px] tracking-[0.2em] uppercase transition-colors duration-300 ${
                scrolled ? 'text-gold-600' : 'text-gold-300'
              }`}>
                Associates
              </span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-sm font-medium tracking-wide hover:text-gold-400 transition-colors duration-300 relative group ${
                  scrolled ? 'text-charcoal-700' : 'text-white/90'
                }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-gold group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="tel:09827953774"
              className="flex items-center gap-2 bg-gradient-gold text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-gold-400/30 transition-all duration-300 hover:scale-105"
            >
              <Phone size={14} />
              Call Now
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-charcoal-900' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/98 backdrop-blur-lg border-t border-charcoal-100 shadow-xl"
          >
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="block px-4 py-3 text-charcoal-800 font-medium hover:text-gold-500 hover:bg-gold-50 rounded-lg transition-all duration-200"
                >
                  {link.name}
                </motion.a>
              ))}
              <a
                href="tel:09827953774"
                className="flex items-center justify-center gap-2 mt-4 bg-gradient-gold text-white px-6 py-3 rounded-full font-semibold"
              >
                <Phone size={16} />
                098279 53774
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
    </header>
  );
}
