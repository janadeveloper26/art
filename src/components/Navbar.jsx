import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/logo.png'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/courses', label: 'Courses' },
  { to: '/about', label: 'About' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => { setOpen(false) }, [location])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? 'rgba(255,255,255,0.92)'
            : 'rgba(255,255,255,0.3)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          boxShadow: scrolled ? '0 4px 30px rgba(225,29,72,0.08)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(253,164,175,0.3)' : '1px solid transparent',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <img src={logo} alt="Glorious Art Creations Logo" className="h-10 md:h-12 w-auto object-contain" />
              <div className="hidden sm:block">
                <p className="font-vibes text-xl leading-tight" style={{ color: '#e11d48' }}>Glorious Art Creations</p>
                <p className="text-[10px] text-purple-500 tracking-widest uppercase font-inter">Beauty & Fashion Academy</p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map(link => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `relative px-4 py-2 text-sm font-medium font-inter rounded-full transition-all duration-200 ${
                      isActive ? 'text-rose-600' : 'text-gray-700 hover:text-rose-500'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <motion.span
                          layoutId="navIndicator"
                          className="absolute inset-0 rounded-full"
                          style={{ background: 'linear-gradient(135deg, #ffe4e6, #f3e8ff)', zIndex: -1 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
              <Link
                to="/contact"
                className="ml-4 gradient-btn text-white px-5 py-2 rounded-full text-sm font-semibold font-inter"
              >
                Enroll Now
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-full text-rose-500 hover:bg-rose-50 transition"
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden"
            style={{
              background: 'rgba(255,255,255,0.96)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(253,164,175,0.4)',
              boxShadow: '0 20px 40px rgba(225,29,72,0.1)',
            }}
          >
            <div className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-xl text-sm font-medium font-inter transition-all ${
                        isActive
                          ? 'bg-rose-50 text-rose-600 font-semibold'
                          : 'text-gray-700 hover:bg-purple-50 hover:text-purple-600'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
              <Link
                to="/contact"
                className="mt-3 gradient-btn text-white px-5 py-3 rounded-xl text-sm font-semibold font-inter text-center"
              >
                Enroll Now 🌸
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
