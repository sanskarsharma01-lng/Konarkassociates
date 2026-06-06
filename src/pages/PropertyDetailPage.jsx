import { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  BedDouble,
  Bath,
  Maximize,
  Building2,
  LandPlot,
  Calendar,
  Compass,
  Layers,
  Sofa,
  Car,
  CheckCircle2,
  X,
  ChevronLeft,
  ChevronRight,
  Camera,
  Phone,
  Mail,
  ArrowUpRight,
  Star,
  Shield,
  Navigation,
} from 'lucide-react';
import { properties } from '../data/propertiesData';
import SEOHead from '../components/SEOHead';

/* ────────────────────────────────────────────
   Lightbox — fullscreen image viewer
   ──────────────────────────────────────────── */
function Lightbox({ images, index, onClose, onPrev, onNext }) {
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
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        aria-label="Close lightbox"
      >
        <X size={22} />
      </button>

      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-50 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium">
        {index + 1} / {images.length}
      </div>

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
   PropertyDetailPage
   ──────────────────────────────────────────── */
export default function PropertyDetailPage() {
  const { propertyId } = useParams();
  const property = properties.find((p) => p.id === propertyId);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [activeImage, setActiveImage] = useState(0);

  const openLightbox = (idx) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };

  const closeLightbox = useCallback(() => setLightboxOpen(false), []);
  const prevImage = useCallback(
    () => setLightboxIndex((i) => (i === 0 ? property.images.length - 1 : i - 1)),
    [property]
  );
  const nextImage = useCallback(
    () => setLightboxIndex((i) => (i === property.images.length - 1 ? 0 : i + 1)),
    [property]
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [propertyId]);

  // ── 404 ──
  if (!property) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-charcoal-950 text-white px-4">
        <h1 className="font-heading text-4xl font-bold mb-4">Property Not Found</h1>
        <p className="text-charcoal-400 mb-8">The property you're looking for doesn't exist.</p>
        <Link
          to="/real-estate-ujjain"
          className="inline-flex items-center gap-2 bg-gradient-teal text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-teal-400/30 transition-all"
        >
          <ArrowLeft size={18} /> Back to Properties
        </Link>
      </div>
    );
  }

  // Related properties — same type, excluding current
  const related = properties
    .filter((p) => p.type === property.type && p.id !== property.id)
    .slice(0, 3);

  // If not enough related, fill with other properties
  const moreProperties = related.length < 3
    ? [...related, ...properties.filter((p) => p.id !== property.id && !related.find(r => r.id === p.id)).slice(0, 3 - related.length)]
    : related;

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  // Property specs for info cards
  const specs = [
    ...(property.beds > 0 ? [{ icon: BedDouble, label: 'Bedrooms', value: `${property.beds} BHK` }] : []),
    ...(property.baths > 0 ? [{ icon: Bath, label: 'Bathrooms', value: `${property.baths}` }] : []),
    { icon: Maximize, label: 'Area', value: property.area },
    { icon: Compass, label: 'Facing', value: property.facing },
    { icon: Layers, label: 'Floor', value: property.floor },
    { icon: Sofa, label: 'Furnishing', value: property.furnishing },
    { icon: Car, label: 'Parking', value: property.parking },
    { icon: Calendar, label: 'Possession', value: property.possession },
  ].filter(s => s.value !== 'N/A');

  return (
    <>
      <SEOHead
        title={`${property.title} — ${property.type} in ${property.location} | Konark Associates`}
        description={property.description.slice(0, 155) + '…'}
        canonical={`https://konarkassociates.com/property/${property.id}/`}
      />

      {/* ───── HERO BANNER ───── */}
      <section className="relative h-[60vh] sm:h-[70vh] overflow-hidden">
        <motion.img
          src={property.images[activeImage]}
          alt={property.title}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          key={activeImage}
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
            <Link to="/" className="hover:text-teal-400 transition-colors">Home</Link>
            <span className="text-charcoal-500">/</span>
            <Link to="/real-estate-ujjain" className="hover:text-teal-400 transition-colors">Real Estate</Link>
            <span className="text-charcoal-500">/</span>
            <span className="text-teal-400">{property.title}</span>
          </motion.nav>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-wrap items-center gap-3 mb-4"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-teal-400/15 text-teal-300 text-xs font-semibold tracking-wider uppercase backdrop-blur-sm border border-teal-400/20">
              {property.type}
            </span>
            <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase backdrop-blur-sm border ${
              property.status === 'Ready to Move'
                ? 'bg-emerald-400/15 text-emerald-300 border-emerald-400/20'
                : property.status === 'Under Construction'
                ? 'bg-amber-400/15 text-amber-300 border-amber-400/20'
                : 'bg-blue-400/15 text-blue-300 border-blue-400/20'
            }`}>
              {property.status}
            </span>
          </motion.div>

          {/* Title & Price */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight max-w-3xl"
          >
            {property.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-wrap items-center gap-6 mt-4"
          >
            <span className="text-2xl sm:text-3xl font-bold text-gradient-teal">{property.price}</span>
            <span className="flex items-center gap-1.5 text-charcoal-300">
              <MapPin size={16} className="text-teal-400" />
              {property.location}
            </span>
          </motion.div>
        </div>

        {/* Hero thumbnail strip */}
        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-8 flex gap-2">
          {property.images.slice(0, 4).map((img, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + i * 0.1 }}
              onClick={() => setActiveImage(i)}
              className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                activeImage === i ? 'border-teal-400 shadow-lg shadow-teal-400/30' : 'border-white/20 opacity-70 hover:opacity-100'
              }`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
            </motion.button>
          ))}
          {property.images.length > 4 && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1 }}
              onClick={() => openLightbox(4)}
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden border-2 border-white/20 bg-charcoal-900/80 backdrop-blur-sm flex items-center justify-center text-white text-sm font-semibold hover:border-teal-400/50 transition-all"
            >
              +{property.images.length - 4}
            </motion.button>
          )}
        </div>
      </section>

      {/* ───── PROPERTY SPECS BAR ───── */}
      <section className="bg-charcoal-950 border-b border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-wrap items-center gap-6 sm:gap-10 py-6"
          >
            {property.beds > 0 && (
              <div className="flex items-center gap-2.5 text-charcoal-300">
                <div className="w-9 h-9 rounded-full bg-teal-400/10 flex items-center justify-center">
                  <BedDouble size={16} className="text-teal-400" />
                </div>
                <div>
                  <span className="block text-[11px] uppercase tracking-wider text-charcoal-500 font-medium">Bedrooms</span>
                  <span className="text-sm font-medium">{property.beds} BHK</span>
                </div>
              </div>
            )}
            <div className="flex items-center gap-2.5 text-charcoal-300">
              <div className="w-9 h-9 rounded-full bg-teal-400/10 flex items-center justify-center">
                <Maximize size={16} className="text-teal-400" />
              </div>
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-charcoal-500 font-medium">Area</span>
                <span className="text-sm font-medium">{property.area}</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5 text-charcoal-300">
              <div className="w-9 h-9 rounded-full bg-teal-400/10 flex items-center justify-center">
                <MapPin size={16} className="text-teal-400" />
              </div>
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-charcoal-500 font-medium">Location</span>
                <span className="text-sm font-medium">{property.location}</span>
              </div>
            </div>

            <Link
              to="/real-estate-ujjain"
              className="ml-auto hidden sm:inline-flex items-center gap-2 text-sm text-charcoal-400 hover:text-teal-400 transition-colors group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              All Properties
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ───── MAIN CONTENT — Two Column Layout ───── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Left Column — Description + Details */}
            <div className="lg:col-span-2 space-y-12">
              {/* About */}
              <motion.div {...fadeUp}>
                <span className="inline-block text-teal-500 font-semibold text-sm tracking-widest uppercase mb-4">
                  About This Property
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal-950 mb-6">
                  Property <span className="text-gradient-teal">Overview</span>
                </h2>
                <div className="w-16 h-1 bg-gradient-teal rounded-full mb-8" />
                <p className="text-charcoal-600 text-lg leading-relaxed">
                  {property.description}
                </p>
              </motion.div>

              {/* Key Highlights */}
              <motion.div {...fadeUp}>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-charcoal-950 mb-6 flex items-center gap-3">
                  <Star size={22} className="text-teal-400" />
                  Key Highlights
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {property.highlights.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, duration: 0.4 }}
                      className="flex items-start gap-3 p-4 rounded-xl bg-charcoal-50 border border-charcoal-100 hover:border-teal-200 hover:shadow-sm transition-all"
                    >
                      <CheckCircle2 size={18} className="text-teal-500 shrink-0 mt-0.5" />
                      <span className="text-charcoal-700 text-sm">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Property Specifications */}
              <motion.div {...fadeUp}>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-charcoal-950 mb-6 flex items-center gap-3">
                  <Building2 size={22} className="text-teal-400" />
                  Property Specifications
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {specs.map((spec, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, duration: 0.4 }}
                      className="p-4 rounded-2xl bg-charcoal-50 border border-charcoal-100 text-center hover:border-teal-200 hover:shadow-md transition-all group"
                    >
                      <div className="w-10 h-10 rounded-full bg-teal-400/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-teal-400/20 transition-colors">
                        <spec.icon size={18} className="text-teal-500" />
                      </div>
                      <p className="text-[11px] uppercase tracking-wider text-charcoal-400 font-medium mb-1">{spec.label}</p>
                      <p className="font-semibold text-charcoal-900 text-sm">{spec.value}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Amenities */}
              <motion.div {...fadeUp}>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-charcoal-950 mb-6 flex items-center gap-3">
                  <Shield size={22} className="text-teal-400" />
                  Amenities
                </h3>
                <div className="flex flex-wrap gap-3">
                  {property.amenities.map((amenity, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.03, duration: 0.3 }}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 text-teal-700 text-sm font-medium border border-teal-100 hover:bg-teal-100 transition-colors"
                    >
                      <CheckCircle2 size={14} />
                      {amenity}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column — Sticky Contact Card + Nearby */}
            <div className="space-y-6">
              {/* Contact Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="sticky top-24 space-y-6"
              >
                <div className="bg-gradient-dark rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                    backgroundSize: '30px 30px',
                  }} />
                  <div className="relative">
                    <h3 className="font-heading text-xl font-bold mb-2">Interested in this property?</h3>
                    <p className="text-charcoal-400 text-sm mb-6">Get in touch for a site visit, pricing details, or any questions.</p>

                    <div className="space-y-3 mb-6">
                      <a
                        href="tel:09827953774"
                        className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
                      >
                        <div className="w-10 h-10 rounded-full bg-gradient-teal flex items-center justify-center shrink-0">
                          <Phone size={16} />
                        </div>
                        <div>
                          <p className="text-xs text-charcoal-400">Call Us</p>
                          <p className="font-semibold text-sm">098279 53774</p>
                        </div>
                      </a>
                      <a
                        href="mailto:konarkassociatesindore@gmail.com"
                        className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
                      >
                        <div className="w-10 h-10 rounded-full bg-gradient-teal flex items-center justify-center shrink-0">
                          <Mail size={16} />
                        </div>
                        <div>
                          <p className="text-xs text-charcoal-400">Email Us</p>
                          <p className="font-semibold text-sm truncate">konarkassociatesindore@gmail.com</p>
                        </div>
                      </a>
                    </div>

                    <Link
                      to="/contact"
                      className="flex items-center justify-center gap-2 w-full bg-gradient-teal text-white px-6 py-3.5 rounded-full font-semibold hover:shadow-2xl hover:shadow-teal-400/30 transition-all duration-300 hover:scale-[1.02] group"
                    >
                      Schedule Site Visit
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Price Card */}
                <div className="bg-charcoal-50 rounded-2xl p-6 border border-charcoal-100">
                  <div className="text-center">
                    <p className="text-xs uppercase tracking-wider text-charcoal-400 font-medium mb-2">Price</p>
                    <p className="font-heading text-3xl font-bold text-gradient-teal mb-1">{property.price}</p>
                    <p className="text-charcoal-400 text-sm">{property.area} • {property.type}</p>
                  </div>
                </div>

                {/* Nearby Places */}
                {property.nearbyPlaces && property.nearbyPlaces.length > 0 && (
                  <div className="bg-white rounded-2xl p-6 border border-charcoal-100 shadow-sm">
                    <h4 className="font-heading font-semibold text-charcoal-900 mb-4 flex items-center gap-2">
                      <Navigation size={18} className="text-teal-500" />
                      Nearby Places
                    </h4>
                    <div className="space-y-3">
                      {property.nearbyPlaces.map((place, i) => (
                        <div key={i} className="flex items-center justify-between py-2 border-b border-charcoal-50 last:border-0">
                          <span className="text-charcoal-700 text-sm">{place.name}</span>
                          <span className="text-teal-500 text-sm font-medium">{place.distance}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
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
              Property <span className="text-gradient-teal">Photos</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-teal rounded-full mx-auto mb-4" />
            <p className="text-charcoal-500 flex items-center justify-center gap-2">
              <Camera size={16} /> {property.images.length} photos — click to enlarge
            </p>
          </motion.div>

          <div className="project-gallery-grid">
            {property.images.map((img, i) => (
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
                  alt={`${property.title} — Photo ${i + 1}`}
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

      {/* ───── CTA ───── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeUp}
            className="bg-gradient-dark rounded-3xl p-8 sm:p-14 text-center relative overflow-hidden"
          >
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                backgroundSize: '30px 30px',
              }}
            />
            <div className="relative">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Interested in this <span className="text-gradient-teal">Property?</span>
              </h2>
              <p className="text-charcoal-400 mb-8 max-w-xl mx-auto text-lg">
                Schedule a free site visit or get detailed pricing. Our real estate experts are ready to help you make the right decision.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-teal text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-teal-400/30 transition-all duration-300 hover:scale-105 group"
                >
                  Contact Us Today
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:09827953774"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-full font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <Phone size={18} />
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ───── RELATED PROPERTIES ───── */}
      {moreProperties.length > 0 && (
        <section className="py-16 sm:py-20 bg-charcoal-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="text-center mb-12">
              <span className="inline-block text-teal-500 font-semibold text-sm tracking-widest uppercase mb-4">
                More Properties
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal-950 mb-4">
                Similar <span className="text-gradient-teal">Properties</span>
              </h2>
              <div className="w-16 h-1 bg-gradient-teal rounded-full mx-auto" />
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {moreProperties.map((rp, i) => (
                <motion.div
                  key={rp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <Link
                    to={`/property/${rp.id}`}
                    className="group block relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl hover:shadow-teal-400/15 transition-all duration-300 bg-white border border-charcoal-100"
                  >
                    <div className="relative overflow-hidden h-56">
                      <img
                        src={rp.img}
                        alt={rp.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-gradient-teal text-white text-xs font-bold tracking-wider">
                        {rp.type}
                      </div>
                      <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-charcoal-900 text-xs font-bold">
                        {rp.priceLabel}
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-heading font-semibold text-charcoal-900 text-lg mb-1 flex items-center gap-2">
                        {rp.title}
                        <ArrowUpRight size={16} className="text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h3>
                      <div className="flex items-center gap-1 text-charcoal-400 text-sm mb-3">
                        <MapPin size={14} />
                        <span>{rp.location}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm text-charcoal-500 border-t border-charcoal-100 pt-3">
                        {rp.beds > 0 ? (
                          <span className="flex items-center gap-1"><BedDouble size={14} /> {rp.beds} Bed</span>
                        ) : rp.type === 'Plot' ? (
                          <span className="flex items-center gap-1"><LandPlot size={14} /> Plot</span>
                        ) : (
                          <span className="flex items-center gap-1"><Building2 size={14} /> Commercial</span>
                        )}
                        {rp.baths > 0 && (
                          <span className="flex items-center gap-1"><Bath size={14} /> {rp.baths} Bath</span>
                        )}
                        <span className="flex items-center gap-1"><Maximize size={14} /> {rp.area}</span>
                      </div>
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
            images={property.images}
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
