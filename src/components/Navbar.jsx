import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import logo from '../assets/logo.jpg';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Construction', href: '/construction-company-ujjain' },
  { name: 'Interior Design', href: '/interior-designer-ujjain' },
  { name: 'Real Estate', href: '/real-estate-ujjain' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    setIsOpen(false);
    if (href.includes('#')) {
      e.preventDefault();
      const hash = href.includes('/') ? href.split('#')[1] : href.substring(1);
      const basePath = href.split('#')[0] || '/';
      if (location.pathname === basePath || (basePath === '/' && location.pathname === '/')) {
        // Same page, just scroll
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Different page, navigate
        navigate(href);
      }
    }
    // For non-hash links, Link handles navigation automatically
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
          <Link to="/" className="flex items-center gap-3 group" aria-label="Konark Associates — Home">
            <img src={logo} alt="Konark Associates Logo" className="h-12 w-auto object-contain transform group-hover:scale-105 transition-transform duration-300" />
            <div className="text-left">
              <span className={`block text-sm font-heading font-bold tracking-widest uppercase transition-colors duration-300 ${
                scrolled ? 'text-charcoal-950' : 'text-white'
              }`}>
                Konark
              </span>
              <span className={`block text-[10px] tracking-[0.2em] uppercase transition-colors duration-300 ${
                scrolled ? 'text-teal-600' : 'text-teal-300'
              }`}>
                Associates
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-sm font-medium tracking-wide hover:text-teal-400 transition-colors duration-300 relative group ${
                  scrolled ? 'text-charcoal-700' : 'text-white/90'
                }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-teal group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <a
              href="tel:09827953774"
              className="flex items-center gap-2 bg-gradient-teal text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-teal-400/30 transition-all duration-300 hover:scale-105"
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
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="block px-4 py-3 text-charcoal-800 font-medium hover:text-teal-500 hover:bg-teal-50 rounded-lg transition-all duration-200"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <a
                href="tel:09827953774"
                className="flex items-center justify-center gap-2 mt-4 bg-gradient-teal text-white px-6 py-3 rounded-full font-semibold"
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
