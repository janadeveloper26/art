import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'
import { Plus } from 'lucide-react'
import SEO from '../components/SEO'

// Assets
import heroImg from '../assets/hero.png'
import aariImg from '../assets/aari.png'
import tailoringImg from '../assets/tailoring.png'
import makeupImg from '../assets/makeup.png'

// New Gallery Images
import g1 from '../assets/WhatsApp Image 2026-04-21 at 10.37.14 AM.jpeg'
import g2 from '../assets/WhatsApp Image 2026-04-21 at 10.36.43 AM (1).jpeg'
import g3 from '../assets/WhatsApp Image 2026-04-21 at 10.36.43 AM.jpeg'
import g4 from '../assets/WhatsApp Image 2026-04-21 at 10.36.44 AM.jpeg'
import g5 from '../assets/WhatsApp Image 2026-04-21 at 10.36.45 AM.jpeg'
import g6 from '../assets/WhatsApp Image 2026-04-21 at 10.36.46 AM.jpeg'
import g7 from '../assets/WhatsApp Image 2026-04-21 at 10.36.47 AM.jpeg'
import g8 from '../assets/WhatsApp Image 2026-04-21 at 10.36.49 AM.jpeg'
import g9 from '../assets/WhatsApp Image 2026-04-21 at 10.37.14 AM (1).jpeg'
import g10 from '../assets/WhatsApp Image 2026-04-21 at 10.37.15 AM.jpeg'
import g11 from '../assets/WhatsApp Image 2026-04-21 at 10.37.20 AM (1).jpeg'
import g12 from '../assets/WhatsApp Image 2026-04-21 at 10.37.20 AM.jpeg'
import g13 from '../assets/WhatsApp Image 2026-04-21 at 10.37.20 AM (2).jpeg'
import g14 from '../assets/WhatsApp Image 2026-04-22 at 9.19.06 PM.jpeg'
import g15 from '../assets/WhatsApp Image 2026-04-22 at 9.19.07 PM.jpeg'
import g16 from '../assets/WhatsApp Image 2026-04-22 at 9.19.08 PM (1).jpeg'
import g17 from '../assets/WhatsApp Image 2026-04-22 at 9.19.09 PM (1).jpeg'
import g18 from '../assets/WhatsApp Image 2026-04-22 at 9.19.09 PM.jpeg'
import g19 from '../assets/WhatsApp Image 2026-04-22 at 9.19.11 PM (1).jpeg'
import g20 from '../assets/WhatsApp Image 2026-04-22 at 9.19.11 PM.jpeg'
import g21 from '../assets/WhatsApp Image 2026-04-22 at 9.19.14 PM (1).jpeg'
import g22 from '../assets/WhatsApp Image 2026-04-22 at 9.19.14 PM.jpeg'
import g23 from '../assets/WhatsApp Image 2026-04-21 at 10.37.16 AM.jpeg'

