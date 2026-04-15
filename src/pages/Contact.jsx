import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react'
import PageWrapper from '../components/PageWrapper'

const courses = [
  'Aari Embroidery (Basic)',
  'Aari Embroidery (Advanced)',
  'Tailoring & Fashion Designing',
  'Beauty & Makeup',
  'Mehandi / Henna',
  'Craft Courses',
  '30 Days Free Course (Summer)',
  'Not sure yet — Help me choose',
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', course: '' })
  const [status, setStatus] = useState(null) // null | 'success' | 'error'
  const [sending, setSending] = useState(false)

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!form.name || !form.phone) {
      setStatus('error')
      return
    }
    setSending(true)
    // Simulate submit (no backend)
    setTimeout(() => {
      setSending(false)
      setStatus('success')
      setForm({ name: '', phone: '', course: '' })
    }, 1500)
  }

  const whatsappMessage = encodeURIComponent(
    `Hello Glorious Art Creations! 🌸\n\nI'm interested in enrolling.\nName: ${form.name || 'Interested Student'}\nPhone: ${form.phone || '-'}\nCourse: ${form.course || 'To be decided'}`
  )

  return (
    <PageWrapper>
      {/* ── Hero Banner ───────────────────────────────────── */}
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
            Get In Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-4xl md:text-5xl font-bold mb-4"
            style={{ color: '#1a1a2e' }}
          >
            Contact <span className="gradient-text">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 font-inter max-w-lg mx-auto"
          >
            Ready to start your journey? Reach out to us — we respond within one business day.
          </motion.p>

          {/* Summer Offer Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full font-inter text-sm font-bold"
            style={{ background: 'linear-gradient(135deg, #e11d48, #a855f7)', color: 'white', boxShadow: '0 8px 30px rgba(225,29,72,0.3)' }}
          >
            🌞 Summer Offer: 30 Days FREE for New Students!
          </motion.div>
        </div>
      </section>

      {/* ── Contact Grid ──────────────────────────────────── */}
      <section className="section-padding px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Address */}
              <div
                className="rounded-3xl p-6 flex gap-4"
                style={{ background: 'linear-gradient(135deg, #fff1f2, #ffe4e6)', border: '1px solid rgba(225,29,72,0.1)' }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ background: 'linear-gradient(135deg, #e11d48, #be123c)' }}
                >
                  <MapPin size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="font-playfair font-bold text-lg mb-1" style={{ color: '#1a1a2e' }}>Our Location</h3>
                  <p className="text-gray-600 font-inter text-sm leading-relaxed">
                    1st Floor, No 8A/2, Umaiyal Lane,<br />
                    Chidambaram, Tamil Nadu
                  </p>
                  <a
                    href="https://maps.google.com/?q=Chidambaram+Tamil+Nadu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-rose-500 text-sm font-inter font-semibold hover:text-rose-600 mt-1 inline-block"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div
                className="rounded-3xl p-6 flex gap-4"
                style={{ background: 'linear-gradient(135deg, #f3e8ff, #ede9fe)', border: '1px solid rgba(168,85,247,0.1)' }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ background: 'linear-gradient(135deg, #a855f7, #7e22ce)' }}
                >
                  <Phone size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="font-playfair font-bold text-lg mb-1" style={{ color: '#1a1a2e' }}>Call Us</h3>
                  <a href="tel:+918072769642" className="text-gray-600 font-inter text-sm block hover:text-purple-600 transition-colors">
                    +91 80727 69642
                  </a>
                  <a href="tel:+917339533550" className="text-gray-600 font-inter text-sm block hover:text-purple-600 transition-colors">
                    +91 73395 33550
                  </a>
                  <p className="text-gray-400 font-inter text-xs mt-1">Mon–Sat, 9am–7pm IST</p>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <motion.a
                href={`https://wa.me/918072769642?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-4 rounded-3xl p-6 transition-all"
                style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)', boxShadow: '0 8px 30px rgba(37,211,102,0.3)' }}
              >
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" width="26" height="26" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.520-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white font-playfair font-bold text-lg">Chat on WhatsApp</p>
                  <p className="text-green-100 font-inter text-sm">Click to start a conversation instantly</p>
                </div>
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="ml-auto shrink-0 w-5 h-5">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.a>

              {/* Timing */}
              <div className="rounded-3xl p-5" style={{ background: '#f9fafb', border: '1px solid #f3f4f6' }}>
                <h4 className="font-playfair font-semibold mb-3 text-gray-700">Academy Hours</h4>
                <div className="space-y-2">
                  {[
                    { day: 'Monday – Saturday', time: '9:00 AM – 7:00 PM' },
                    { day: 'Sunday', time: 'By Appointment Only' },
                  ].map((h, i) => (
                    <div key={i} className="flex justify-between text-sm font-inter">
                      <span className="text-gray-600">{h.day}</span>
                      <span className="font-semibold text-rose-500">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl p-8 shadow-lg"
                style={{ background: 'linear-gradient(135deg, #fff1f2 0%, #fdf4ff 100%)', border: '1px solid rgba(225,29,72,0.1)' }}
              >
                <h2 className="font-playfair text-2xl font-bold mb-1" style={{ color: '#1a1a2e' }}>
                  Enroll / Enquire
                </h2>
                <p className="text-gray-500 font-inter text-sm mb-6">Fill in your details and we'll get back to you within 24 hours.</p>

                {/* Name */}
                <div className="mb-5">
                  <label htmlFor="contact-name" className="block text-sm font-semibold font-inter text-gray-700 mb-2">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-2xl font-inter text-sm text-gray-800 outline-none transition-all"
                    style={{
                      background: 'white',
                      border: '2px solid rgba(225,29,72,0.15)',
                      boxShadow: '0 2px 8px rgba(225,29,72,0.05)',
                    }}
                    onFocus={e => (e.target.style.borderColor = '#e11d48')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(225,29,72,0.15)')}
                  />
                </div>

                {/* Phone */}
                <div className="mb-5">
                  <label htmlFor="contact-phone" className="block text-sm font-semibold font-inter text-gray-700 mb-2">
                    Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-4 py-3 rounded-2xl font-inter text-sm text-gray-800 outline-none transition-all"
                    style={{
                      background: 'white',
                      border: '2px solid rgba(225,29,72,0.15)',
                      boxShadow: '0 2px 8px rgba(225,29,72,0.05)',
                    }}
                    onFocus={e => (e.target.style.borderColor = '#e11d48')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(225,29,72,0.15)')}
                  />
                </div>

                {/* Course */}
                <div className="mb-6">
                  <label htmlFor="contact-course" className="block text-sm font-semibold font-inter text-gray-700 mb-2">
                    Course Interested In
                  </label>
                  <select
                    id="contact-course"
                    name="course"
                    value={form.course}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-2xl font-inter text-sm text-gray-800 outline-none transition-all appearance-none"
                    style={{
                      background: 'white',
                      border: '2px solid rgba(225,29,72,0.15)',
                      boxShadow: '0 2px 8px rgba(225,29,72,0.05)',
                    }}
                    onFocus={e => (e.target.style.borderColor = '#e11d48')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(225,29,72,0.15)')}
                  >
                    <option value="">Select a course...</option>
                    {courses.map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                {/* Status messages */}
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 mb-4 p-3 rounded-xl text-sm font-inter text-green-700"
                    style={{ background: '#dcfce7', border: '1px solid #86efac' }}
                  >
                    <CheckCircle size={16} />
                    Thank you! We'll contact you soon. 🌸
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 mb-4 p-3 rounded-xl text-sm font-inter text-rose-700"
                    style={{ background: '#fff1f2', border: '1px solid #fda4af' }}
                  >
                    <AlertCircle size={16} />
                    Please fill in your name and phone number.
                  </motion.div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  id="contact-submit-btn"
                  disabled={sending}
                  className="w-full gradient-btn text-white py-4 rounded-2xl font-semibold font-inter flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {sending ? (
                    <span className="flex items-center gap-2">
                      <div
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        style={{ animation: 'loader-spin 0.7s linear infinite' }}
                      />
                      Sending...
                    </span>
                  ) : (
                    <>
                      <Send size={16} /> Send Enquiry
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-gray-400 font-inter mt-3">
                  Or WhatsApp us directly — we reply fast! 💬
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Google Map ────────────────────────────────────── */}
      <section className="px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-xl"
            style={{ border: '1px solid rgba(225,29,72,0.1)' }}
          >
            <div
              className="px-6 py-4 flex items-center gap-3"
              style={{ background: 'linear-gradient(135deg, #fff1f2, #f3e8ff)' }}
            >
              <MapPin size={20} className="text-rose-500" />
              <div>
                <p className="font-playfair font-semibold text-gray-800">Find Us on the Map</p>
                <p className="text-xs text-gray-500 font-inter">1st Floor, No 8A/2, Umaiyal Lane, Chidambaram, Tamil Nadu</p>
              </div>
            </div>
            <iframe
              title="Glorious Art Creations Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125476.56!2d79.6917!3d11.3993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a54f178be2f9da3%3A0x2f53aabe5e3e2e80!2sChidambaram%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1681876000000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}
