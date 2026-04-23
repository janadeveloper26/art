import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Clock,
  Users,
  ArrowRight,
  ShieldCheck,
  Phone,
  Plus,
  Sparkles,
} from "lucide-react";
import PageWrapper from "../components/PageWrapper";
import SEO from "../components/SEO";

// Assets
import aariImg from "../assets/aari.png";
import tailoringImg from "../assets/tailoring.png";
import fashionDesignImg from "../assets/fashion_design.png";
import makeupImg from "../assets/makeup.png";
import beauticianImg from "../assets/beautician.png";
import hairstyleImg from "../assets/hairstyle.png";
import mehandiImg from "../assets/mehandi.png";
import nailArtImg from "../assets/nail_art.png";
import tracingImg from "../assets/tracing.png";
import broochesImg from "../assets/Brooches.jpeg";
import sareeImg from "../assets/saree.jpeg";
import sareeDrapingImg from "../assets/saree_draping.png";
import hennaMixologyImg from "../assets/henna_mixology.png";

const coursesData = [
  {
    id: "aari",
    category: "Embroidery",
    img: aariImg,
    title: "Aari Embroidery",
    subtitle: "Proficient enchanting with threads",
    duration: "35 Days - 6 Mos",
    students: "150+",
    rating: 4.9,
    description: "Master the traditional art of Aari embroidery from basic to bridal mastery.",
    badge: "★ Best Seller",
  },
  {
    id: "tailoring",
    category: "Fashion",
    img: tailoringImg,
    title: "Tailoring",
    subtitle: "Legacy elegance in every thread",
    duration: "35 Days - 6 Mos",
    students: "120+",
    rating: 4.8,
    description: "Professional tailoring techniques for modern and traditional wear.",
    badge: "★ Professional",
  },
  {
    id: "fashion-design",
    category: "Fashion",
    img: fashionDesignImg,
    title: "Fashion Designing",
    subtitle: "Sewing with passion",
    duration: "6 - 10 Months",
    students: "100+",
    rating: 4.9,
    description: "Comprehensive fashion design course covering conceptualization to creation.",
    badge: "★ Advanced",
  },
  {
    id: "beautician",
    category: "Beauty",
    img: beauticianImg,
    title: "Professional Beautician",
    subtitle: "Wake up & makeup",
    duration: "3 Months",
    students: "90+",
    rating: 4.9,
    description: "Salon management and advanced skin care treatments.",
    badge: "Career Focus",
  },
  {
    id: "makeup",
    category: "Beauty",
    img: makeupImg,
    title: "Makeup Artistry",
    subtitle: "Unveil your natural glow",
    duration: "2 Months",
    students: "200+",
    rating: 5.0,
    description: "Professional makeup artistry for bridal and fashion industries.",
    badge: "★ Expert Rated",
  },
  {
    id: "hairstyle",
    category: "Beauty",
    img: hairstyleImg,
    title: "Hairstyle Mastery",
    subtitle: "Just Flip it",
    duration: "1 Month",
    students: "85+",
    rating: 4.7,
    description: "Modern and traditional hair styling techniques for all occasions.",
    badge: "New Arrival",
  },
  {
    id: "mehandi",
    category: "Beauty",
    img: mehandiImg,
    title: "Mehandi Artistry",
    subtitle: "Mehandilicious",
    duration: "35 Days - 3 Mos",
    students: "110+",
    rating: 4.8,
    description: "Intricate henna designs from basic patterns to heavy bridal work.",
    badge: "★ Artistic",
  },
  {
    id: "nail-art",
    category: "Beauty",
    img: nailArtImg,
    title: "Nail Art",
    subtitle: "Nail your style",
    duration: "15 Days",
    students: "55+",
    rating: 4.6,
    description: "Creative nail extensions, gel polish, and 3D nail art techniques.",
    badge: "Trend Choice",
  },
  {
    id: "tracing",
    category: "Art",
    img: tracingImg,
    title: "Tracing & Sketching",
    subtitle: "Your dream to sketches",
    duration: "1 Month",
    students: "70+",
    rating: 4.7,
    description: "Foundational sketching and tracing skills for embroidery and design.",
    badge: "★ Creative",
  },
  {
    id: "brooches",
    category: "Crafts",
    img: broochesImg,
    title: "Brooches & Crafts",
    subtitle: "Expression of artistry",
    duration: "35 Days",
    students: "180+",
    rating: 4.7,
    description: "Creating unique 3D brooches and handmade fashion accessories.",
    badge: "★ Mini Course",
  },
  {
    id: "saree-prepleating",
    category: "Saree Art",
    img: sareeImg,
    title: "Saree Pre-pleating",
    subtitle: "Elegance in minutes",
    duration: "15 Days",
    students: "75+",
    rating: 5.0,
    description: "Master the art of perfect saree pleating for quick and easy wear.",
    badge: "Hot Choice",
  },
  {
    id: "saree-draping",
    category: "Saree Art",
    img: sareeDrapingImg,
    title: "Saree Draping",
    subtitle: "Six yards of pure grace",
    duration: "15 Days",
    students: "80+",
    rating: 4.9,
    description: "Professional draping styles for various cultural and formal events.",
    badge: "★ Elegant",
  },
  {
    id: "henna-mixology",
    category: "Beauty",
    img: hennaMixologyImg,
    title: "Henna Mixology & After Care",
    subtitle: "Unlock the secret blend",
    duration: "1 Month",
    students: "65+",
    rating: 4.8,
    description: "Learn to create natural henna paste and expert after-care techniques.",
    badge: "Expert Choice",
  },
];

