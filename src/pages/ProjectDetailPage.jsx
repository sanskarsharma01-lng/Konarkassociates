import { useState, useEffect, useCallback } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Maximize,
  X,
  ChevronLeft,
  ChevronRight,
  Play,
  Camera,
  ArrowRight,
  ArrowUpRight,
  Star,
  Quote,
} from 'lucide-react';
import { projects } from '../data/projectsData';
import SEOHead from '../components/SEOHead';

/* ────────────────────────────────────────────
   Lightbox — fullscreen image viewer
   ──────────────────────────────────────────── */
function Lightbox({ images, index, onClose, onPrev, onNext }) {
  // Close on Escape, navigate with arrow keys
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose, onPrev, onNext]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="lightbox-overlay"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        aria-label="Close lightbox"
      >
        <X size={22} />
      </button>

      {/* Counter */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-50 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium">
        {index + 1} / {images.length}
      </div>

      {/* Navigation arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      {/* Image */}
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          alt={`Gallery image ${index + 1}`}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.92 }}
          transition={{ duration: 0.3 }}
          className="lightbox-image"
          onClick={(e) => e.stopPropagation()}
        />
      </AnimatePresence>
    </motion.div>
  );
}

/* ────────────────────────────────────────────
   ProjectDetailPage
   ──────────────────────────────────────────── */
