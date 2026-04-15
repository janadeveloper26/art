import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ background: 'linear-gradient(135deg, #fff1f2 0%, #f3e8ff 50%, #ffe4e6 100%)' }}
    >
      {/* Spinning ring */}
      <div className="relative w-24 h-24 mb-6">
        <div
          className="absolute inset-0 rounded-full border-4 border-transparent"
          style={{
            borderTopColor: '#e11d48',
            borderRightColor: '#a855f7',
            animation: 'loader-spin 1s linear infinite',
          }}
        />
        <div
          className="absolute inset-3 rounded-full border-4 border-transparent"
          style={{
            borderTopColor: '#a855f7',
            borderRightColor: '#e11d48',
            animation: 'loader-spin 0.7s linear infinite reverse',
          }}
        />
        {/* Center flower emoji */}
        <div className="absolute inset-0 flex items-center justify-center text-2xl">🌸</div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-center"
      >
        <p className="font-vibes text-4xl gradient-text mb-2">Glorious Art Creations</p>
        <p className="text-rose-400 text-sm font-inter tracking-widest uppercase">Loading...</p>
      </motion.div>

      {/* Dots */}
      <div className="flex gap-2 mt-6">
        {[0, 1, 2].map(i => (
          <motion.div
            key={i}
            animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }}
            transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }}
            className="w-2 h-2 rounded-full"
            style={{ background: i % 2 === 0 ? '#e11d48' : '#a855f7' }}
          />
        ))}
      </div>
    </motion.div>
  )
}
