import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Star, ChevronRight, Clock, Users } from 'lucide-react'
import PageWrapper from '../components/PageWrapper'
import aariImg from '../assets/aari.png'
import tailoringImg from '../assets/tailoring.png'
import makeupImg from '../assets/makeup.png'
import aboutImg from '../assets/about.png'

const courses = [
  {
    id: 'aari',
    img: aariImg,
    title: 'Aari Embroidery',
    subtitle: 'Basic to Advanced',
    duration: '3 Months',
    students: '150+',
    rating: 4.9,
    description:
      'Dive deep into the ancient art of Aari (tambour) embroidery — from holding the hook to creating stunning bridal blouses and home decor items with zari, sequins, silk threads, and beadwork.',
    features: [
      'Basic & advanced needle techniques',
      'Gold and silver zari work',
      'Sequin & bead application',
      'Bridal blouse designing',
      'Home décor embroidery',
      'Pattern tracing & transfer',
    ],
    price: 'Enquire for Details',
    badge: '🌟 Most Popular',
    color: 'from-rose-100 to-pink-50',
    accent: '#e11d48',
    accentLight: '#fff1f2',
  },
  {
    id: 'tailoring',
    img: tailoringImg,
    title: 'Tailoring & Fashion Designing',
    subtitle: 'Full Course',
    duration: '4 Months',
    students: '120+',
    rating: 4.8,
    description:
      'Learn garment construction from scratch — taking measurements, cutting, stitching, and finally creating beautiful dresses, churidars, saree blouses, and western wear.',
    features: [
      'Body measurements & pattern making',
      'Fabric selection & cutting',
      'Churidar & blouse stitching',
      'Saree draping',
      'Western wear construction',
      'Fashion design basics',
    ],
    price: 'Enquire for Details',
    badge: '✂️ In-demand',
    color: 'from-purple-100 to-violet-50',
    accent: '#a855f7',
    accentLight: '#f3e8ff',
  },
  {
    id: 'makeup',
    img: makeupImg,
    title: 'Beauty & Makeup',
    subtitle: 'Professional Course',
    duration: '2 Months',
    students: '200+',
    rating: 5.0,
    description:
      'Professional makeup artistry covering everyday glam to bridal makeup, skincare, and face treatments — also includes mehandi / henna design for bride and guests.',
    features: [
      'Skin prep & foundation',
      'Eye makeup techniques',
      'Bridal makeup full look',
      'Mehandi / henna designs',
      'Hair styling basics',
      'Client handling skills',
    ],
    price: 'Enquire for Details',
    badge: '💄 Best Seller',
    color: 'from-amber-100 to-yellow-50',
    accent: '#f59e0b',
    accentLight: '#fffbeb',
  },
  {
    id: 'crafts',
    img: null,
    emoji: '🧶',
    title: 'Craft Courses',
    subtitle: 'Tassels, Brooches & More',
    duration: '1 Month',
    students: '180+',
    rating: 4.7,
    description:
      'Learn beautiful handcraft skills — tassel making, decorative brooches, fabric & cloth dolls, and elaborate varusa (pooja) plates with floral and rangoli designs.',
    features: [
      'Silk thread tassels',
      'Floral & stone brooches',
      'Handmade fabric dolls',
      'Varusa plate decoration',
      'Gift packaging ideas',
      'Resale & marketing tips',
    ],
    price: 'Enquire for Details',
    badge: '🎨 Creative',
    color: 'from-teal-100 to-emerald-50',
    accent: '#0d9488',
    accentLight: '#f0fdf4',
  },
]

