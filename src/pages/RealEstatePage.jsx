import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, BedDouble, Bath, Maximize, MapPin, ArrowUpRight, Building2, LandPlot } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { properties, propertyTypes } from '../data/propertiesData';

export default function RealEstatePage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProperties = activeFilter === 'All'
    ? properties
    : properties.filter((p) => p.type === activeFilter);

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

      {/* Properties Grid with Filter */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block text-teal-500 font-semibold text-sm tracking-widest uppercase mb-4">
              Browse Properties
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-950 mb-4">
              Available <span className="text-gradient-teal">Properties</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-teal rounded-full mx-auto mb-8" />

            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {propertyTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveFilter(type)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeFilter === type
                      ? 'bg-gradient-teal text-white shadow-lg shadow-teal-400/25'
                      : 'bg-charcoal-50 text-charcoal-600 hover:bg-charcoal-100 border border-charcoal-100'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((prop, i) => (
              <motion.div
                key={prop.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                layout
              >
                <Link
                  to={`/property/${prop.id}`}
                  className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-teal-400/15 border border-charcoal-100 transition-all duration-300"
                >
                  <div className="relative overflow-hidden h-56">
                    <img
                      src={prop.img}
                      alt={prop.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="px-3 py-1 rounded-full bg-gradient-teal text-white text-xs font-bold tracking-wider">
                        {prop.type}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wider ${
                        prop.status === 'Ready to Move'
                          ? 'bg-emerald-500/90 text-white'
                          : prop.status === 'Under Construction'
                          ? 'bg-amber-500/90 text-white'
                          : 'bg-blue-500/90 text-white'
                      }`}>
                        {prop.status}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-charcoal-900 text-xs font-bold">
                      {prop.priceLabel}
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-end p-4">
                      <span className="inline-flex items-center gap-1 text-white text-sm font-semibold bg-teal-500/80 backdrop-blur-sm px-4 py-2 rounded-full">
                        View Details <ArrowUpRight size={14} />
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading font-semibold text-charcoal-900 text-lg mb-1">{prop.title}</h3>
                    <div className="flex items-center gap-1 text-charcoal-400 text-sm mb-4">
                      <MapPin size={14} />
                      <span>{prop.location}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-charcoal-500 border-t border-charcoal-100 pt-4">
                      {prop.beds > 0 ? (
                        <span className="flex items-center gap-1"><BedDouble size={14} /> {prop.beds} Bed</span>
                      ) : prop.type === 'Plot' ? (
                        <span className="flex items-center gap-1"><LandPlot size={14} /> Plot</span>
                      ) : (
                        <span className="flex items-center gap-1"><Building2 size={14} /> Commercial</span>
                      )}
                      {prop.baths > 0 ? (
                        <span className="flex items-center gap-1"><Bath size={14} /> {prop.baths} Bath</span>
                      ) : (
                        <span className="flex items-center gap-1"><MapPin size={14} /> {prop.city}</span>
                      )}
                      <span className="flex items-center gap-1"><Maximize size={14} /> {prop.area}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredProperties.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-charcoal-400 text-lg">No properties found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>

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
