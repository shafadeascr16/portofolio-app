import { useState } from 'react';
import ParticleCanvas from './components/layout/ParticleCanvas';
import AmbientOrbs from './components/layout/AmbientOrbs';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Toast from './components/layout/Toast';

import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

import Modal from './components/ui/Modal';
import './index.css';

function App() {
  const [toast, setToast] = useState({ isVisible: false, message: '' });
  const [modal, setModal] = useState({ isOpen: false, project: null });

  const handleCopyContact = (text, message) => {
    navigator.clipboard.writeText(text).then(() => {
      setToast({ isVisible: true, message });
    });
  };

  const handleOpenModal = (project) => {
    setModal({ isOpen: true, project });
  };

  const handleCloseModal = () => {
    setModal({ isOpen: false, project: null });
  };

  return (
    <>
      <ParticleCanvas />
      <AmbientOrbs />
      
      <Navbar />
      
      <main>
        <Hero onCopyContact={handleCopyContact} />
        <About />
        <Experience />
        <Skills />
        <Projects onOpenModal={handleOpenModal} />
        <Contact onCopyContact={handleCopyContact} />
      </main>

      <Footer />

      <Toast 
        isVisible={toast.isVisible} 
        message={toast.message} 
        onClose={() => setToast({ isVisible: false, message: '' })} 
      />

      <Modal 
        isOpen={modal.isOpen} 
        project={modal.project} 
        onClose={handleCloseModal} 
      />
    </>
  );
}

export default App;
