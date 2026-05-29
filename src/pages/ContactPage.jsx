import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';
import Contact from '../components/Contact';

export default function ContactPage() {
  return (
    <div className="bg-charcoal-50 min-h-screen">
      <SEOHead
        title="Contact Konark Associates | Construction & Interior Design in Ujjain"
        description="Contact Konark Associates for construction, interior design, and real estate services in Ujjain, Indore, and Barnagar. Call 098279 53774."
      />

      {/* Small Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-gradient-dark">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4"
          >
            Contact <span className="text-gradient-teal">Konark Associates</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-charcoal-400 text-lg max-w-2xl mx-auto"
          >
            We are here to answer your questions and discuss your project.
          </motion.p>
        </div>
      </section>

      {/* Render existing Contact form component */}
      <div className="pb-12">
        <Contact />
      </div>
    </div>
  );
}
