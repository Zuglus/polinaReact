import React, { useState } from 'react';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Modal from './components/Modal';
import Footer from './components/Footer';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <Header />
      <Portfolio />
      <Skills />
      <Experience />
      <Footer />
      <button onClick={() => setModalOpen(true)} className="mt-4">Открыть модалку</button>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <p>Содержимое модального окна</p>
      </Modal>
    </div>
  );
}

export default App;
