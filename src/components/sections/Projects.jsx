import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import SpotlightCard from '../ui/SpotlightCard';

const projectsData = [
  {
    id: 'klinik',
    category: 'project',
    image: '/project/project 1.png',
    badge: 'Clinic Portal System',
    badgeIcon: 'fa-notes-medical',
    type: 'Backend Engineering',
    title: 'Klinik Pratama Online Registration Backend',
    desc: 'Architected and built the backend infrastructure for the patient queue and online appointment booking system at Klinik Pratama UIN SGD Bandung. Engineered clean database relationships, scheduled capacity tracking, and streamlined ticket issuance for daily patient traffic.',
    tags: ['Laravel', 'PHP', 'MySQL', 'RESTful API'],
    details: {
      badge: 'Applied Web Architecture',
      desc: 'Server-side engineering and database design implemented to modernize the clinic’s front-desk operations:',
      points: [
        'Designed normalized relational database schemas in MySQL to manage patient registries, clinic operating hours, and live queue records.',
        'Implemented robust validation pipelines for real-time appointment bookings to prevent double-booking and queue ticket conflicts.',
        'Structured maintainable MVC workflows and standardized RESTful endpoints for smooth front-end service consumption.',
        'Optimized database queries to ensure reliable response times and minimize bottleneck latency during peak clinic hours.'
      ]
    }
  },
  {
    id: 'doneit',
    category: 'project',
    image: '/project/project 2.png', 
    badge: 'Productivity App',
    badgeIcon: 'fa-list-check',
    type: 'Mobile Development',
    title: 'Done It – Android Task Management',
    desc: 'A native Android task management and to-do application designed to help users organize daily workflows and boost personal productivity. Built with a clean, distraction-free interface and local persistence for reliable offline capability.',
    tags: ['Java / Kotlin', 'Android Studio', 'SQLite / Room', 'Material Design'],
    details: {
      badge: 'Native Mobile Engineering',
      desc: 'Core architecture and feature implementation developed natively using Android Studio:',
      points: [
        'Built full CRUD features for creating, updating, and completing daily tasks.',
        'Integrated local SQLite storage for reliable offline task management.',
        'Designed a clean, responsive mobile interface using Material Design principles.'
      ]
    }
  },
  {
    id: 'SISADAM',
    category: 'project',
    image: '/project/project 3.png', 
    badge: 'Data Dashboard',
    badgeIcon: 'fa-chart-pie',
    type: 'Full-Stack / Dashboard',
    title: 'SISADAM – Student Data Analytics Dashboard',
    desc: 'An integrated analytics dashboard built for Sistem Satu Data Mahasiswa to visualize academic and administrative metrics, including tuition payment statuses, student demographics, and GPA trends.',
    tags: ['Web Dashboard', 'Data Visualization', 'REST API', 'Database'],
    details: {
      badge: 'Analytics & Visualization',
      desc: 'Key dashboard modules and data pipeline features developed for the platform:',
      points: [
        'Built interactive visual charts to track tuition payment rates, student status distributions, and regional demographics.',
        'Implemented an instant search feature to look up and filter specific student records.',
        'Developed API endpoints and database queries to aggregate academic statistics and semester GPA trends.'
      ]
    }
  },
  {
    id: 'skripsi',
    category: 'project',
    image: '/project/project 4.png',
    badge: 'Undergraduate Thesis',
    badgeIcon: 'fa-eye', // Bisa juga pakai 'fa-pills' atau 'fa-microchip'
    type: 'Computer Vision & AI',
    title: 'Pill Defect Detection using Computer Vision',
    desc: 'An end-to-end computer vision research project developed to automate pharmaceutical quality control by detecting physical defects in medicinal pills and tablets.',
    tags: ['Python', 'Computer Vision', 'Deep Learning', 'Data Preprocessing'],
    details: {
      badge: 'Applied AI Research',
      desc: 'Key pipeline stages implemented throughout the research project:',
      points: [
        'Collected and annotated custom pill image datasets representing various physical defect classes.',
        'Conducted Exploratory Data Analysis (EDA) and image preprocessing to enhance feature clarity and balance class distributions.',
        'Designed a minimal, clean dark-mode interface with an intuitive user experience.'
      ]
    }
  },
  {
    id: 'porto',
    category: 'project',
    image: '/project/project 5.png',
    badge: 'Personal Showcase',
    badgeIcon: 'fa-laptop-code',
    type: 'Frontend Development',
    title: 'Personal Developer Portfolio',
    desc: 'A modern, responsive developer portfolio engineered with Next.js and Tailwind CSS to showcase software projects, technical skill sets, and professional experience.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
    details: {
      badge: 'UI & Frontend Architecture',
      desc: 'Key frontend implementations and interactive design choices for the site:',
      points: [
        'Built a fully responsive layout with reusable component structures using Next.js and Tailwind CSS.',
        'Integrated smooth micro-interactions and modal transitions powered by Framer Motion.',
        'Refined visual aesthetics with dark-theme styling, glassmorphism card effects, and custom scrollbars.'
      ]
    }
  },
  {
    id: 'blanc-instinc',
    category: 'project',
    image: '/project/project 6.png', 
    badge: 'E-Commerce Store',
    badgeIcon: 'fa-bag-shopping',
    type: 'Full-Stack Development',
    title: 'Blanc Instinc – Fragrance E-Commerce',
    desc: 'A modern e-commerce web platform built for Blanc Instinc, designed to showcase fragrance collections, highlight detailed scent profiles, and manage direct shopping orders.',
    tags: ['Web Application', 'Frontend', 'Backend', 'Database'],
    details: {
      badge: 'Full-Stack Implementation',
      desc: 'Core development work handled across the platform:',
      points: [
        'Developed an interactive product catalog and shopping cart interface for seamless fragrance browsing.',
        'Built backend endpoints and database schemas to process customer orders and track perfume inventory.'
      ]
    }
  },
  {
    id: 'himatif-feed',
    category: 'project',
    image: '/project/project 7.png', 
    badge: 'Creative & Media',
    badgeIcon: 'fa-palette',
    type: 'Social Media Design',
    title: 'HIMATIF Instagram Feeds & Visual Content',
    desc: 'Curated and designed engaging visual content and social media feed layouts for HIMATIF using Canva, maintaining a consistent brand aesthetic and clear informational hierarchy.',
    tags: ['Canva', 'Social Media Design'],
    details: {
      badge: 'Visual Design & Content',
      desc: 'Key creative and design aspects developed for the organization’s social media:',
      points: [
        'Designed structured multi-slide feeds and publication posters tailored for Instagram engagement.',
        'Maintained consistent organization branding through cohesive color palettes, typography, and visual assets.',
        'Transformed technical information and event announcements into clean, easy-to-read visual layouts.'
      ]
    }
  },
  {
    id: 'video-editing',
    category: 'project',
    image: '/project/project 81.png', 
    badge: 'Multimedia Showcase',
    badgeIcon: 'fa-clapperboard',
    type: 'Video Editing',
    title: 'Short-Form Video Production & Editing',
    desc: 'A collection of short-form promotional and creative videos edited using CapCut, focusing on dynamic pacing, engaging transitions, and sound-synced storytelling.',
    tags: ['CapCut', 'Short-Form Video', 'Audio Sync'],
    details: {
      badge: 'Post-Production',
      desc: 'Key editing techniques and production workflows applied across the projects:',
      points: [
        'Assembled footage with rhythmic beat-syncing, smooth cuts, and engaging motion transitions.',
        'Enhanced visual clarity through basic color adjustments, keyframing, and custom typography overlay.',
        'Optimized video pacing and audio mixing to maximize viewer retention across social media formats.'
      ]
    }
  }
];