export default function Courses() {
  const filtered = coursesData;

  const coursesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: coursesData.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Course",
        name: c.title,
        description: c.description,
        provider: {
          "@type": "Organization",
          name: "Glorious Art Creations",
          sameAs: "https://gloriousartcreations.com",
        },
      },
    })),
  };

  return (
    <PageWrapper>
      <SEO
        title="Professional Fashion Courses | Aari, Tailoring & Makeup in Chidambaram"
        description="Browse our master catalog of fashion arts. From Aari embroidery to bridal makeup, get certified by Glorious Art Creations — #1 in Chidambaram."
        url="/courses"
        schema={coursesSchema}
      />

      {/* ── Title Banner ─────────────────────────────────── */}
      <section className="pt-48 pb-16 md:pt-64 md:pb-32 px-5 sm:px-8 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-rose-100/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4" />
        <div className="container-custom relative z-10 text-center lg:text-left">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-rose-600 font-extrabold uppercase tracking-[0.4em] text-[10px] sm:text-xs mb-4 block"
            >
              Excellence in Arts
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-slate-900 leading-tight mb-8"
            >
              The Master <span className="gradient-text italic">Catalog</span>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* ── Courses Grid ──────────────────────────────────── */}
      <section className="py-16 pb-32 px-5 sm:px-8 bg-white min-h-[600px]">
        <div className="container-custom">
          <motion.div
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((c) => (
                <motion.article
                  key={c.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="group bg-white rounded-[3rem] overflow-hidden border border-slate-100 flex flex-col h-full hover:shadow-2xl transition-all duration-500 shadow-premium"
                >
                  {/* Image Section */}
                  <div className="w-full relative aspect-[4/3] overflow-hidden bg-slate-100">
                    {c.img ? (
                      <img
                        src={c.img}
                        alt={c.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-7xl bg-white">
                        {c.emoji}
                      </div>
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="p-8 sm:p-10 flex flex-col flex-grow bg-white">
                    <h2 className="font-serif text-2xl font-bold text-[#0A2647] mb-3 leading-tight">
                      {c.title}
                    </h2>
                    <p className="text-[#5B7C99] text-sm font-medium italic mb-6 leading-relaxed">
                      "{c.subtitle}"
                    </p>
                    
                    <div className="mt-auto">
                      <p className="text-[#9DB2BF] text-[11px] font-black uppercase tracking-[0.2em] mb-8">
                        {c.duration}
                      </p>

                      <a
                        href="https://wa.me/918072769642"
                        className="btn-premium btn-gradient w-full py-5 text-[11px] uppercase tracking-widest text-center"
                      >
                        Enroll Now <ArrowRight size={16} />
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ── Help CTA ──────────────────────────────────────── */}
      <section className="py-24 px-5 sm:px-8 bg-slate-50">
        <div className="container-custom">
          <div className="glass-card rounded-[4rem] p-10 md:p-20 text-center border-white shadow-premium relative overflow-hidden group">
            <div className="absolute inset-0 bg-linear-to-tr from-rose-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10">
              <ShieldCheck className="mx-auto text-rose-500 mb-8" size={56} />
              <h2 className="font-serif text-3xl sm:text-6xl font-bold text-slate-900 mb-8 leading-tight">
                Need Career Advice?
              </h2>
              <p className="text-slate-500 font-medium text-lg leading-relaxed max-w-xl mx-auto mb-12">
                Not sure which course is right for you? Talk to our master
                trainers in Chidambaram for a{" "}
                <span className="text-rose-600 font-bold underline decoration-rose-200 underline-offset-8">
                  Free 1-on-1 Consultation.
                </span>
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link
                  to="/contact"
                  className="btn-premium btn-gradient w-full sm:w-auto px-12 text-center"
                >
                  Start Free Consultation <ArrowRight size={18} />
                </Link>
                <a
                  href="tel:+918072769642"
                  className="btn-premium btn-outline w-full sm:w-auto px-12 text-center"
                >
                  Call for Admission <Phone size={18} className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
