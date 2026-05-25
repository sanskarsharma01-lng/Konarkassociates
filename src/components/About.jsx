import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building, Home, HardHat, Palette, MapPin } from 'lucide-react';

const highlights = [
  { icon: Home, title: 'Residential Building Design' },
  { icon: Building, title: 'Commercial Building Design' },
  { icon: HardHat, title: 'Construction Planning' },
  { icon: Palette, title: 'Interior Design' },
  { icon: MapPin, title: 'Real Estate Services' },
];

const images = [
  { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80', alt: 'Luxury residence' },
  { src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80', alt: 'Modern interior' },
  { src: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80', alt: 'Villa design' },
  { src: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80', alt: 'Kitchen design' },
];

function AnimatedSection({ children, className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <AnimatedSection>
            <span className="inline-block text-teal-500 font-semibold text-sm tracking-widest uppercase mb-4">
              About Us
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-950 mb-6 leading-tight">
              Crafting Spaces That
              <span className="text-gradient-teal"> Inspire</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-teal rounded-full mb-6" />
            <p className="text-charcoal-500 text-lg leading-relaxed mb-6">
              <strong className="text-charcoal-800">KONARK ASSOCIATES</strong> is a leading interior architect and construction firm serving Barnagar, Ujjain, and Indore. We specialize in residential and commercial building design, bungalow construction, complete interior solutions, and architectural drawing &amp; planning.
            </p>
            <p className="text-charcoal-500 leading-relaxed mb-8">
              With a 5-star reputation and end-to-end project delivery — from concept to completion — we bring your dream space to life. Whether it&apos;s a modern residential home, a commercial complex, a bespoke interior, or renovation &amp; remodelling, our expert team handles every aspect of your project.
            </p>

            <div className="space-y-3">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center group-hover:bg-gradient-teal group-hover:text-white transition-all duration-300">
                    <item.icon size={18} className="text-teal-600 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-charcoal-700 font-medium">{item.title}</span>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          {/* Image Grid */}
          <AnimatedSection className="grid grid-cols-2 gap-4">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                whileHover={{ scale: 1.03 }}
                className={`relative overflow-hidden rounded-2xl shadow-lg ${
                  i === 0 ? 'row-span-2' : ''
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className={`w-full object-cover ${i === 0 ? 'h-full min-h-[300px]' : 'h-48 sm:h-56'}`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
