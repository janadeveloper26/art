import { Link } from 'react-router-dom'
import { Phone, MapPin, Heart } from 'lucide-react'
import logo from '../assets/logo.png'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #2d1b3d 100%)' }}>
      {/* Decorative top border */}
      <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, #e11d48, #a855f7, #fbbf24, #e11d48)' }} />

      {/* Floating decorative circles */}
      <div className="absolute top-10 right-10 w-40 h-40 rounded-full opacity-5" style={{ background: '#a855f7' }} />
      <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full opacity-5" style={{ background: '#e11d48' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Logo" className="h-10 w-auto object-contain brightness-110" />
              <div>
                <p className="font-vibes text-2xl" style={{ color: '#fda4af' }}>Glorious Art Creations</p>
                <p className="text-xs text-purple-300 tracking-widest uppercase font-inter">Beauty & Fashion Academy</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm font-inter leading-relaxed mb-4">
              Empowering women of Chidambaram with world-class beauty, fashion, and craft education. 
              Offline & online training with certification.
            </p>
            {/* Social links */}
            <div className="flex gap-3 mt-4">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ background: 'linear-gradient(135deg, #e11d48, #a855f7)' }}
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/918072769642"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ background: '#25D366' }}
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.520-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-white text-lg mb-4 font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { to: '/', label: 'Home' },
                { to: '/courses', label: 'Courses' },
                { to: '/about', label: 'About Us' },
                { to: '/gallery', label: 'Gallery' },
                { to: '/contact', label: 'Contact' },
              ].map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-rose-400 text-sm font-inter transition-colors duration-200 flex items-center gap-1"
                  >
                    <span className="text-rose-500 text-xs">✦</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="font-playfair text-white text-lg mt-6 mb-4 font-semibold">Our Courses</h4>
            <ul className="space-y-2">
              {['Aari Embroidery', 'Tailoring & Fashion', 'Beauty & Makeup', 'Mehandi', 'Craft Courses'].map(c => (
                <li key={c}>
                  <Link
                    to="/courses"
                    className="text-gray-400 hover:text-purple-400 text-sm font-inter transition-colors duration-200 flex items-center gap-1"
                  >
                    <span className="text-purple-500 text-xs">✦</span> {c}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-playfair text-white text-lg mb-4 font-semibold">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin size={18} className="text-rose-400 shrink-0 mt-1" />
                <p className="text-gray-400 text-sm font-inter leading-relaxed">
                  1st Floor, No 8A/2, Umaiyal Lane,<br />
                  Chidambaram, Tamil Nadu
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={18} className="text-rose-400 shrink-0" />
                <div>
                  <a href="tel:+918072769642" className="text-gray-400 hover:text-rose-300 text-sm font-inter block transition-colors">
                    +91 80727 69642
                  </a>
                  <a href="tel:+917339533550" className="text-gray-400 hover:text-rose-300 text-sm font-inter block transition-colors">
                    +91 73395 33550
                  </a>
                </div>
              </div>
              {/* Summer offer badge */}
              <div
                className="rounded-xl p-3 mt-4"
                style={{ background: 'linear-gradient(135deg, rgba(225,29,72,0.2), rgba(168,85,247,0.2))', border: '1px solid rgba(253,164,175,0.2)' }}
              >
                <p className="text-amber-400 text-xs font-semibold tracking-wide uppercase mb-1">🌞 Summer Special</p>
                <p className="text-white text-sm font-inter font-medium">30 Days FREE Course</p>
                <p className="text-gray-400 text-xs">Limited seats available — Enroll today!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs font-inter text-center">
            © {year} Glorious Art Creations. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs font-inter flex items-center gap-1">
            Made with <Heart size={12} className="text-rose-500" /> in Chidambaram, Tamil Nadu
          </p>
        </div>
      </div>
    </footer>
  )
}
