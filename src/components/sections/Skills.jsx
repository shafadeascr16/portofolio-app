import { motion } from 'framer-motion';
import SpotlightCard from '../ui/SpotlightCard';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-20 bg-[#121212] border-y border-zinc-800/80 relative z-10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-zinc-400 bg-zinc-900 border border-zinc-800 px-3.5 py-1.5 rounded-full">
            Tech Stack
          </span>
          <h2 className="text-3xl font-extrabold text-zinc-100 mt-3 tracking-tight">
            Technical & Collaborative Stack
          </h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Frontend */}
          <motion.div variants={itemVariants} className="h-full">
            <SpotlightCard spotlightColor="rgba(177, 122, 230, 0.93)" className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800 shadow-sm hover:shadow-md transition-shadow h-full">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-8 h-8 rounded-xl bg-zinc-800/60 text-zinc-300 flex items-center justify-center text-xs font-bold">01</span>
                <h3 className="font-bold text-zinc-100 text-sm">Fullstack Engine</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['HTML5 & CSS3', 'Tailwind CSS', 'JavaScript', 'React', 'Laravel', 'Node.js', 'Python', 'MySQL', 'Git',].map(skill => (
                  <span key={skill} className="px-3 py-1.5 rounded-xl bg-zinc-900/50 border border-zinc-800 text-xs font-semibold text-zinc-300 hover:bg-zinc-800/60 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Creative Content */}
          <motion.div variants={itemVariants} className="h-full">
            <SpotlightCard spotlightColor="rgba(177, 122, 230, 0.93)" className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800 shadow-sm hover:shadow-md transition-shadow h-full">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-8 h-8 rounded-xl bg-zinc-800/60 text-zinc-300 flex items-center justify-center text-xs font-bold">02</span>
                <h3 className="font-bold text-zinc-100 text-sm">Creative Content</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Canva', 'Capcut', 'Adobe Photoshop', 'Adobe Ilustrator', 'Figma', 'Social Media'].map(skill => (
                  <span key={skill} className="px-3 py-1.5 rounded-xl bg-zinc-900/50 border border-zinc-800 text-xs font-semibold text-zinc-300 hover:bg-zinc-800/60 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          </motion.div>

          {/* AI & Analytics */}
          <motion.div variants={itemVariants} className="h-full">
            <SpotlightCard spotlightColor="rgba(177, 122, 230, 0.93)" className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800 shadow-sm hover:shadow-md transition-shadow h-full">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-8 h-8 rounded-xl bg-zinc-800/60 text-zinc-300 flex items-center justify-center text-xs font-bold">03</span>
                <h3 className="font-bold text-zinc-100 text-sm">AI, Data & Soft Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Computer Vision', 'MediaPipe', 'Python', 'Tableau', 'Team Work','Problem Solving', 'Public Speaking'].map(skill => (
                  <span key={skill} className="px-3 py-1.5 rounded-xl bg-zinc-900/50 border border-zinc-800 text-xs font-semibold text-zinc-300 hover:bg-zinc-800/60 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
