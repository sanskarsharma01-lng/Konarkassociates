import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Star, Lightbulb, ArrowRightLeft, Users } from 'lucide-react';

function AnimatedCounter({ target, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const isFloat = String(target).includes('.');
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(isFloat ? parseFloat(current.toFixed(1)) : Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { icon: Award, value: 100, suffix: '+', label: 'Projects Completed' },
  { icon: Star, value: 5.0, suffix: '', label: 'Google Rating' },
  { icon: Lightbulb, value: 50, suffix: '+', label: 'Design Solutions' },
  { icon: ArrowRightLeft, value: 100, suffix: '%', label: 'End-to-End Execution' },
  { icon: Users, value: 20, suffix: '+', label: 'Expert Team Members' },
];

const reasons = [
  { title: 'Modern Design Solutions', desc: 'We stay ahead of trends with cutting-edge architectural and interior design approaches.' },
  { title: 'End-to-End Execution', desc: 'From concept to completion, we manage every aspect of your project seamlessly.' },
  { title: 'Expert Team', desc: 'Our skilled architects, engineers, and designers bring decades of combined experience.' },
  { title: 'Quality Assurance', desc: 'Premium materials and meticulous craftsmanship ensure lasting excellence.' },
  { title: 'On-Time Delivery', desc: 'We respect your time and commitments with punctual project delivery.' },
  { title: 'Client-Centric Approach', desc: 'Your vision drives every design decision we make.' },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-gradient-dark relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-gold-400 font-semibold text-sm tracking-widest uppercase mb-4">
            Why Us
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Why Choose <span className="text-gradient-gold">Konark Associates</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-gold rounded-full mx-auto mb-6" />
          <p className="text-charcoal-400 max-w-2xl mx-auto text-lg">
            Trusted by hundreds of homeowners and businesses for premium design and construction.
          </p>
        </motion.div>

        {/* Animated Counters */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gold-400/10 flex items-center justify-center group-hover:bg-gradient-gold transition-all duration-300">
                <stat.icon size={28} className="text-gold-400 group-hover:text-white transition-colors" />
              </div>
              <p className="text-3xl sm:text-4xl font-bold text-white font-heading mb-1">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-charcoal-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl p-6 hover:border-gold-400/30 transition-all duration-300 group cursor-default"
            >
              <div className="w-10 h-10 rounded-lg bg-gold-400/20 flex items-center justify-center mb-4">
                <span className="text-gold-400 font-bold font-heading">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="text-white font-heading font-semibold text-lg mb-2 group-hover:text-gold-300 transition-colors">
                {reason.title}
              </h3>
              <p className="text-charcoal-400 text-sm leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
