import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import RealEstate from '../components/RealEstate';

export default function RealEstatePage() {
  return (
    <div className="bg-white">
      <SEOHead
        title="Real Estate Buy & Sell in Ujjain, Indore & Barnagar | Konark Associates"
        description="Looking for property in Ujjain, Indore or Barnagar? We offer premium real estate services for buying and selling residential and commercial properties."
        canonical="https://konarkassociates.com/real-estate-ujjain/"
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

      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
}

const faqs = [
  {
    question: 'How to buy property in Ujjain?',
    answer:
      'To buy property in Ujjain, start by defining your budget and preferred location. Konark Associates helps you find verified residential and commercial properties with clear titles and proper documentation. We guide you through the entire process from property selection to registration, ensuring a safe and transparent transaction.',
  },
  {
    question: 'Do you help with property documentation and registration?',
    answer:
      'Yes, we provide complete assistance with property documentation including title verification, legal due diligence, sale deed preparation, registry, and mutation. Our team ensures all paperwork is handled properly so you have a hassle-free property buying experience.',
  },
  {
    question: 'What types of properties are available in Ujjain and Indore?',
    answer:
      'We offer a wide range of properties including residential plots, ready-to-move apartments, independent houses, bungalows, commercial shops, office spaces, and agricultural land across Ujjain, Indore, and Barnagar. Contact us to discuss your specific property requirements.',
  },
  {
    question: 'Is it safe to invest in real estate in Ujjain?',
    answer:
      'Yes, Ujjain is a growing city with excellent real estate investment potential. With major infrastructure developments, expanding connectivity, and rising demand for residential and commercial spaces, property values in Ujjain have shown consistent appreciation. We help you identify the best investment opportunities.',
  },
];

function FAQItem({ faq, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl border border-charcoal-100 shadow-sm hover:shadow-md transition-all"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-heading text-lg font-semibold text-charcoal-900">
          {faq.question}
        </span>
        <ChevronDown
          size={20}
          className={`shrink-0 text-teal-500 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Answer is always in the DOM for SEO; visibility toggled via max-height */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="px-6 pb-6 text-charcoal-600 leading-relaxed">
          {faq.answer}
        </p>
      </div>
    </motion.div>
  );
}

function FAQSection() {
  return (
    <section className="py-20 bg-charcoal-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-charcoal-950 mb-4">
            Frequently Asked <span className="text-gradient-teal">Questions</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-teal rounded-full mx-auto" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
