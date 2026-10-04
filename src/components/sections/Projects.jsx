import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import SpotlightCard from '../ui/SpotlightCard';

const projectsData = [
  {
    id: 'klinik',
    category: 'project',
    image: '/project/project 1.png',
    badge: 'Web Online Regist',
    badgeIcon: 'fa-medal',
    type: 'Web Development',
    title: 'Back-End Klinik Pratama UIN',
    desc: 'Sistem penerjemah end-to-end video Bahasa Isyarat Indonesia (BISINDO) menjadi teks alami berbahasa Indonesia. Menggunakan MediaPipe untuk mengekstraksi koordinat tangan & tubuh, serta arsitektur CNN-GRU berbasis attention mechanism dengan evaluasi BLEU Score dan WER.',
    details: {
      badge: 'International Award Research',
      desc: 'Proyek riset kompetisi penemuan ilmiah tingkat internasional (IICYMS) kategori Applied Life Science :',
      points: [
        'Tracking landmark sendi tangan & postur tubuh secara real-time via Google MediaPipe.',
        'Modelling urutan temporal gestur dengan Convolutional Neural Network & Gated Recurrent Unit (CNN-GRU).',
        'Attention Mechanism untuk memfokuskan representasi pada gestur tangan utama.',
        'Evaluasi akurasi menggunakan metrik BLEU Score dan Word Error Rate (WER).'
      ]
    }
  },
  {
    id: 'doneit',
    category: 'project',
    image: '/project/project 2.png',
    badge: 'Task App',
    badgeIcon: 'fa-laptop-medical',
    type: 'Android Application',
    title: 'Done It',
    desc: 'Sistem registrasi online dan portal informasi fasilitas kesehatan terpadu. Mengoptimalkan alur pelayanan pasien di klinik, transparansi data operasional, serta dirancang dengan antarmuka yang bersih dan ramah pengguna.',
    details: {
      badge: 'Applied Web Engineering',
      desc: 'Sistem aplikasi web untuk mendigitalisasi operasional loket di Klinik Pratama UIN SGD Bandung :',
      points: [
        'Form reservasi antrean pasien secara live dengan validasi data instan.',
        'Portal profil klinik dan publikasi jadwal layanan kesehatan terintegrasi.',
        'Desain antarmuka UI/UX yang fokus pada kenyamanan akses pasien.',
        'Backend terstruktur menggunakan MVC dan basis data relasional MySQL.'
      ]
    }
  },
  {
    id: 'SISADAM',
    category: 'project',
    image: '/project/project 3.png',
    badge: 'Web Application',
    badgeIcon: 'fa-code',
    type: 'Backend',
    title: 'Back-End Sistem Satu Data Mahasiswa',
    desc: 'Deskripsi singkat tentang project ketiga ini. Anda dapat mengubah teks ini sesuai dengan deskripsi asli dari project yang Anda buat.',
    details: {
      badge: 'Frontend Development',
      desc: 'Penjelasan lebih detail tentang fitur-fitur di project 3:',
      points: [
        'Implementasi UI/UX yang responsif dan interaktif.',
        'Integrasi dengan REST API untuk manajemen data.'
      ]
    }
  },
  {
    id: 'skripsi',
    category: 'project',
    image: '/project/project 4.png',
    badge: 'Data System',
    badgeIcon: 'fa-database',
    type: 'AI',
    title: 'Computer Vision model For Damage Detection',
    desc: 'Deskripsi singkat tentang project keempat ini. Silakan disesuaikan dengan studi kasus atau fitur utama yang ada pada aplikasi.',
    details: {
      badge: 'Backend Architecture',
      desc: 'Penjelasan arsitektur dari project 4:',
      points: [
        'Perancangan skema database yang efisien.',
        'Pembuatan endpoint API yang aman dan terstruktur.'
      ]
    }
  },
  {
    id: 'porto',
    category: 'project',
    image: '/project/project 5.png',
    badge: 'Miscellaneous',
    badgeIcon: 'fa-layer-group',
    type: 'Portfolio',
    title: 'Portfoli',
    desc: 'Deskripsi singkat tentang project kelima. Menggabungkan sisi frontend dan backend untuk solusi digital yang lengkap.',
    details: {
      badge: 'Fullstack Engineering',
      desc: 'Rincian fitur project 5:',
      points: [
        'End-to-end development dari UI hingga database.',
        'Optimasi performa dan SEO.'
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