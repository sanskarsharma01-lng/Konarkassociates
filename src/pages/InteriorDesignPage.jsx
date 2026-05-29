import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Paintbrush, UtensilsCrossed, DoorOpen, Sofa, Baby, Monitor, CheckCircle2 } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const interiorServices = [
  { icon: Paintbrush, title: 'Complete Interior Design', desc: 'Full-service interior design from concept to completion, creating spaces that reflect your personality.' },
  { icon: UtensilsCrossed, title: 'Modular Kitchen', desc: 'Sleek, functional modular kitchens with premium materials and smart storage solutions.' },
  { icon: DoorOpen, title: 'Wardrobe Design', desc: 'Custom wardrobe solutions that maximize storage with elegant finishes and intelligent organization.' },
  { icon: Sofa, title: 'Sofa & Furniture Design', desc: 'Bespoke furniture designs crafted for comfort and style, perfectly suited to your interior theme.' },
  { icon: Baby, title: 'Kids Room Design', desc: 'Playful, safe, and creative kids room designs that inspire imagination and joyful living.' },
  { icon: Monitor, title: '3D Design Rendering', desc: 'Photorealistic 3D visualizations and immersive walkthroughs to experience your space before execution.' },
];

const processSteps = [
  { title: 'Initial Consultation', desc: 'We understand your vision, requirements, lifestyle, and budget.' },
  { title: 'Space Planning & Layout', desc: 'Optimizing the available space for maximum functionality and flow.' },
  { title: '3D Rendering', desc: 'Creating photorealistic visualizations of the proposed designs.' },
  { title: 'Material Selection', desc: 'Choosing the finest materials, finishes, and furnishings.' },
  { title: 'Execution & Installation', desc: 'Flawless execution by our skilled craftsmen.' },
  { title: 'Final Handover', desc: 'Delivering your dream space on time and ready to move in.' },
];

export default function InteriorDesignPage() {
  return (
    <div className="bg-white">
      <SEOHead
        title="Interior Designer in Ujjain, Indore & Barnagar | Konark Associates"
        description="Best interior designer in Ujjain, Indore & Barnagar. We offer complete interior design, modular kitchen, wardrobe design, and 3D rendering services. Transform your home today."
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
            Expert <span className="text-gradient-teal">Interior Designer</span><br />
            in Ujjain, Indore & Barnagar
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-charcoal-400 max-w-3xl mx-auto"
          >
            Transforming ordinary spaces into extraordinary living experiences. 
            From modular kitchens to complete home interiors, we bring your vision to life.
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
              A well-designed interior does more than just look good; it enhances your lifestyle, brings peace of mind, and makes your space truly yours.
            </p>
            <p className="mb-6">
              At Konark Associates, we are passionate about creating stunning and functional interiors for homes and commercial spaces across Ujjain, Indore, and Barnagar. Our interior design philosophy revolves around blending aesthetics with practicality, ensuring that every corner of your space serves a purpose while looking beautiful.
            </p>
            <p>
              From custom modular kitchens and elegant wardrobes to luxurious living rooms and bespoke furniture design, our team handles everything. We provide highly detailed 3D design renderings so you can visualize the exact outcome before the execution begins, ensuring absolute satisfaction with the final result.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-charcoal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-charcoal-950 mb-4">
              Our Interior <span className="text-gradient-teal">Services</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-teal rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interiorServices.map((service, i) => (
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

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-charcoal-950 mb-4">
              Our Design <span className="text-gradient-teal">Process</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-teal rounded-full mx-auto" />
            <p className="text-charcoal-600 mt-6 max-w-2xl mx-auto">
              A structured and transparent approach to turning your dream space into reality.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative p-6 rounded-2xl border border-charcoal-100 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-teal rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {i + 1}
                </div>
                <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-2 mt-2">
                  {step.title}
                </h3>
                <p className="text-charcoal-500">
                  {step.desc}
                </p>
              </motion.div>
            ))}
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
              Let's create something beautiful together.
            </h2>
            <p className="text-charcoal-600 mb-8 text-lg">
              Book a free interior design consultation with our experts.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 rounded-full bg-gradient-teal hover:shadow-lg hover:shadow-teal-400/30 hover:-translate-y-1"
            >
              Get Free Design Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
