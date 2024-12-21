import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import PortfolioSection from './components/PortfolioSection';
import Header from './components/Header';
import ResumeSection from './components/ResumeSection';
import { projects } from './components/ProjectsData';
import ExperienceSection from './components/ExperienceSection';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';

const App = () => {
    const [openModalId, setOpenModalId] = useState(null);

    return (
        <div className="bg-primary text-white min-h-screen">

            <Header />
            <PortfolioSection onCardClick={(id) => setOpenModalId(id)} />
            <ResumeSection />
            <ExperienceSection />
            <Footer />

            {projects.map((proj) => (
        <CSSTransition
          key={proj.id}
          in={openModalId === proj.id}
          timeout={300}
          classNames="modal"
          unmountOnExit
          onEnter={() => {
            // Блокируем скролл body при появлении:
            document.body.style.overflow = 'hidden';
          }}
          onExited={() => {
            // Возвращаем скролл после ухода модалки
            document.body.style.overflow = '';
          }}
        >
          <ProjectModal
            project={proj}
            onClose={() => setOpenModalId(null)}
          />
        </CSSTransition>
      ))}
        </div>
    );
}

export default App;
