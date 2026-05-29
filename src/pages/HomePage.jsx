import SEOHead from '../components/SEOHead';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Projects from '../components/Projects';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import RealEstate from '../components/RealEstate';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <>
      <SEOHead
        title="Konark Associates | Construction Company & Interior Designer in Ujjain, Indore, Barnagar"
        description="Top-rated construction company, interior designer & builder in Ujjain, Indore & Barnagar. House construction, commercial construction, bungalow construction, residential building construction with material supply & complete interior work. 5★ rated. Call 098279 53774."
      />
      <Hero />
      <About />
      <Services />
      <Projects />
      <WhyChooseUs />
      <Testimonials />
      <RealEstate />
      <Contact />
    </>
  );
}
