import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from './assets/logo.jpg';
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
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-center flex flex-col items-center"
      >
        <motion.img
          src={logo}
          alt="Konark Associates"
          className="h-28 sm:h-36 w-auto object-contain drop-shadow-[0_0_30px_rgba(212,175,55,0.3)]"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
        />
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