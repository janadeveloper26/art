import { useState } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  ArrowRight,
} from "lucide-react";
import SEO from "../components/SEO";

export default function Contact() {
  const [searchParams] = useSearchParams();
  const selectedCourse = searchParams.get("course") || "";

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    course: selectedCourse,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, mobile, course, message } = formData;
    
    // Construct WhatsApp message
    const waText = `*Enrollment Inquiry - Glorious Art Creations*%0A%0A` +
      `*Full Name:* ${name}%0A` +
      `*Mobile Number:* ${mobile}%0A` +
      `*Interested Course:* ${course}%0A` +
      `*Message:* ${message || "Interested in joining the academy."}`;

    const whatsappUrl = `https://wa.me/918072769642?text=${waText}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <PageWrapper>
      <SEO
        title="Contact Admissions | Enroll at Glorious Art Creations"
        description="Ready to start your creative career? Contact Glorious Art Creations in Chidambaram for admission details, course fees, and schedule information."
        url="/contact"
      />

      {/* ── Title Banner ─────────────────────────────────── */}
      <section className="pt-48 pb-16 lg:pt-64 lg:pb-32 px-5 sm:px-8 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-rose-100/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4" />
        <div className="container-custom relative z-10 text-center lg:text-left">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-rose-600 font-extrabold uppercase tracking-[.4em] text-[10px] sm:text-xs mb-4 block"
          >
            Get In Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-slate-900 leading-tight mb-8"
          >
            Contact <span className="gradient-text italic">Admissions</span>
          </motion.h1>
          <p className="text-slate-500 font-medium text-lg leading-relaxed max-w-xl">
            We're here to help you choose the perfect creative path. Reach out
            to us for admission details, fees, or course schedules.
          </p>
        </div>
      </section>

      {/* ── Main Content ──────────────────────────────────── */}
      <section className="section-padding px-5 sm:px-8 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Info Column */}
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-4">
                <h2 className="font-serif text-3xl font-bold text-slate-900">
                  Information
                </h2>
                <p className="text-slate-500 font-medium">
                  Located conveniently at the heart of the temple city,
                  Chidambaram.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  {
                    icon: <MapPin />,
                    title: "Main Campus",
                    text: "8A/2, Umayal Street, (Near National Shopping), Chidambaram, Tamil Nadu",
                  },
                  {
                    icon: <MapPin />,
                    title: "Bhuvanagiri Branch",
                    text: "Bus stand, opp to two wheeler stand, Bhuvanagiri.",
                  },
                  {
                    icon: <Phone />,
                    title: "Direct Line",
                    text: "+91 80727 69642, 73395 33550",
                  },
                  {
                    icon: <Mail />,
                    title: "Email Support",
                    text: "gacgloriousartcreationsstrust07@gmail.com",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6 items-start"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 text-rose-600 flex items-center justify-center shrink-0 border border-slate-100 shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-slate-500 font-medium text-sm leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <div className="p-8 rounded-[2.5rem] bg-linear-to-br from-green-50 to-teal-50 border border-green-100 flex flex-col sm:flex-row gap-6 items-center">
                <div className="w-16 h-16 rounded-3xl bg-green-500 text-white flex items-center justify-center shrink-0 shadow-xl shadow-green-200">
                  <MessageCircle size={32} />
                </div>
                <div className="text-center sm:text-left">
                  <p className="font-bold text-slate-900">Instant Chat</p>
                  <p className="text-xs text-slate-500 mb-4">
                    Start a conversation on WhatsApp for quick replies.
                  </p>
                  <a
                    href="https://wa.me/918072769642"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 font-extrabold uppercase tracking-widest text-[10px] items-center gap-2 inline-flex hover:translate-x-1 transition-transform"
                  >
                    Chat Now <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7">
              <div className="glass-card rounded-[3rem] p-8 sm:p-12 md:p-16 relative shadow-premium bg-white">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                <h3 className="font-serif text-2xl font-bold text-slate-900 mb-10">
                  Enrollment Inquiry
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 ml-4">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="w-full h-16 px-8 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-rose-400 focus:outline-hidden transition-all text-slate-900 font-medium"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 ml-4">
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        name="mobile"
                        required
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="+91 00000 00000"
                        className="w-full h-16 px-8 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-rose-400 focus:outline-hidden transition-all text-slate-900 font-medium"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 ml-4">
                      Interested Course
                    </label>
                    <select
                      name="course"
                      required
                      value={formData.course}
                      onChange={handleChange}
                      className="w-full h-16 px-8 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-rose-400 focus:outline-hidden transition-all text-slate-900 font-medium appearance-none cursor-pointer"
                    >
                      <option value="">Select a Course</option>
                      <option value="aari">Aari Embroidery</option>
                      <option value="fashion-tailoring"> Tailoring</option>
                      <option value="fashion-design">Fashion Designing</option>
                      <option value="beautician">Professional Beautician</option>
                      <option value="makeup">Makeup Artistry</option>
                      <option value="hairstyle">Hairstyle Mastery</option>
                      <option value="mehandi">Mehandi Artistry</option>
                      <option value="nail-art">Nail Art</option>
                      <option value="tracing">Tracing & Sketching</option>
                      <option value="brooches">Brooches & Crafts</option>
                      <option value="saree-prepleating">Saree Pre-pleating</option>
                      <option value="saree-draping">Saree Draping</option>
                      <option value="henna-mixology">Henna Mixology</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 ml-4">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your learning goals..."
                      className="w-full min-h-[160px] p-8 rounded-[2rem] bg-slate-50 border border-slate-100 focus:bg-white focus:border-rose-400 focus:outline-hidden transition-all text-slate-900 font-medium resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn-premium btn-gradient w-full py-5 text-base"
                  >
                    Send Request <Send size={20} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-20 px-5 sm:px-8 bg-slate-50">
        <div className="container-custom">
          <div className="h-[500px] w-full rounded-[3rem] bg-slate-200 relative overflow-hidden shadow-2xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3911.155353535353!2d79.696127!3d11.396239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDIzJzQ2LjUiTiA3OcKwNDEnNDYuMSJF!5e0!3m2!1sen!2sin!4v1713876000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Glorious Art Creations Location"
            ></iframe>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
