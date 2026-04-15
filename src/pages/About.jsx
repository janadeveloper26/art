import { motion } from 'framer-motion'
import { Award, Wifi, School, Users, Heart, Star, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageWrapper from '../components/PageWrapper'
import aboutImg from '../assets/about.png'
import heroImg from '../assets/hero.png'

const values = [
  { emoji: '💪', title: 'Women First', desc: 'We are dedicated exclusively to empowering women with skills that create financial independence.' },
  { emoji: '🏆', title: 'Excellence', desc: 'We maintain the highest standards of teaching so every student masters their craft.' },
  { emoji: '❤️', title: 'Community', desc: 'We build a supportive sisterhood where women lift each other up.' },
  { emoji: '🎓', title: 'Certification', desc: 'All courses end with government-recognized certificates to kickstart your career.' },
]

const team = [
  { name: 'Academy Director', role: 'Founder & Head Trainer', emoji: '👩‍💼', desc: 'With 10+ years experience in fashion and embroidery, our founder built this academy with one mission: to make every woman self-sufficient.' },
  { name: 'Makeup Artist', role: 'Beauty & Mehandi Trainer', emoji: '💄', desc: 'Certified professional makeup artist with expertise in bridal looks, skincare, and traditional mehndi designs.' },
  { name: 'Fashion Designer', role: 'Tailoring Trainer', emoji: '✂️', desc: 'Fashion design graduate with a passion for teaching pattern-making, cutting, and garment construction.' },
]

export default function About() {
  return (
    <PageWrapper>
      {/* ── Hero Banner ───────────────────────────────────── */}
      <section
        className="pt-32 pb-20 px-4 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #fff1f2 0%, #f3e8ff 100%)' }}
      >
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-20 blur-3xl" style={{ background: '#fda4af' }} />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 overflow-hidden">
          <div>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-vibes text-5xl text-rose-400 mb-2"
            >
              Our Story
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-playfair text-4xl md:text-5xl font-bold mb-5"
              style={{ color: '#1a1a2e' }}
            >
              About <span className="gradient-text">Glorious Art Creations</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 font-inter leading-relaxed mb-6"
            >
              Glorious Art Creations is a premier beauty and fashion designing academy based in Chidambaram, Tamil Nadu.
              Founded with a heartfelt mission to empower women, we provide world-class skill training that transforms 
              passion into profession.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-600 font-inter leading-relaxed mb-8"
            >
              We offer both <strong className="text-rose-500">offline classes</strong> at our Chidambaram campus and 
              <strong className="text-purple-500"> online training</strong> for students across Tamil Nadu and beyond. 
              Every course ends with industry-recognized certification to help you launch your career.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/contact" className="gradient-btn text-white px-8 py-3 rounded-full font-semibold font-inter">
                Join Our Academy
              </Link>
              <a href="tel:+918072769642" className="px-8 py-3 rounded-full font-semibold font-inter border-2 text-rose-600 border-rose-300 hover:bg-rose-50 transition-colors">
                📞 Call Us
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-3 rounded-3xl opacity-20" style={{ background: 'linear-gradient(135deg, #fda4af, #c084fc)' }} />
            <img
              src={aboutImg}
              alt="Students at Glorious Art Creations"
              className="relative rounded-3xl object-cover w-full shadow-2xl"
              style={{ height: '400px' }}
            />
            {/* Floating card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              className="absolute -bottom-5 -left-5 card-glass rounded-2xl p-4 shadow-xl"
            >
              <div className="flex gap-1 mb-1">
                {Array(5).fill(0).map((_, i) => (
                  <Star key={i} size={14} fill="#f59e0b" className="text-amber-400" />
                ))}
              </div>
              <p className="font-bold font-playfair text-lg gradient-text">500+ Women</p>
              <p className="text-xs text-gray-500 font-inter">Trained & Empowered</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Mission & Vision ──────────────────────────────── */}
      <section className="section-padding px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              {
                icon: <Heart size={28} />,
                title: 'Our Mission',
                text: 'To provide affordable, high-quality skill training that empowers women to achieve financial freedom and build successful careers in beauty, fashion, and arts.',
                color: '#e11d48',
                bg: '#fff1f2',
              },
              {
                icon: <Star size={28} />,
                title: 'Our Vision',
                text: 'To become Tamil Nadu\'s most trusted academy for women\'s skill development — a place where every woman discovers her potential and builds her dream career.',
                color: '#a855f7',
                bg: '#f3e8ff',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="rounded-3xl p-8"
                style={{ background: item.bg, border: `1px solid ${item.color}20` }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                  style={{ background: item.color, color: '#fff' }}
                >
                  {item.icon}
                </div>
                <h3 className="font-playfair text-2xl font-bold mb-3" style={{ color: '#1a1a2e' }}>{item.title}</h3>
                <p className="text-gray-600 font-inter leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Training Modes */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-lg"
            style={{ background: 'linear-gradient(135deg, #1a1a2e, #2d1b3d)' }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
              {[
                {
                  icon: <School size={32} />,
                  label: 'Offline Training',
                  points: [
                    'In-person classes at our Chidambaram campus',
                    'Hands-on practice with real materials',
                    'Direct trainer interaction & feedback',
                    'Access to our equipment & tools',
                    'Community of fellow learners',
                  ],
                  badge: '📍 Chidambaram Campus',
                },
                {
                  icon: <Wifi size={32} />,
                  label: 'Online Training',
                  points: [
                    'Learn from the comfort of your home',
                    'Recorded & live sessions available',
                    'WhatsApp group for support',
                    'Downloadable resources & guides',
                    'Same certification as offline',
                  ],
                  badge: '🌐 Anywhere in India',
                },
              ].map((mode, i) => (
                <div key={i} className="p-8 md:p-10">
                  <div className="text-rose-400 mb-4">{mode.icon}</div>
                  <span className="text-xs font-bold font-inter text-purple-300 tracking-widest uppercase">{mode.badge}</span>
                  <h3 className="font-playfair text-2xl font-bold text-white mb-4 mt-1">{mode.label}</h3>
                  <ul className="space-y-3">
                    {mode.points.map((p, j) => (
                      <li key={j} className="flex items-start gap-3 text-gray-300 text-sm font-inter">
                        <CheckCircle size={16} className="text-rose-400 mt-0.5 shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Our Values ────────────────────────────────────── */}
      <section className="section-padding px-4" style={{ background: 'linear-gradient(135deg, #fff1f2, #f3e8ff)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-vibes text-4xl text-rose-400 mb-2">What Drives Us</p>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold" style={{ color: '#1a1a2e' }}>
              Our Core <span className="gradient-text">Values</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="card-glass rounded-3xl p-6 text-center"
              >
                <span className="text-5xl block mb-4">{v.emoji}</span>
                <h3 className="font-playfair text-lg font-bold mb-2" style={{ color: '#1a1a2e' }}>{v.title}</h3>
                <p className="text-gray-500 font-inter text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certification ─────────────────────────────────── */}
      <section className="section-padding px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="font-vibes text-4xl text-rose-400 mb-2">Recognition</p>
              <h2 className="font-playfair text-3xl font-bold mb-4" style={{ color: '#1a1a2e' }}>
                Industry–Recognized <span className="gradient-text">Certification</span>
              </h2>
              <p className="text-gray-600 font-inter leading-relaxed mb-6">
                Every student who successfully completes a course at Glorious Art Creations receives an official certificate. 
                Our certifications are recognized by industry professionals and can help you start your own business or find employment.
              </p>
              <ul className="space-y-3">
                {[
                  'Certificate of Completion for each course',
                  'Signed by Academy Director',
                  'Include course details and duration',
                  'Verifiable credentials for employers',
                  'Lifetime validity',
                ].map((p, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600 font-inter text-sm">
                    <Award size={16} className="text-rose-500 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div
                className="w-72 h-72 rounded-full flex items-center justify-center relative"
                style={{ background: 'linear-gradient(135deg, #fff1f2, #f3e8ff)' }}
              >
                <div
                  className="w-56 h-56 rounded-full flex flex-col items-center justify-center text-center"
                  style={{ background: 'linear-gradient(135deg, #e11d48, #a855f7)', boxShadow: '0 20px 60px rgba(225,29,72,0.4)' }}
                >
                  <Award size={40} className="text-white mb-2" />
                  <p className="font-playfair text-white text-xl font-bold">Certified</p>
                  <p className="font-inter text-rose-200 text-xs mt-1">All Courses</p>
                </div>
                {/* Orbiting emoji */}
                {['🌸', '⭐', '🎀', '✨'].map((e, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-2xl"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 8, ease: 'linear', delay: i * 2 }}
                    style={{
                      transformOrigin: '144px center',
                      top: '50%',
                      left: '50%',
                      marginTop: '-16px',
                      marginLeft: `-${144 + 16}px`,
                      rotate: `${i * 90}deg`,
                    }}
                  >
                    {e}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
