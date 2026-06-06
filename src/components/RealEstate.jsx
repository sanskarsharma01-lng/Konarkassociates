import { motion } from 'framer-motion';
import { BedDouble, Bath, Maximize, MapPin, ArrowRight, Building2, LandPlot } from 'lucide-react';
import { Link } from 'react-router-dom';
import { properties } from '../data/propertiesData';

export default function RealEstate() {
  return (
    <section id="real-estate" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-teal-500 font-semibold text-sm tracking-widest uppercase mb-4">
            Real Estate
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-950 mb-4">
            Property <span className="text-gradient-teal">Showcase</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-teal rounded-full mx-auto mb-6" />
          <p className="text-charcoal-500 max-w-2xl mx-auto text-lg">
            Explore premium residential properties — from cozy 1 BHK apartments to luxurious 4 BHK penthouses. Buy & sell with confidence.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {properties.slice(0, 4).map((prop, i) => (
            <motion.div
              key={prop.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-teal-400/15 border border-charcoal-100 transition-all duration-300"
            >
              <Link to={`/property/${prop.id}`} className="block">
                <div className="relative overflow-hidden h-48">
                  <img
                    src={prop.img}
                    alt={prop.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-gradient-teal text-white text-xs font-bold tracking-wider">
                    {prop.type}
                  </div>
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-charcoal-900 text-xs font-bold">
                    {prop.priceLabel}
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

        {/* View All Properties Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Link
            to="/real-estate-ujjain"
            className="inline-flex items-center gap-2 text-teal-500 font-semibold hover:text-teal-600 transition-colors group"
          >
            View All Properties
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Buy/Sell CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-dark rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '30px 30px',
          }} />
          <div className="relative">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4">
              Looking to Buy or Sell Property?
            </h3>
            <p className="text-charcoal-400 mb-8 max-w-xl mx-auto">
              Our real estate experts help you find the perfect property or get the best value for your investment. Free consultation available.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-teal text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-teal-400/30 transition-all duration-300 hover:scale-105 group"
            >
              Contact for Property Deals
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
