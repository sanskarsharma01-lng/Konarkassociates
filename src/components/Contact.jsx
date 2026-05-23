import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, Globe, Camera, MessageCircle, Briefcase } from 'lucide-react';

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '098279 53774', href: 'tel:09827953774' },
  { icon: Mail, label: 'Email', value: 'info@konarkassociates.com', href: 'mailto:info@konarkassociates.com' },
  { icon: MapPin, label: 'Office', value: 'Konark Associates, Main Road, Barnagar, Madhya Pradesh', href: null },
  { icon: Clock, label: 'Working Hours', value: 'Mon - Sat: 9:00 AM - 7:00 PM', href: null },
];

const socials = [
  { icon: Globe, href: '#', label: 'Facebook' },
  { icon: Camera, href: '#', label: 'Instagram' },
  { icon: MessageCircle, href: '#', label: 'Twitter' },
  { icon: Briefcase, href: '#', label: 'LinkedIn' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-charcoal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-gold-500 font-semibold text-sm tracking-widest uppercase mb-4">
            Get In Touch
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-950 mb-4">
            Contact <span className="text-gradient-gold">Us</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-gold rounded-full mx-auto mb-6" />
          <p className="text-charcoal-500 max-w-2xl mx-auto text-lg">
            Ready to start your project? Get in touch with our team in Ujjain, Indore & Barnagar for a free consultation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-lg shadow-charcoal-200/20 border border-charcoal-100">
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-6">Send us a message</h3>

              <div className="space-y-5">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-charcoal-700 mb-1.5">Full Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-xl border border-charcoal-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none transition-all text-charcoal-800 placeholder:text-charcoal-300"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-charcoal-700 mb-1.5">Email</label>
                    <input
                      id="contact-email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-charcoal-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none transition-all text-charcoal-800 placeholder:text-charcoal-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-sm font-medium text-charcoal-700 mb-1.5">Phone</label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl border border-charcoal-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none transition-all text-charcoal-800 placeholder:text-charcoal-300"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-charcoal-700 mb-1.5">Message</label>
                  <textarea
                    id="contact-message"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    rows="4"
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 rounded-xl border border-charcoal-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none transition-all text-charcoal-800 placeholder:text-charcoal-300 resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 w-full flex items-center justify-center gap-2 bg-gradient-gold text-white px-6 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-gold-400/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                {submitted ? (
                  'Message Sent! ✓'
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -3 }}
                  className="bg-white rounded-2xl p-5 shadow-sm border border-charcoal-100 hover:border-gold-300/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold-50 flex items-center justify-center mb-3">
                    <info.icon size={18} className="text-gold-600" />
                  </div>
                  <p className="text-sm text-charcoal-400 mb-1">{info.label}</p>
                  {info.href ? (
                    <a href={info.href} className="text-charcoal-800 font-medium hover:text-gold-600 transition-colors text-sm">
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-charcoal-800 font-medium text-sm">{info.value}</p>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-charcoal-100 h-64 bg-charcoal-100 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-charcoal-200 to-charcoal-100" />
              <div className="relative text-center">
                <MapPin size={40} className="text-gold-400 mx-auto mb-2" />
                <p className="text-charcoal-600 font-medium">Google Maps</p>
                <p className="text-charcoal-400 text-sm">Konark Associates — Barnagar, Ujjain, Indore</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-3">
              <p className="text-charcoal-600 font-medium text-sm mr-2">Follow Us:</p>
              {socials.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  className="w-11 h-11 rounded-xl bg-white border border-charcoal-100 flex items-center justify-center text-charcoal-500 hover:bg-gradient-gold hover:text-white hover:border-gold-400 hover:shadow-lg hover:shadow-gold-400/20 transition-all duration-300 hover:scale-110"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
