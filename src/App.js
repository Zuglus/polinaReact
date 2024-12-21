import React, { useState } from 'react';
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

            {projects.map(proj => (
                <ProjectModal
                    key={proj.id}
                    project={proj}
                    isOpen={openModalId === proj.id}
                    onClose={() => setOpenModalId(null)}
                />
            ))}
        </div>
    );
}

export default App;
