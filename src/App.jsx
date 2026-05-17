import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import RealEstate from './components/RealEstate';
import Contact from './components/Contact';
import Footer from './components/Footer';

function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-charcoal-950 flex flex-col items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="w-16 h-16 bg-gradient-gold rounded-xl flex items-center justify-center mx-auto mb-6 animate-pulse-gold">
          <span className="text-white font-heading font-bold text-2xl">K</span>
        </div>
        <h2 className="font-heading text-2xl font-bold text-white tracking-widest mb-2">
          KONARK
        </h2>
        <p className="text-gold-400 text-xs tracking-[0.3em] uppercase">Associates</p>
        <div className="mt-8 w-48 h-0.5 bg-charcoal-800 rounded-full overflow-hidden mx-auto">
          <motion.div
            className="h-full bg-gradient-gold rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar />
          <main>
            <Hero />
            <About />
            <Services />
            <Projects />
            <WhyChooseUs />
            <Testimonials />
            <RealEstate />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  );
}