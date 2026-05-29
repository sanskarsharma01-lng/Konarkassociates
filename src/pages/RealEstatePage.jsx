import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';
import RealEstate from '../components/RealEstate';

export default function RealEstatePage() {
  return (
    <div className="bg-white">
      <SEOHead
        title="Real Estate Buy & Sell in Ujjain, Indore & Barnagar | Konark Associates"
        description="Looking for property in Ujjain, Indore or Barnagar? We offer premium real estate services for buying and selling residential and commercial properties."
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-dark">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Real Estate Services <br />
            in Ujjain, Indore & Barnagar
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-charcoal-400 max-w-3xl mx-auto"
          >
            Expert guidance for buying and selling properties. Discover premium 
            residential and commercial real estate with transparent dealings.
          </motion.p>
        </div>
      </section>

      {/* Import the existing RealEstate component for the properties grid and CTA */}
      <RealEstate />
    </div>
  );
}
