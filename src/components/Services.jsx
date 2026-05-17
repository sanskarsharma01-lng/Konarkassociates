import { motion } from 'framer-motion';
import {
  Home, Building2, Castle, HardHat, Monitor, Ruler,
  TreePine, Paintbrush, UtensilsCrossed, DoorOpen,
  Sofa, Baby, MapPin,
} from 'lucide-react';

const services = [
  { icon: Home, title: 'Residential Building Design & Construction', desc: 'Custom homes designed with precision, built with excellence. From foundation to finish, we craft your dream residence.' },
  { icon: Building2, title: 'Commercial Building Design & Construction', desc: 'Innovative commercial spaces that maximize functionality while making a bold architectural statement.' },
  { icon: Castle, title: 'Bungalow Design', desc: 'Luxurious bungalow designs that blend elegance with comfort, tailored to your lifestyle aspirations.' },
  { icon: HardHat, title: 'Construction Consulting & Execution', desc: 'End-to-end construction management with expert consulting, budgeting, and flawless execution.' },
  { icon: Monitor, title: '3D Design Rendering & Walkthrough', desc: 'Photorealistic 3D visualizations and immersive walkthroughs to experience your project before construction.' },
  { icon: Ruler, title: 'Planning & Elevation', desc: 'Meticulous floor planning and stunning elevation designs that define your building\'s character.' },
  { icon: TreePine, title: 'Landscaping', desc: 'Beautiful landscape designs that enhance outdoor living spaces with greenery, pathways, and water features.' },
  { icon: Paintbrush, title: 'Complete Interior Design', desc: 'Full-service interior design from concept to completion, creating spaces that reflect your personality.' },
  { icon: UtensilsCrossed, title: 'Modular Kitchen', desc: 'Sleek, functional modular kitchens with premium materials and smart storage solutions.' },
  { icon: DoorOpen, title: 'Wardrobe Design', desc: 'Custom wardrobe solutions that maximize storage with elegant finishes and intelligent organization.' },
  { icon: Sofa, title: 'Sofa & Furniture Design', desc: 'Bespoke furniture designs crafted for comfort and style, perfectly suited to your interior theme.' },
  { icon: Baby, title: 'Kids Room Design', desc: 'Playful, safe, and creative kids room designs that inspire imagination and joyful living.' },
  { icon: MapPin, title: 'Real Estate Buy/Sell Services', desc: 'Expert guidance for buying and selling properties with market insights and smooth transactions.' },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-charcoal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-gold-500 font-semibold text-sm tracking-widest uppercase mb-4">
            What We Offer
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-950 mb-4">
            Our <span className="text-gradient-gold">Services</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-gold rounded-full mx-auto mb-6" />
          <p className="text-charcoal-500 max-w-2xl mx-auto text-lg">
            Comprehensive design, construction, and real estate solutions tailored to exceed your expectations.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:shadow-gold-400/10 border border-charcoal-100 hover:border-gold-300/50 transition-all duration-300 cursor-default"
            >
              <div className="w-14 h-14 rounded-xl bg-gold-50 group-hover:bg-gradient-gold flex items-center justify-center mb-5 transition-all duration-300">
                <service.icon
                  size={24}
                  className="text-gold-600 group-hover:text-white transition-colors duration-300"
                />
              </div>
              <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2 group-hover:text-gold-700 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-charcoal-500 text-sm leading-relaxed">
                {service.desc}
              </p>
              <div className="mt-4 w-0 group-hover:w-full h-0.5 bg-gradient-gold transition-all duration-500 rounded-full" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
