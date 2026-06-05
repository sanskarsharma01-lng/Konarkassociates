import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Paintbrush, UtensilsCrossed, DoorOpen, Sofa, Baby, Monitor, CheckCircle2, ChevronDown } from 'lucide-react';
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

const faqs = [
  {
    q: 'What is the cost of interior design in Ujjain?',
    a: 'Interior design costs in Ujjain typically range from ₹800 to ₹2,000 per square foot, depending on the scope of work, material quality, and design complexity. At Konark Associates, we provide detailed quotations with transparent pricing. Whether you need a complete home interior or just a modular kitchen, call us at 098279 53774 for a free consultation.',
  },
  {
    q: 'Do you provide 3D design before starting interior work?',
    a: 'Yes, we provide detailed 3D design renderings and walkthroughs before any execution begins. This allows you to see exactly how your space will look after completion, make changes to colors, materials, and layouts, and approve the final design with complete confidence before we start work.',
  },
  {
    q: 'What types of interior design services do you offer?',
    a: 'We offer comprehensive interior design services including complete home interiors, modular kitchen design, wardrobe and storage solutions, living room and bedroom design, bathroom design, false ceiling work, custom furniture design, kids room design, and commercial interior design for offices and showrooms.',
  },
  {
    q: 'How long does interior design work take to complete?',
    a: 'Interior design timelines depend on the scope. A single room (like a modular kitchen) typically takes 15 to 25 days. Complete home interiors for a 2BHK take about 45 to 60 days, while a 3BHK or larger home may take 60 to 90 days. We follow strict schedules and provide regular progress updates.',
  },
  {
    q: 'Do you handle both residential and commercial interior design?',
    a: 'Yes, we handle both residential and commercial interior design projects. For homes, we design living rooms, bedrooms, kitchens, and bathrooms. For commercial spaces, we design offices, showrooms, clinics, restaurants, and retail stores across Ujjain, Indore, and Barnagar.',
  },
  {
    q: 'Can I choose my own materials and designs?',
    a: 'Absolutely! We work closely with you to select materials, colors, finishes, and designs that match your taste and budget. We provide curated material options from trusted suppliers, and you have full control over every design decision. Our 3D renderings help you visualize options before finalizing.',
  },
];

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="bg-white rounded-2xl border border-charcoal-100 shadow-sm hover:shadow-md transition-shadow"
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full px-6 py-5 text-left gap-4"
        aria-expanded={open}
      >
        <span className="font-heading text-lg font-semibold text-charcoal-900">{faq.q}</span>
        <ChevronDown
          size={22}
          className={`flex-shrink-0 text-teal-600 transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      {/* Answer always in DOM for SEO crawlers */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="px-6 pb-5 text-charcoal-600 leading-relaxed">{faq.a}</p>
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
          <p className="text-charcoal-600 mt-6 max-w-2xl mx-auto">
            Common questions about our interior design services in Ujjain, Indore &amp; Barnagar.
          </p>
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

export default function InteriorDesignPage() {
  return (
    <div className="bg-white">
      <SEOHead
        title="Interior Designer in Ujjain, Indore & Barnagar | Konark Associates"
        description="Best interior designer in Ujjain, Indore & Barnagar. We offer complete interior design, modular kitchen, wardrobe design, and 3D rendering services. Transform your home today."
        canonical="https://konarkassociates.com/interior-designer-ujjain/"
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

      {/* FAQ Section */}
      <FAQSection />

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
