import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'
import aariImg from '../assets/aari.png'
import tailoringImg from '../assets/tailoring.png'
import makeupImg from '../assets/makeup.png'
import aboutImg from '../assets/about.png'
import heroImg from '../assets/hero.png'

// Gallery items — using available local images + themed placeholders
const galleryItems = [
  { id: 1, img: aariImg, title: 'Aari Embroidery', category: 'embroidery', desc: 'Intricate gold zari and silk thread work' },
  { id: 2, img: tailoringImg, title: 'Fashion Design', category: 'tailoring', desc: 'Churidar stitching masterclass' },
  { id: 3, img: makeupImg, title: 'Bridal Makeup', category: 'makeup', desc: 'Full bridal look by our student' },
  { id: 4, img: aboutImg, title: 'Workshop Session', category: 'events', desc: 'Students during hands-on class' },
  { id: 5, img: heroImg, title: 'Embroidery Art', category: 'embroidery', desc: 'Advanced aari embroidery blouse' },
  { id: 6, img: aariImg, title: 'Zari Work', category: 'embroidery', desc: 'Gold zari border detail work' },
  { id: 7, img: tailoringImg, title: 'Fabric Design', category: 'tailoring', desc: 'Designer fabric cutting session' },
  { id: 8, img: makeupImg, title: 'Mehandi Art', category: 'mehandi', desc: 'Bridal mehandi design by student' },
  { id: 9, img: aboutImg, title: 'Craft Creation', category: 'crafts', desc: 'Handmade tassel and brooch work' },
  { id: 10, img: heroImg, title: 'Student Work', category: 'embroidery', desc: 'Completed student project showcase' },
  { id: 11, img: aariImg, title: 'Thread Art', category: 'embroidery', desc: 'Colourful silk thread patterns' },
  { id: 12, img: makeupImg, title: 'Glam Look', category: 'makeup', desc: 'Party makeup by our student' },
]

const categories = ['all', 'embroidery', 'tailoring', 'makeup', 'mehandi', 'crafts', 'events']

export default function Gallery() {
  const [active, setActive] = useState('all')
  const [selected, setSelected] = useState(null)

  const filtered = active === 'all' ? galleryItems : galleryItems.filter(i => i.category === active)

  return (
    <PageWrapper>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section
        className="pt-32 pb-16 px-4 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #fff1f2 0%, #f3e8ff 100%)' }}
      >
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-20 blur-3xl" style={{ background: '#fda4af' }} />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-vibes text-5xl text-rose-400 mb-2"
          >
            Student Works
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-4xl md:text-5xl font-bold mb-4"
            style={{ color: '#1a1a2e' }}
          >
            Our <span className="gradient-text">Gallery</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 font-inter max-w-lg mx-auto"
          >
            Explore the beautiful creations by our talented students — from embroidery to bridal makeup.
          </motion.p>
        </div>
      </section>

      {/* ── Filter Tabs ───────────────────────────────────── */}
      <section className="bg-white sticky top-16 md:top-20 z-30 border-b border-rose-100 py-4 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className="shrink-0 px-5 py-2 rounded-full text-sm font-medium font-inter capitalize transition-all duration-200"
                style={
                  active === cat
                    ? {
                        background: 'linear-gradient(135deg, #e11d48, #a855f7)',
                        color: 'white',
                        boxShadow: '0 4px 15px rgba(225,29,72,0.3)',
                      }
                    : {
                        background: '#f9fafb',
                        color: '#6b7280',
                        border: '1px solid #e5e7eb',
                      }
                }
              >
                {cat === 'all' ? '✨ All Works' : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Grid ──────────────────────────────────────────── */}
      <section className="section-padding px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            <AnimatePresence>
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  whileHover={{ y: -4, zIndex: 10 }}
                  className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-md"
                  style={{ aspectRatio: i % 5 === 0 ? '1/1.4' : '1/1' }}
                  onClick={() => setSelected(item)}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4"
                    style={{ background: 'linear-gradient(to top, rgba(225,29,72,0.85), rgba(168,85,247,0.4) 60%, transparent)' }}
                  >
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                    >
                      <p className="text-white font-playfair font-semibold text-sm">{item.title}</p>
                      <p className="text-rose-200 font-inter text-xs mt-0.5">{item.desc}</p>
                    </motion.div>
                  </div>

                  {/* Category badge */}
                  <div
                    className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-xs font-inter font-semibold capitalize text-white opacity-90"
                    style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)' }}
                  >
                    {item.category}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-400 font-inter">
              <p className="text-4xl mb-3">🎨</p>
              <p>No items found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── Lightbox ──────────────────────────────────────── */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-2xl w-full rounded-3xl overflow-hidden shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <img src={selected.img} alt={selected.title} className="w-full object-cover max-h-[70vh]" />
              <div className="p-5 bg-white">
                <h3 className="font-playfair text-xl font-bold gradient-text">{selected.title}</h3>
                <p className="text-gray-500 font-inter text-sm mt-1">{selected.desc}</p>
                <p className="text-xs text-rose-400 uppercase font-inter font-semibold mt-1 tracking-widest capitalize">{selected.category}</p>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-rose-500 transition-colors text-lg"
                aria-label="Close"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="py-16 px-4" style={{ background: 'linear-gradient(135deg, #fff1f2, #f3e8ff)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-playfair text-3xl font-bold mb-3" style={{ color: '#1a1a2e' }}>
              Want to Create Something <span className="gradient-text">Beautiful?</span>
            </h2>
            <p className="text-gray-500 font-inter mb-6">Enroll today and add your work to our growing gallery of talented students!</p>
            <a
              href="/contact"
              className="gradient-btn text-white px-10 py-4 rounded-full font-semibold font-inter inline-flex items-center gap-2"
            >
              🌸 Enroll Now & Start Creating
            </a>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}