// Data sertifikat dengan judul dan penerbit/kategori
const certificatesData = [
  { 
    id: 'cert1', 
    title: 'Memulai Pemrograman Dengan Java', 
    issuer: 'Dicoding Indonesia',
    image: '/sertifikat/sertifikat 1.jpg' 
  },
  { 
    id: 'cert2', 
    title: 'CCNA: Introduction to Networks', 
    issuer: 'Cisco Networking Academy',
    image: '/sertifikat/sertifikat 2.jpg' 
  },
  { 
    id: 'cert3', 
    title: 'NDG Linux Essentials', 
    issuer: 'Cisco Networking Academy & Network Defense',
    image: '/sertifikat/sertifikat 3.jpg' 
  },
  { 
    id: 'cert4', 
    title: 'Microsoft Office Specialist: Excel', 
    issuer: 'PTIPD UIN SGD & Lumina Eka Optima',
    image: '/sertifikat/sertifikat 4.jpeg' 
  },
  { 
    id: 'cert5', 
    title: 'Certified Int. Specialist in Data Visualization', 
    issuer: 'PASAS Institute, Singapore',
    image: '/sertifikat/sertifikat 5.jpg' 
  },
  { 
    id: 'cert6', 
    title: 'Silver Medalist - IICYMS 2024', 
    issuer: 'International Invention Competition',
    image: '/sertifikat/sertifikat 6.jpg' 
  },
];