export default function Courses() {
  return (
    <PageWrapper>
      {/* ── Hero Banner ───────────────────────────────────── */}
      <section
        className="pt-28 pb-16 px-4 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #fff1f2 0%, #f3e8ff 100%)' }}
      >
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-20 blur-3xl" style={{ background: '#fda4af' }} />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-vibes text-5xl text-rose-400 mb-2"
          >
            Learn & Grow
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-4xl md:text-5xl font-bold mb-4"
            style={{ color: '#1a1a2e' }}
          >
            Our <span className="gradient-text">Courses</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 font-inter max-w-xl mx-auto mb-6"
          >
            Transform your passion into a profession with our expert-led, certification-backed courses.
          </motion.p>

          {/* Summer banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full font-inter text-sm font-bold"
            style={{ background: 'linear-gradient(135deg, #e11d48, #a855f7)', color: 'white', boxShadow: '0 8px 30px rgba(225,29,72,0.3)' }}
          >
            🌞 Summer Offer: First 30 Days FREE for New Enrollments!
          </motion.div>
        </div>
      </section>

      {/* ── Courses Grid ──────────────────────────────────── */}
      <section className="section-padding px-4 bg-white">
        <div className="max-w-7xl mx-auto space-y-10">
          {courses.map((c, i) => (
            <motion.article
              key={c.id}
              id={`course-${c.id}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl overflow-hidden shadow-lg group"
              style={{ border: `1px solid ${c.accentLight}` }}
            >
              <div className={`grid grid-cols-1 ${i % 2 === 1 ? 'lg:grid-cols-[60%_40%]' : 'lg:grid-cols-[40%_60%]'}`}>
                {/* Image — alternate sides */}
                <div
                  className={`relative overflow-hidden bg-gradient-to-br ${c.color} ${i % 2 === 1 ? 'order-last lg:order-first' : ''}`}
                  style={{ minHeight: '300px' }}
                >
                  {c.img ? (
                    <img
                      src={c.img}
                      alt={c.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 absolute inset-0"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <span className="text-8xl group-hover:scale-110 transition-transform duration-300">{c.emoji}</span>
                    </div>
                  )}
                  {/* Badge */}
                  <div
                    className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-bold font-inter text-white"
                    style={{ background: c.accent }}
                  >
                    {c.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-10 flex flex-col justify-center bg-white">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="text-xs font-bold font-inter uppercase tracking-widest px-3 py-1 rounded-full"
                      style={{ background: c.accentLight, color: c.accent }}
                    >
                      {c.subtitle}
                    </span>
                  </div>
                  <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-3" style={{ color: '#1a1a2e' }}>
                    {c.title}
                  </h2>
                  <p className="text-gray-500 font-inter text-sm leading-relaxed mb-4">{c.description}</p>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 mb-5">
                    <div className="flex items-center gap-1.5 text-sm text-gray-500 font-inter">
                      <Clock size={15} style={{ color: c.accent }} />
                      {c.duration}
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-gray-500 font-inter">
                      <Users size={15} style={{ color: c.accent }} />
                      {c.students} enrolled
                    </div>
                    <div className="flex items-center gap-1">
                      {Array(5).fill(0).map((_, s) => (
                        <Star key={s} size={13} fill={s < Math.floor(c.rating) ? '#f59e0b' : 'transparent'} className="text-amber-400" />
                      ))}
                      <span className="text-xs text-gray-400 font-inter ml-1">{c.rating}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {c.features.map((f, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-600 font-inter">
                        <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0" style={{ background: c.accentLight }}>
                          <span style={{ color: c.accent, fontSize: '10px' }}>✓</span>
                        </div>
                        {f}
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 font-semibold font-inter px-6 py-3 rounded-full text-white transition-all hover:opacity-90 hover:shadow-lg self-start"
                    style={{ background: `linear-gradient(135deg, ${c.accent}, ${c.accent}cc)`, boxShadow: `0 4px 20px ${c.accent}50` }}
                  >
                    Enroll in This Course <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="py-16 px-4" style={{ background: 'linear-gradient(135deg, #fff1f2, #f3e8ff)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-3xl font-bold mb-3" style={{ color: '#1a1a2e' }}>
              Not Sure Which Course? <span className="gradient-text">We'll Guide You!</span>
            </h2>
            <p className="text-gray-500 font-inter mb-6">Call or WhatsApp us and our experts will recommend the best course for you.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="gradient-btn text-white px-8 py-3 rounded-full font-semibold font-inter">
                Get Free Consultation
              </Link>
              <a href="tel:+918072769642" className="px-8 py-3 rounded-full font-semibold font-inter border-2 text-rose-600 border-rose-300 hover:bg-rose-50 transition-colors">
                📞 +91 80727 69642
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}
