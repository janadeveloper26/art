import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
    >
      <div className="relative">
        {/* Decorative background blobs for loader */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-rose-100/50 rounded-full blur-3xl" />
        
        <div className="relative flex flex-col items-center">
          <div className="relative w-20 h-20 mb-10">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="absolute inset-0 rounded-full border-[3px] border-slate-100 border-t-rose-600"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="absolute inset-3 rounded-full border-[3px] border-slate-100 border-t-purple-500"
            />
            <div className="absolute inset-0 flex items-center justify-center text-xl">✨</div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <h2 className="font-serif text-3xl font-bold text-slate-900 mb-2">Glorious Art</h2>
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-rose-200" />
              <p className="text-[10px] text-rose-500 font-extrabold uppercase tracking-[.3em]">Perfecting Beauty</p>
              <div className="h-px w-8 bg-rose-200" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
