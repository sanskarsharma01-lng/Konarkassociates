import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, Building2, HardHat, Ruler, Castle, CheckCircle2 } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const constructionServices = [
  { icon: Home, title: 'Residential Building Construction', desc: 'Custom homes designed with precision, built with excellence. From foundation to finish, we craft your dream residence.' },
  { icon: Building2, title: 'Commercial Building Construction', desc: 'Innovative commercial spaces that maximize functionality while making a bold design statement.' },
  { icon: Castle, title: 'Bungalow Construction', desc: 'Luxurious bungalow designs that blend elegance with comfort, tailored to your lifestyle aspirations.' },
  { icon: HardHat, title: 'Construction Consulting & Execution', desc: 'End-to-end construction management with expert consulting, budgeting, and flawless execution.' },
  { icon: Ruler, title: 'Planning & Elevation', desc: 'Meticulous floor planning and stunning elevation designs that define your building\'s character.' },
  { icon: Building2, title: 'Construction with Material Supply', desc: 'Hassle-free construction where we manage all material procurement ensuring premium quality.' },
];

const features = [
  'Premium quality materials for long-lasting durability',
  'Experienced team of civil engineers and site supervisors',
  'Transparent pricing with no hidden costs',
  'Timely project delivery and strict adherence to schedules',
  'Compliance with all local building codes and regulations',
  'Regular progress updates and site visits',
];

export default function ConstructionPage() {
  return (
    <div className="bg-white">
      <SEOHead
        title="Construction Company in Ujjain, Indore & Barnagar | Konark Associates"
        description="Top-rated construction company and building contractor in Ujjain, Indore & Barnagar. We specialize in residential & commercial construction, bungalow building, and construction with material supply. Call 098279 53774."
        canonical="https://konarkassociates.com/construction-company-ujjain/"
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
            Best <span className="text-gradient-teal">Construction Company</span><br />
            in Ujjain, Indore & Barnagar
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-charcoal-400 max-w-3xl mx-auto"
          >
            From foundation to finishing, we build homes and commercial spaces that stand the test of time. 
            Expert civil contractors delivering excellence across Madhya Pradesh.
          </motion.p>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg prose-teal mx-auto text-charcoal-600"
          >
            <p className="lead text-xl text-charcoal-800 font-medium mb-6">
              Konark Associates is a leading construction firm providing end-to-end building solutions in Ujjain, Indore, and Barnagar.
            </p>
            <p className="mb-6">
              Building your dream project requires a partner who understands your vision, respects your budget, and delivers uncompromising quality. Whether you are planning to build a modern residential home in Ujjain, a commercial complex in Indore, or a luxurious bungalow in Barnagar, our expert team of engineers and contractors ensures flawless execution at every step.
            </p>
            <p>
              We offer comprehensive "Construction with Material" services, which means you don't have to worry about sourcing cement, steel, bricks, or managing labor. We handle everything from architectural planning and structural design to the final coat of paint, giving you a completely hassle-free building experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-charcoal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-charcoal-950 mb-4">
              Our Construction <span className="text-gradient-teal">Services</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-teal rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {constructionServices.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-charcoal-100 hover:border-teal-300 transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-teal-50 group-hover:bg-gradient-teal flex items-center justify-center mb-6 transition-all duration-300">
                  <service.icon size={24} className="text-teal-600 group-hover:text-white" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3 group-hover:text-teal-700">
                  {service.title}
                </h3>
                <p className="text-charcoal-500 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-charcoal-950 mb-6">
                Why Choose Konark Associates for <span className="text-gradient-teal">Construction?</span>
              </h2>
              <p className="text-charcoal-600 text-lg mb-8">
                We believe that a strong foundation isn't just about concrete and steel—it's about trust, transparency, and commitment to excellence.
              </p>
              
              <ul className="space-y-4">
                {features.map((feature, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="text-teal-500 shrink-0 mt-1" size={20} />
                    <span className="text-charcoal-700">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px]"
            >
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80" 
                alt="Construction site in Ujjain" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 to-transparent flex items-end p-8">
                <div className="glass-dark p-6 rounded-2xl border-white/10 backdrop-blur-md w-full">
                  <p className="text-white text-lg font-medium">100+ Projects Completed</p>
                  <p className="text-teal-400">Across Ujjain, Indore & Barnagar</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl font-bold text-charcoal-950 mb-6">
              Ready to build your dream project?
            </h2>
            <p className="text-charcoal-600 mb-8 text-lg">
              Contact us today to discuss your construction requirements and get a detailed estimate.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 rounded-full bg-gradient-teal hover:shadow-lg hover:shadow-teal-400/30 hover:-translate-y-1"
            >
              Get Free Construction Quote
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
