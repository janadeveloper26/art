import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Sparkles, Award, Users, Clock, Star, ChevronRight,
  BookOpen, School, Wifi
} from 'lucide-react'
import PageWrapper from '../components/PageWrapper'
import heroImg from '../assets/hero.png'
import aariImg from '../assets/aari.png'
import tailoringImg from '../assets/tailoring.png'
import makeupImg from '../assets/makeup.png'
import aboutImg from '../assets/about.png'

// ── Helpers ────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
}

function AnimatedSection({ children, className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={isInView ? 'show' : 'hidden'}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ── Course cards data ──────────────────────────────────────
const courses = [
  {
    img: aariImg,
    title: 'Aari Embroidery',
    subtitle: 'Basic to Advanced',
    desc: 'Master the art of aari embroidery from beginner level to professional grade. Gold zari, sequins & more.',
    color: 'from-rose-100 to-pink-50',
    accent: '#e11d48',
  },
  {
    img: tailoringImg,
    title: 'Tailoring & Fashion',
    subtitle: 'Full Course',
    desc: 'Learn complete garment construction and fashion designing — from measurements to final stitch.',
    color: 'from-purple-100 to-violet-50',
    accent: '#a855f7',
  },
  {
    img: makeupImg,
    title: 'Beauty & Makeup',
    subtitle: 'Bridal & Mehandi',
    desc: 'Professional makeup artistry, skincare, and intricate mehndi design for all occasions.',
    color: 'from-amber-100 to-yellow-50',
    accent: '#f59e0b',
  },
  {
    img: null,
    emoji: '🎨',
    title: 'Craft Courses',
    subtitle: 'Tassels, Brooches & More',
    desc: 'Create beautiful handicrafts — tassels, brooches, fabric dolls, varusa plates and much more.',
    color: 'from-teal-100 to-emerald-50',
    accent: '#0d9488',
  },
]

// ── Testimonials ───────────────────────────────────────────
const testimonials = [
  {
    name: 'Priya Devi',
    course: 'Aari Embroidery',
    text: 'I joined Glorious Art Creations with zero knowledge. Within 3 months, I am now taking orders and earning from home. Amazing teaching!',
    stars: 5,
  },
  {
    name: 'Kavitha Rajan',
    course: 'Tailoring & Fashion',
    text: 'The tailoring course changed my life. The trainer is so patient and skilled. I now have my own boutique!',
    stars: 5,
  },
  {
    name: 'Meena Sundaram',
    course: 'Makeup & Mehandi',
    text: 'Best academy in Chidambaram! I learned bridal makeup and mehandi. The certification helped me get clients right away.',
    stars: 5,
  },
  {
    name: 'Lakshmi K.',
    course: 'Craft Courses',
    text: 'Loved every session! The craft courses are fun and profitable. I sell my brooches online now thanks to this training.',
    stars: 5,
  },
]

// ── Stats ─────────────────────────────────────────────────
const stats = [
  { icon: <Users size={24} />, value: '500+', label: 'Students Trained' },
  { icon: <BookOpen size={24} />, value: '10+', label: 'Courses Offered' },
  { icon: <Award size={24} />, value: '100%', label: 'Certified' },
  { icon: <Clock size={24} />, value: '5+', label: 'Years Experience' },
]

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default function Home() {
  return (
    <PageWrapper>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20" style={{ overflowX: 'hidden' }}>
        {/* BG gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #fff1f2 0%, #fdf4ff 40%, #ede9fe 100%)',
          }}
        />
        {/* Decorative blobs */}
        <div
          className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-30 blur-3xl"
          style={{ background: 'radial-gradient(circle, #fda4af, transparent)' }}
        />
        <div
          className="absolute bottom-20 left-0 w-80 h-80 rounded-full opacity-25 blur-3xl"
          style={{ background: 'radial-gradient(circle, #c084fc, transparent)' }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              {/* Summer badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 text-sm font-semibold font-inter"
                style={{ background: 'linear-gradient(135deg, #fef3c7, #fde68a)', color: '#92400e', border: '1px solid #fcd34d' }}
              >
                <span className="animate-pulse">🌞</span>
                Summer Special: 30 Days FREE Course! Limited Seats
                <ChevronRight size={14} />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4"
                style={{ color: '#1a1a2e' }}
              >
                Empowering Women Through{' '}
                <span className="gradient-text">Creativity & Skills</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-gray-600 text-lg font-inter leading-relaxed mb-8 max-w-xl"
              >
                Join <span className="font-semibold text-rose-500">Glorious Art Creations</span> — Chidambaram's premier beauty
                and fashion academy. Learn Aari Embroidery, Tailoring, Makeup, and Crafts from expert trainers.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex flex-wrap gap-4 mb-10"
              >
                <Link
                  to="/contact"
                  id="hero-enroll-btn"
                  className="gradient-btn text-white px-8 py-4 rounded-full text-base font-semibold font-inter flex items-center gap-2"
                >
                  <Sparkles size={18} /> Enroll Now
                </Link>
                <Link
                  to="/courses"
                  className="px-8 py-4 rounded-full text-base font-semibold font-inter flex items-center gap-2 transition-all duration-200 hover:bg-rose-50"
                  style={{ border: '2px solid #fda4af', color: '#e11d48' }}
                >
                  Explore Courses <ChevronRight size={16} />
                </Link>
              </motion.div>

              {/* Feature pills */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-3"
              >
                {['✨ Offline & Online', '📜 Certified', '🎯 Beginner Friendly', '👩 Women Empowerment'].map(f => (
                  <span
                    key={f}
                    className="text-sm font-inter px-3 py-1 rounded-full"
                    style={{ background: 'rgba(225,29,72,0.08)', color: '#e11d48', border: '1px solid rgba(225,29,72,0.2)' }}
                  >
                    {f}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="relative flex justify-center"
            >
              <div className="relative">
                {/* Glow ring */}
                <div
                  className="absolute inset-0 rounded-3xl blur-2xl opacity-40 scale-105"
                  style={{ background: 'linear-gradient(135deg, #fda4af, #c084fc)' }}
                />
                <img
                  src={heroImg}
                  alt="Aari Embroidery at Glorious Art Creations"
                  className="relative rounded-3xl object-cover w-full max-w-lg shadow-2xl float-animation"
                  style={{ height: '480px' }}
                />
                {/* Badge overlays — kept inside bounds to avoid horizontal scroll */}
                <motion.div
                  initial={{ opacity: 0, y: 20, opacity: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute left-3 top-16 card-glass rounded-2xl p-3 shadow-lg"
                >
                  <p className="text-xs text-gray-500 font-inter">Students Trained</p>
                  <p className="text-2xl font-bold gradient-text font-playfair">500+</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="absolute right-3 bottom-20 card-glass rounded-2xl p-3 shadow-lg"
                >
                  <div className="flex gap-1 mb-1">
                    {[1,2,3,4,5].map(s => <Star key={s} size={12} fill="#f59e0b" className="text-amber-400" />)}
                  </div>
                  <p className="text-xs text-gray-600 font-inter font-semibold">Top Rated Academy</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 80" className="w-full" preserveAspectRatio="none" style={{ height: '60px' }}>
            <path d="M0,40 C300,80 900,0 1200,40 L1200,80 L0,80 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── Stats Bar ─────────────────────────────────────── */}
      <section className="bg-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <AnimatedSection key={i}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="flex flex-col items-center text-center p-4 rounded-2xl transition-all"
                  style={{ background: 'linear-gradient(135deg, #fff1f2, #f3e8ff)' }}
                >
                  <div className="gradient-text mb-1">{s.icon}</div>
                  <p className="text-2xl font-bold gradient-text font-playfair">{s.value}</p>
                  <p className="text-sm text-gray-500 font-inter">{s.label}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Summer Offer Banner ────────────────────────────── */}
      <section className="py-6 px-4">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div
              className="relative overflow-hidden rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4"
              style={{ background: 'linear-gradient(135deg, #e11d48, #7e22ce)' }}
            >
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10 bg-white" style={{ transform: 'translate(20%, -20%)' }} />
              <div className="absolute bottom-0 left-20 w-24 h-24 rounded-full opacity-10 bg-white" style={{ transform: 'translate(0, 30%)' }} />

              <div className="relative z-10 text-center md:text-left">
                <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                  <span className="text-3xl">🌞</span>
                  <span className="text-amber-300 font-bold font-inter tracking-widest text-xs uppercase">Summer Special Offer</span>
                </div>
                <h2 className="text-white font-playfair text-3xl md:text-4xl font-bold mb-1">
                  30 Days <span className="text-amber-300">FREE</span> Course
                </h2>
                <p className="text-rose-200 font-inter text-sm">Limited seats. Valid for new enrollments only. Enroll before seats fill up!</p>
              </div>

              <Link
                to="/contact"
                className="relative z-10 bg-white font-inter font-bold px-8 py-3 rounded-full transition-all hover:scale-105 shrink-0"
                style={{ color: '#e11d48' }}
              >
                Claim Free Seat 🎁
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Courses Highlights ────────────────────────────── */}
      <section className="section-padding px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <p className="font-vibes text-4xl text-rose-400 mb-2">What We Teach</p>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold" style={{ color: '#1a1a2e' }}>
              Our <span className="gradient-text">Featured Courses</span>
            </h2>
            <p className="text-gray-500 font-inter mt-3 max-w-xl mx-auto">
              Whether you're a beginner or looking to upgrade your skills — we have the perfect course for you.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6, boxShadow: '0 20px 50px rgba(225,29,72,0.12)' }}
                className="rounded-3xl overflow-hidden shadow-md transition-all duration-300 group bg-white"
                style={{ border: '1px solid rgba(225,29,72,0.08)' }}
              >
                {/* Image */}
                <div
                  className={`h-44 bg-gradient-to-br ${c.color} flex items-center justify-center overflow-hidden relative`}
                >
                  {c.img ? (
                    <img src={c.img} alt={c.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  ) : (
                    <span className="text-6xl group-hover:scale-110 transition-transform duration-300">{c.emoji}</span>
                  )}
                  {/* Overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.3), transparent)' }}
                  />
                </div>

                <div className="p-5">
                  <p className="text-xs font-semibold font-inter uppercase tracking-wider mb-1" style={{ color: c.accent }}>{c.subtitle}</p>
                  <h3 className="font-playfair text-lg font-bold mb-2" style={{ color: '#1a1a2e' }}>{c.title}</h3>
                  <p className="text-gray-500 text-sm font-inter leading-relaxed mb-4">{c.desc}</p>
                  <Link
                    to="/courses"
                    className="text-sm font-semibold font-inter flex items-center gap-1 hover:gap-2 transition-all"
                    style={{ color: c.accent }}
                  >
                    Learn More <ChevronRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/courses"
              className="gradient-btn text-white px-8 py-3 rounded-full font-semibold font-inter inline-flex items-center gap-2"
            >
              View All Courses <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── About Snippet ─────────────────────────────────── */}
      <section className="section-padding px-4" style={{ background: 'linear-gradient(135deg, #fff1f2, #f3e8ff)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="relative">
                <div
                  className="absolute -top-4 -left-4 w-full h-full rounded-3xl"
                  style={{ background: 'linear-gradient(135deg, #fda4af, #c084fc)', opacity: 0.15 }}
                />
                <img
                  src={aboutImg}
                  alt="Women learning at Glorious Art Creations"
                  className="relative rounded-3xl object-cover w-full shadow-xl"
                  style={{ height: '420px' }}
                />
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <p className="font-vibes text-4xl text-rose-400 mb-2">Our Story</p>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1a1a2e' }}>
                Built for <span className="gradient-text">Women's Growth</span>
              </h2>
              <p className="text-gray-600 font-inter leading-relaxed mb-6">
                Glorious Art Creations is Chidambaram's leading beauty and fashion academy, dedicated to empowering women with 
                skills that lead to economic independence. We offer comprehensive training in a warm, supportive environment.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  { icon: <School size={20} />, text: 'Offline classes at our Chidambaram campus' },
                  { icon: <Wifi size={20} />, text: 'Online training available from anywhere' },
                  { icon: <Award size={20} />, text: 'Government-recognized certification' },
                  { icon: <Users size={20} />, text: '500+ women empowered and counting' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, #ffe4e6, #f3e8ff)' }}>
                      <span className="gradient-text">{item.icon}</span>
                    </div>
                    <p className="text-gray-700 font-inter text-sm">{item.text}</p>
                  </div>
                ))}
              </div>
              <Link
                to="/about"
                className="gradient-btn text-white px-8 py-3 rounded-full font-semibold font-inter inline-flex items-center gap-2"
              >
                Learn About Us <ChevronRight size={16} />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────── */}
      <section className="section-padding px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <p className="font-vibes text-4xl text-rose-400 mb-2">Testimonials</p>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold" style={{ color: '#1a1a2e' }}>
              What Our <span className="gradient-text">Students Say</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="rounded-3xl p-6 relative"
                style={{
                  background: 'linear-gradient(135deg, #fff, #fff1f2)',
                  border: '1px solid rgba(253,164,175,0.3)',
                  boxShadow: '0 4px 20px rgba(225,29,72,0.05)',
                }}
              >
                <div className="text-4xl text-rose-200 font-playfair mb-3 leading-none">"</div>
                <p className="text-gray-600 font-inter text-sm leading-relaxed mb-4">"{t.text}"</p>
                <div className="flex gap-1 mb-3">
                  {Array(t.stars).fill(0).map((_, s) => (
                    <Star key={s} size={14} fill="#f59e0b" className="text-amber-400" />
                  ))}
                </div>
                <div className="border-t border-rose-100 pt-3">
                  <p className="font-semibold font-playfair text-rose-600">{t.name}</p>
                  <p className="text-xs text-gray-400 font-inter">{t.course}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Instagram / Social Preview ────────────────────── */}
      <section
        className="section-padding px-4"
        style={{ background: 'linear-gradient(135deg, #1a1a2e, #2d1b3d)' }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <p className="font-vibes text-4xl text-rose-400 mb-2">Follow Our Work</p>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">
              See Us on <span className="shimmer">Instagram</span>
            </h2>
            <p className="text-gray-400 font-inter mb-8">
              Follow @gloriousartcreations for daily inspiration, student projects, and behind-the-scenes
            </p>
          </AnimatedSection>

          {/* Fake instagram grid using course images */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {[aariImg, tailoringImg, makeupImg, aboutImg].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative rounded-2xl overflow-hidden group cursor-pointer"
                style={{ aspectRatio: '1/1' }}
              >
                <img src={img} alt="Instagram preview" className="w-full h-full object-cover" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  style={{ background: 'rgba(225,29,72,0.7)' }}
                >
                  <span className="text-white text-2xl">❤️</span>
                </div>
              </motion.div>
            ))}
          </div>

          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white font-semibold font-inter px-8 py-3 rounded-full transition-all hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #e11d48, #a855f7)' }}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="white">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Follow on Instagram
          </a>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────── */}
      <section className="section-padding px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <p className="font-vibes text-5xl text-rose-400 mb-3">Start Your Journey</p>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1a1a2e' }}>
              Ready to <span className="gradient-text">Transform Your Future?</span>
            </h2>
            <p className="text-gray-500 font-inter mb-8">
              Join hundreds of women who have turned their passion into a profession. 
              Enroll today and get 30 days free this summer!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="gradient-btn text-white px-10 py-4 rounded-full text-base font-semibold font-inter inline-flex items-center justify-center gap-2"
              >
                <Sparkles size={18} /> Enroll Now — It's Free to Start!
              </Link>
              <a
                href="tel:+918072769642"
                className="px-10 py-4 rounded-full text-base font-semibold font-inter inline-flex items-center justify-center gap-2 transition-all hover:bg-rose-50"
                style={{ border: '2px solid #fda4af', color: '#e11d48' }}
              >
                📞 Call Us Now
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageWrapper>
  )
}
