import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const categories = ['All', 'Residential', 'Interior', 'Elevation', 'Commercial'];

const projects = [
  { title: 'Modern Villa Residence', category: 'Residential', img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80', span: 'col-span-1 row-span-1 md:col-span-2 md:row-span-2' },
  { title: 'Luxury Living Room', category: 'Interior', img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80', span: '' },
  { title: 'Contemporary Elevation', category: 'Elevation', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80', span: '' },
  { title: 'Corporate Office Space', category: 'Commercial', img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80', span: '' },
  { title: 'Designer Kitchen', category: 'Interior', img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80', span: '' },
  { title: 'Elegant Bungalow', category: 'Residential', img: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80', span: 'col-span-1 md:col-span-2' },
  { title: 'Modern Bedroom Suite', category: 'Interior', img: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&q=80', span: '' },
  { title: 'Commercial Complex', category: 'Commercial', img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80', span: '' },
];

export default function Projects() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-teal-500 font-semibold text-sm tracking-widest uppercase mb-4">
            Portfolio
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-950 mb-4">
            Featured <span className="text-gradient-teal">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-teal rounded-full mx-auto mb-6" />
          <p className="text-charcoal-500 max-w-2xl mx-auto text-lg">
            Explore our portfolio of stunning residential, commercial, and interior design projects.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                active === cat
                  ? 'bg-gradient-teal text-white shadow-lg shadow-teal-400/25'
                  : 'bg-charcoal-50 text-charcoal-600 hover:bg-teal-50 hover:text-teal-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer ${project.span}`}
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-64 sm:h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                  style={project.span?.includes('row-span-2') ? { height: '100%', minHeight: '300px' } : {}}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-3 py-1 rounded-full bg-teal-400/20 text-teal-300 text-xs font-medium mb-2 backdrop-blur-sm border border-teal-400/20">
                    {project.category}
                  </span>
                  <h3 className="text-white font-heading text-lg font-semibold flex items-center gap-2">
                    {project.title}
                    <ArrowUpRight size={16} className="text-teal-400" />
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