const InstagramIcon = ({ size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
)

const items = [
  { img: aariImg, title: 'Bridal Embroidery', cat: 'Student Work', alt: 'Intricate Aari embroidery bridal work by student' },
  { img: g1, title: 'Boutique Design', cat: 'Student Work', alt: 'Professional boutique design' },
  { img: g2, title: 'Silk Masterpiece', cat: 'Masterclass', alt: 'Intricate silk embroidery' },
  { img: g3, title: 'Bridal Detail', cat: 'Embroidery', alt: 'Detailed bridal work' },
  { img: g4, title: 'Designer Pattern', cat: 'Fashion', alt: 'Modern fashion pattern' },
  { img: g5, title: 'Artistic Stitch', cat: 'Workshop', alt: 'Artistic embroidery stitch' },
  { img: g6, title: 'Golden Threads', cat: 'Luxury', alt: 'Golden thread work' },
  { img: g7, title: 'Creative Craft', cat: 'Student Work', alt: 'Creative student craft' },
  { img: g8, title: 'Modern Aari', cat: 'Embroidery', alt: 'Modern Aari work' },
  { img: g9, title: 'Fashion Sketch', cat: 'Design', alt: 'Fashion design sketch' },
  { img: g10, title: 'Style Portfolio', cat: 'Professional', alt: 'Professional style portfolio' },
  { img: g11, title: 'Exquisite Work', cat: 'Advanced', alt: 'Exquisite craftsmanship' },
  { img: g12, title: 'Custom Boutique', cat: 'Boutique', alt: 'Custom boutique piece' },
  { img: g13, title: 'Artistic Vision', cat: 'Workshop', alt: 'Artistic vision project' },
  { img: g14, title: 'Floral Patterns', cat: 'Embroidery', alt: 'Floral embroidery patterns' },
  { img: g15, title: 'Traditional Art', cat: 'Heritage', alt: 'Traditional art form' },
  { img: g16, title: 'Modern Silhouette', cat: 'Fashion', alt: 'Modern silhouette design' },
  { img: g17, title: 'Precision Tailoring', cat: 'Tailoring', alt: 'Precision tailoring work' },
  { img: g18, title: 'Chic Collection', cat: 'Student Work', alt: 'Chic student collection' },
  { img: g19, title: 'Intricate Design', cat: 'Aesthetics', alt: 'Intricate aesthetic design' },
  { img: g20, title: 'Golden Embroidery', cat: 'Luxury', alt: 'Golden embroidery detail' },
  { img: g21, title: 'Designer Showcase', cat: 'Professional', alt: 'Designer showcase piece' },
  { img: g22, title: 'Boutique Excellence', cat: 'Boutique', alt: 'Boutique excellence' },
  { img: g23, title: 'Master Trainer Work', cat: 'Masterclass', alt: 'Work by master trainer' },
  { img: tailoringImg, title: 'Designer Blouse', cat: 'Masterclass', alt: 'Professional designer blouse tailoring in Chidambaram' },
  { img: makeupImg, title: 'Bridal Glam', cat: 'Professional', alt: 'Bridal makeup artistry by expert student' },
  { img: heroImg, title: 'Fashion Design', cat: 'Aesthetics', alt: 'Advanced fashion designing student project' },
]

export default function Gallery() {
  return (
    <PageWrapper>
      <SEO 
        title="Student Work Portfolio | Art & Fashion Gallery Chidambaram" 
        description="Explore the stunning portfolio of our students. From professional Aari embroidery to designer tailoring, see why we are Chidambaram's #1 academy."
        url="/gallery"
      />

      <section className="pt-48 pb-16 lg:pt-64 lg:pb-32 px-5 sm:px-8 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-rose-100/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4" />
        <div className="container-custom relative z-10 text-center lg:text-left">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-rose-600 font-extrabold uppercase tracking-[0.4em] text-[10px] sm:text-xs mb-4 block"
          >
            Visual Showcase
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-slate-900 leading-tight mb-8"
          >
            The Art <span className="gradient-text italic">Portfolio</span>
          </motion.h1>
          <p className="text-slate-500 font-medium text-lg leading-relaxed max-w-xl">
            A glimpse into the creativity and precision of our students and trainers in Chidambaram. Every piece tells a story of dedication and skill.
          </p>
        </div>
      </section>

      <section className="section-padding px-5 sm:px-8 bg-white">
        <div className="container-custom">
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
              {items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative overflow-hidden rounded-[2.5rem] bg-slate-100 cursor-pointer shadow-sm hover:shadow-2xl transition-all h-[400px]"
                >
                   <img src={item.img} alt={item.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                   <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                   
                   <div className="absolute bottom-10 left-10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="text-rose-400 text-[10px] font-extrabold uppercase tracking-widest">{item.cat}</span>
                      <h3 className="text-white text-2xl font-serif font-bold mt-1">{item.title}</h3>
                   </div>
                   
                   <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-rose-600 shadow-xl">
                         <Plus size={24} />
                      </div>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Social Call */}
      <section className="py-24 px-5 sm:px-8 bg-slate-50">
        <div className="container-custom text-center">
           <div className="glass-card rounded-[3rem] p-10 md:p-20 border-rose-100 text-center shadow-premium bg-white">
              <div className="text-rose-500 mx-auto mb-8 flex justify-center">
                <InstagramIcon size={48} />
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900 mb-6 uppercase tracking-tight">Stay Inspired</h2>
              <p className="text-slate-500 font-medium text-lg leading-relaxed max-w-xl mx-auto mb-10">
                Follow our daily artistic journeys and student progress on Instagram. Get your daily dose of creative energy.
              </p>
              <a 
                href="https://www.instagram.com/gloriousartcreations_aari?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-premium btn-gradient w-full sm:w-auto px-12 text-center"
              >
                Follow @gloriousartcreations_aari <InstagramIcon size={18} />
              </a>
           </div>
        </div>
      </section>
    </PageWrapper>
  )
}