const Projects = ({ onOpenModal }) => {
  const [filter, setFilter] = useState('project');
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-bold tracking-widest uppercase text-zinc-400 bg-zinc-900 border border-zinc-800 px-3.5 py-1.5 rounded-full">
              Engineering Portfolio
            </span>
            <h2 className="text-3xl font-extrabold text-zinc-100 mt-3 tracking-tight">
              Selected Works & Credentials
            </h2>
          </motion.div>

          {/* Filter Tab */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-1.5 bg-zinc-900 p-1 rounded-2xl border border-zinc-800 shadow-sm mt-4 md:mt-0 text-xs font-semibold"
          >
            <button
              onClick={() => setFilter('project')}
              className={`px-6 py-2 rounded-xl transition-all ${filter === 'project' ? 'bg-[#B497CF] text-zinc-950 font-bold' : 'text-zinc-400 hover:text-zinc-100'}`}
            >
              Projects
            </button>
            <button
              onClick={() => setFilter('certificate')}
              className={`px-6 py-2 rounded-xl transition-all ${filter === 'certificate' ? 'bg-[#B497CF] text-zinc-950 font-bold' : 'text-zinc-400 hover:text-zinc-100'}`}
            >
              Certificates
            </button>
          </motion.div>
        </div>

        {/* Content List */}
        <motion.div layout className="relative">
          <AnimatePresence mode="wait">
            
            {/* Tampilan Projects */}
            {filter === 'project' && (
              <motion.div
                key="projects-grid"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {projectsData.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    className="flex"
                  >
                    <SpotlightCard spotlightColor="rgba(177, 122, 230, 0.93)" className="glass-card rounded-3xl border border-zinc-800 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group w-full">
                      <div className="p-3 sm:p-4 pb-0">
                        <div className="w-full h-48 sm:h-56 overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800/80">
                          <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                      </div>

                      <div className="p-6 sm:p-8 pt-5 flex-1 flex flex-col">
                        <div className="flex items-center justify-between mb-4">
                          <span className="px-3 py-1 rounded-full bg-zinc-800/60 text-zinc-200 border border-zinc-700 text-xs font-bold flex items-center gap-1.5">
                            <i className={`fa-solid ${project.badgeIcon} text-[#B497CF]`}></i> {project.badge}
                          </span>
                          <span className="text-xs text-zinc-500 font-mono">{project.type}</span>
                        </div>

                        <h3 className="text-xl font-bold text-zinc-100 mb-2">{project.title}</h3>
                        <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 flex-1">
                          {project.desc}
                        </p>

                        <button
                          onClick={() => onOpenModal(project)}
                          className="inline-flex items-center gap-2 text-xs font-bold text-zinc-100 hover:text-[#B497CF] tracking-wide uppercase transition-colors self-start relative z-20"
                        >
                          <span>See Details</span>
                          <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                        </button>
                      </div>
                    </SpotlightCard>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Tampilan Certificates dengan Hover Title & Click to View */}
            {filter === 'certificate' && (
              <motion.div
                key="certificates-grid"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
              >
                {certificatesData.map((cert) => (
                  <motion.div 
                    key={cert.id} 
                    layout 
                    onClick={() => setSelectedCert(cert)}
                    className="cursor-pointer flex"
                  >
                    <SpotlightCard spotlightColor="rgba(177, 122, 230, 0.93)" className="p-3 rounded-3xl border border-zinc-800/80 overflow-hidden shadow-sm bg-zinc-900/50 hover:border-[#B497CF]/50 transition-all duration-300 group w-full">
                      <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-zinc-950">
                        <img 
                          src={cert.image} 
                          alt={cert.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                        />

                        {/* Overlay saat di-hover */}
                        <div className="absolute inset-0 bg-zinc-950/75 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-between">
                          <div className="flex justify-end">
                            <span className="w-8 h-8 rounded-full bg-zinc-800/80 text-zinc-200 flex items-center justify-center text-xs">
                              <i className="fa-solid fa-expand text-[#B497CF]"></i>
                            </span>
                          </div>
                          <div>
                            <span className="text-[10px] uppercase font-mono tracking-wider text-[#B497CF] block mb-1">
                              {cert.issuer}
                            </span>
                            <h4 className="text-sm font-bold text-zinc-100 leading-snug">
                              {cert.title}
                            </h4>
                            <span className="text-[11px] text-zinc-400 mt-2 inline-flex items-center gap-1.5 font-medium">
                              <span>Click to view</span>
                              <i className="fa-solid fa-arrow-right text-[9px]"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </SpotlightCard>
                  </motion.div>
                ))}
              </motion.div>
            )}

          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal Lightbox untuk Melihat Sertifikat Penuh */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-md cursor-zoom-out"
          >
            {/* Tombol Tutup Mengambang di Pojok Kanan Atas */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-6 right-6 w-11 h-11 rounded-full bg-zinc-900/80 border border-zinc-700/80 text-zinc-300 hover:text-zinc-100 hover:bg-zinc-800 transition-all flex items-center justify-center z-10 shadow-lg cursor-pointer"
              aria-label="Tutup"
            >
              <i className="fa-solid fa-xmark text-lg"></i>
            </button>

            {/* Gambar Sertifikat */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[90vh] flex items-center justify-center cursor-default"
            >
              <img 
                src={selectedCert.image} 
                alt={selectedCert.title || "Sertifikat"} 
                className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-2xl shadow-2xl select-none"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;