export default function ProjectDetailPage() {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (idx) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };

  const closeLightbox = useCallback(() => setLightboxOpen(false), []);
  const prevImage = useCallback(
    () => setLightboxIndex((i) => (i === 0 ? project.images.length - 1 : i - 1)),
    [project]
  );
  const nextImage = useCallback(
    () => setLightboxIndex((i) => (i === project.images.length - 1 ? 0 : i + 1)),
    [project]
  );

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  // ── 404 ──
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-charcoal-950 text-white px-4">
        <h1 className="font-heading text-4xl font-bold mb-4">Project Not Found</h1>
        <p className="text-charcoal-400 mb-8">The project you're looking for doesn't exist.</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-gradient-teal text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-teal-400/30 transition-all"
        >
          <ArrowLeft size={18} /> Back to Home
        </Link>
      </div>
    );
  }

  // Related projects — same category, excluding current
  const related = projects
    .filter((p) => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  // Animation variants
  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <>
      <SEOHead
        title={`${project.title} | Konark Associates`}
        description={project.description.slice(0, 155) + '…'}
      />

      {/* ───── HERO BANNER ───── */}
      <section className="relative h-[60vh] sm:h-[70vh] overflow-hidden">
        <motion.img
          src={project.images[0]}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/50 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex items-center gap-2 text-sm text-charcoal-300 mb-6"
          >
            <Link
              to="/"
              className="hover:text-teal-400 transition-colors"
            >
              Home
            </Link>
            <span className="text-charcoal-500">/</span>
            <Link
              to="/"
              onClick={() => setTimeout(() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }), 100)}
              className="hover:text-teal-400 transition-colors"
            >
              Projects
            </Link>
            <span className="text-charcoal-500">/</span>
            <span className="text-teal-400">{project.title}</span>
          </motion.nav>

          {/* Category badge */}
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="inline-block w-fit px-4 py-1.5 rounded-full bg-teal-400/15 text-teal-300 text-xs font-semibold tracking-wider uppercase mb-4 backdrop-blur-sm border border-teal-400/20"
          >
            {project.category}
          </motion.span>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight max-w-3xl"
          >
            {project.title}
          </motion.h1>
        </div>
      </section>

      {/* ───── PROJECT INFO BAR ───── */}
      <section className="bg-charcoal-950 border-b border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-wrap items-center gap-6 sm:gap-10 py-6"
          >
            <div className="flex items-center gap-2.5 text-charcoal-300">
              <div className="w-9 h-9 rounded-full bg-teal-400/10 flex items-center justify-center">
                <MapPin size={16} className="text-teal-400" />
              </div>
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-charcoal-500 font-medium">Location</span>
                <span className="text-sm font-medium">{project.location}</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5 text-charcoal-300">
              <div className="w-9 h-9 rounded-full bg-teal-400/10 flex items-center justify-center">
                <Calendar size={16} className="text-teal-400" />
              </div>
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-charcoal-500 font-medium">Year</span>
                <span className="text-sm font-medium">{project.year}</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5 text-charcoal-300">
              <div className="w-9 h-9 rounded-full bg-teal-400/10 flex items-center justify-center">
                <Maximize size={16} className="text-teal-400" />
              </div>
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-charcoal-500 font-medium">Area</span>
                <span className="text-sm font-medium">{project.area}</span>
              </div>
            </div>

            {/* Back button */}
            <Link
              to="/"
              onClick={() => setTimeout(() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }), 100)}
              className="ml-auto hidden sm:inline-flex items-center gap-2 text-sm text-charcoal-400 hover:text-teal-400 transition-colors group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              All Projects
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ───── DESCRIPTION ───── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="max-w-3xl">
            <span className="inline-block text-teal-500 font-semibold text-sm tracking-widest uppercase mb-4">
              About This Project
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal-950 mb-6">
              Project <span className="text-gradient-teal">Overview</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-teal rounded-full mb-8" />
            <p className="text-charcoal-600 text-lg leading-relaxed">
              {project.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ───── PHOTO GALLERY ───── */}
      <section className="py-16 sm:py-20 bg-charcoal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12">
            <span className="inline-block text-teal-500 font-semibold text-sm tracking-widest uppercase mb-4">
              Gallery
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal-950 mb-4">
              Project <span className="text-gradient-teal">Photos</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-teal rounded-full mx-auto mb-4" />
            <p className="text-charcoal-500 flex items-center justify-center gap-2">
              <Camera size={16} /> {project.images.length} photos — click to enlarge
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <div className="project-gallery-grid">
            {project.images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className={`gallery-item group cursor-pointer ${i === 0 ? 'gallery-item-featured' : ''}`}
                onClick={() => openLightbox(i)}
              >
                <img
                  src={img}
                  alt={`${project.title} — Photo ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-charcoal-950/0 group-hover:bg-charcoal-950/30 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/0 group-hover:bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                    <Maximize size={20} className="text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── VIDEOS ───── */}
      {project.videos.length > 0 && (
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="text-center mb-12">
              <span className="inline-block text-teal-500 font-semibold text-sm tracking-widest uppercase mb-4">
                Videos
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal-950 mb-4">
                Project <span className="text-gradient-teal">Walkthrough</span>
              </h2>
              <div className="w-16 h-1 bg-gradient-teal rounded-full mx-auto mb-4" />
              <p className="text-charcoal-500 flex items-center justify-center gap-2">
                <Play size={16} /> Watch the project walkthrough
              </p>
            </motion.div>

            <div className={`grid gap-6 ${project.videos.length > 1 ? 'md:grid-cols-2' : 'max-w-4xl mx-auto'}`}>
              {project.videos.map((url, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="video-container rounded-2xl overflow-hidden shadow-xl shadow-charcoal-200/50 border border-charcoal-100"
                >
                  <iframe
                    src={url}
                    title={`${project.title} — Video ${i + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ───── CUSTOMER REVIEWS ───── */}
      {project.reviews && project.reviews.length > 0 && (
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="text-center mb-12">
              <span className="inline-block text-teal-500 font-semibold text-sm tracking-widest uppercase mb-4">
                Testimonials
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal-950 mb-4">
                Customer <span className="text-gradient-teal">Reviews</span>
              </h2>
              <div className="w-16 h-1 bg-gradient-teal rounded-full mx-auto mb-4" />
              <p className="text-charcoal-500 max-w-xl mx-auto">
                Hear what our clients have to say about this project
              </p>
            </motion.div>

            <div className={`grid gap-6 ${project.reviews.length === 1 ? 'max-w-2xl mx-auto' : 'md:grid-cols-2'}`}>
              {project.reviews.map((review, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="relative bg-charcoal-50 rounded-2xl p-8 border border-charcoal-100 hover:shadow-xl hover:shadow-teal-400/10 transition-all duration-300 group"
                >
                  {/* Quote icon */}
                  <Quote
                    size={36}
                    className="text-teal-200 mb-5 group-hover:text-teal-300 transition-colors duration-300"
                  />

                  {/* Review text */}
                  <blockquote>
                    <p className="text-charcoal-600 text-base sm:text-lg leading-relaxed mb-6 italic">
                      &ldquo;{review.text}&rdquo;
                    </p>
                  </blockquote>

                  {/* Reviewer info */}
                  <div className="flex items-center gap-4 pt-5 border-t border-charcoal-200">
                    <div className="w-12 h-12 rounded-full bg-gradient-teal flex items-center justify-center text-white font-bold text-sm shrink-0">
                      {review.avatar}
                    </div>
                    <div className="min-w-0">
                      <cite className="not-italic">
                        <p className="font-heading font-semibold text-charcoal-900 truncate">
                          {review.name}
                        </p>
                        <p className="text-charcoal-400 text-sm">{review.role}</p>
                      </cite>
                      {/* Star rating */}
                      <div className="flex gap-0.5 mt-1">
                        {[...Array(5)].map((_, s) => (
                          <Star
                            key={s}
                            size={14}
                            className={s < review.rating
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'fill-charcoal-200 text-charcoal-200'
                            }
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Decorative accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-teal opacity-[0.03] rounded-bl-[80px] rounded-tr-2xl" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ───── CTA ───── */}
      <section className="py-16 sm:py-20 bg-charcoal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeUp}
            className="bg-gradient-dark rounded-3xl p-8 sm:p-14 text-center relative overflow-hidden"
          >
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                backgroundSize: '30px 30px',
              }}
            />
            <div className="relative">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Want Something <span className="text-gradient-teal">Similar?</span>
              </h2>
              <p className="text-charcoal-400 mb-8 max-w-xl mx-auto text-lg">
                Let us bring your vision to life. Get a free consultation and detailed quote for your dream project.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-teal text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-teal-400/30 transition-all duration-300 hover:scale-105 group"
              >
                Start Your Project
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ───── RELATED PROJECTS ───── */}
      {related.length > 0 && (
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="text-center mb-12">
              <span className="inline-block text-teal-500 font-semibold text-sm tracking-widest uppercase mb-4">
                More Work
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal-950 mb-4">
                Related <span className="text-gradient-teal">Projects</span>
              </h2>
              <div className="w-16 h-1 bg-gradient-teal rounded-full mx-auto" />
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((rp, i) => (
                <motion.div
                  key={rp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <Link
                    to={`/project/${rp.id}`}
                    className="group block relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl hover:shadow-teal-400/15 transition-all duration-300"
                  >
                    <img
                      src={rp.thumbnail}
                      alt={rp.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <span className="inline-block px-3 py-1 rounded-full bg-teal-400/20 text-teal-300 text-xs font-medium mb-2 backdrop-blur-sm border border-teal-400/20">
                        {rp.category}
                      </span>
                      <h3 className="text-white font-heading text-lg font-semibold flex items-center gap-2">
                        {rp.title}
                        <ArrowUpRight size={16} className="text-teal-400" />
                      </h3>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ───── LIGHTBOX ───── */}
      <AnimatePresence>
        {lightboxOpen && (
          <Lightbox
            images={project.images}
            index={lightboxIndex}
            onClose={closeLightbox}
            onPrev={prevImage}
            onNext={nextImage}
          />
        )}
      </AnimatePresence>
    </>
  );
}
