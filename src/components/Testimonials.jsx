import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Patel',
    role: 'Homeowner',
    text: 'KONARK ASSOCIATES transformed our dream home into reality. Their attention to detail, modern design approach, and commitment to quality exceeded all our expectations. Highly recommended!',
    rating: 5,
    avatar: 'RP',
  },
  {
    name: 'Priya Sharma',
    role: 'Interior Client',
    text: 'The interior design for our 3BHK flat was absolutely stunning. The modular kitchen and wardrobe designs are both beautiful and functional. The team was professional and delivered on time.',
    rating: 5,
    avatar: 'PS',
  },
  {
    name: 'Amit Desai',
    role: 'Commercial Client',
    text: 'Outstanding commercial space design for our corporate office. The 3D rendering helped us visualize everything perfectly before construction began. True professionals!',
    rating: 5,
    avatar: 'AD',
  },
  {
    name: 'Neha Joshi',
    role: 'Real Estate Client',
    text: 'Their real estate services helped us find the perfect property. The team guided us through every step with transparency and expertise. Exceptional service!',
    rating: 5,
    avatar: 'NJ',
  },
  {
    name: 'Vikram Singh',
    role: 'Bungalow Owner',
    text: 'From planning to execution, the bungalow design was flawless. The landscaping added a beautiful touch. KONARK ASSOCIATES is the best in the business!',
    rating: 5,
    avatar: 'VS',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDir(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index) => {
    setDir(index > current ? 1 : -1);
    setCurrent(index);
  };

  const prev = () => {
    setDir(-1);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setDir(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  };

  return (
    <section className="py-24 bg-charcoal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-gold-500 font-semibold text-sm tracking-widest uppercase mb-4">
            Testimonials
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-950 mb-4">
            What Our <span className="text-gradient-gold">Clients Say</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-gold rounded-full mx-auto mb-6" />
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden rounded-3xl bg-white shadow-xl shadow-charcoal-200/30 p-8 sm:p-12 min-h-[320px] flex items-center">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={current}
                custom={dir}
                initial={{ opacity: 0, x: dir * 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -dir * 80 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="w-full"
              >
                <Quote size={40} className="text-gold-200 mb-6 mx-auto" />
                <p className="text-charcoal-600 text-lg sm:text-xl leading-relaxed text-center mb-8 italic">
                  &ldquo;{testimonials[current].text}&rdquo;
                </p>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center text-white font-bold text-lg">
                    {testimonials[current].avatar}
                  </div>
                  <div className="text-left">
                    <p className="font-heading font-semibold text-charcoal-900">
                      {testimonials[current].name}
                    </p>
                    <p className="text-charcoal-400 text-sm">{testimonials[current].role}</p>
                    <div className="flex gap-0.5 mt-1">
                      {[...Array(testimonials[current].rating)].map((_, i) => (
                        <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Nav Arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-charcoal-600 hover:text-gold-500 hover:shadow-xl transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-charcoal-600 hover:text-gold-500 hover:shadow-xl transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === current ? 'w-8 bg-gradient-gold' : 'w-2.5 bg-charcoal-300 hover:bg-gold-400'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
