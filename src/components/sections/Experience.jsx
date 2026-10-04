import { motion } from 'framer-motion';
import SpotlightCard from '../ui/SpotlightCard';

const Experience = () => {
  const experiences = [
    {
      badge: 'Healthcare Web Application',
      location: 'Kab. Bandung, Jawa Barat',
      title: 'Web Developer Intern',
      company: 'Klinik Pratama UIN Sunan Gunung Djati',
      desc: 'Developed a web-based online registration system and clinic profile website. Designed a user-friendly interface to streamline the digital patient registration process and provide accessible information about clinic services.',
      tags: ['Web Development', 'UI/UX Design', 'Patient Flow System']
    },
    {
      badge: 'Creative & Digital Content',
      location: 'Bandung, Jawa Barat',
      title: 'Creative Content Specialist',
      company: 'HIMATIF',
      desc: 'Created and edited video content, designed visual materials, and managed social media content to support digital communication and engagement.',
      tags: ['Video Editing', 'Graphic Design', 'Social Media']
    },
    {
      badge: 'Regulated Government Audit',
      location: 'Kab. Bandung, Jawa Barat',
      title: 'Pendamping Proses Produk Halal (P3H)',
      company: 'BPJPH (Badan Penyelenggara Jaminan Produk Halal)',
      desc: 'Supported local business owners during a community service program (KKN) by collecting and verifying business and product data, preparing application documents, and providing guidance throughout the halal certification process.',
      tags: ['Product Verification', 'Administrative Process', 'Field Problem Solving']
    }
  ];

  return (
    <section id="experience" className="py-20 relative z-10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-bold tracking-widest uppercase text-zinc-400 bg-zinc-900 border border-zinc-800 px-3.5 py-1.5 rounded-full">
              Experience Log
            </span>
            <h2 className="text-3xl font-extrabold text-zinc-100 mt-3 tracking-tight">
              Professional & Field History
            </h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono text-zinc-500 mt-2 md:mt-0"
          >
            
          </motion.div>
        </div>

        <div className="relative border-l-2 border-zinc-800 ml-4 md:ml-12 space-y-10">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-8 md:pl-10 group"
            >
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-zinc-900 border-4 border-softgrey-600 group-hover:scale-125 transition-transform duration-300"></div>

              <div className="md:absolute md:-left-36 top-1 text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2 md:mb-0">
                {exp.date}
              </div>

              <SpotlightCard spotlightColor="rgba(177, 122, 230, 0.93)" className="glass-card p-6 sm:p-8 rounded-3xl border border-zinc-800 shadow-sm hover:border-zinc-600 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-300 bg-zinc-800/60 px-2.5 py-1 rounded-md">
                    {exp.badge}
                  </span>
                  <span className="text-xs text-zinc-400 font-medium">
                    {exp.location}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-zinc-100">{exp.title}</h3>
                <p className="text-sm font-semibold text-zinc-400 mb-4">{exp.company}</p>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  {exp.desc}
                </p>
                <div className="flex flex-wrap gap-2 text-[11px] font-medium text-zinc-400">
                  {exp.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-zinc-800/60 rounded-lg">{tag}</span>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
