import React, { useState, useEffect } from 'react';
import PortfolioSection from './components/PortfolioSection';
import Header from './components/Header';
import ResumeSection from './components/ResumeSection';
import { projects } from './components/ProjectsData';

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

function ExperienceSection() {
    return (
        <section className="relative mx-auto px-4 py-[0.75rem] max-w-[75rem]">
            <div
                className="absolute top-3/4 left-1/2 w-[56rem] md:w-auto -translate-x-[35.7rem] md:-translate-x-[23rem] z-[-1] overflow-hidden">
                <img src="/images/koltsa_fon1.svg" alt="" className="w-full h-full object-contain" />
            </div>

            <div className="ml-[30.1025rem] md:ml-[31.875rem] mb-[7.21875rem] md:mb-[4.8125rem]">
                <div className="relative">
                    <div
                        className="absolute -top-[1.40625rem] md:-top-[0.9375rem] -left-[12.375rem] md:-left-[8.25rem] w-[7.875rem] md:w-[5.25rem] h-[7.875rem] md:h-[5.25rem]">
                        <img src="/images/kruzhok_opyt_raboty.svg" alt="" className="w-full h-full object-contain" />
                    </div>

                    <div>
                        <p className="mb-[0.1875rem] md:mb-[0.125rem] font-extralight font-onest text-[3.28125rem] md:text-[2.1875rem] leading-[1.33] tracking-[0.01em]">
                            2023-по наст. время
                        </p>
                        <h3 className="mb-[0.65625rem] md:mb-[0.4375rem] font-medium font-onest text-[3.28125rem] md:text-[2.1875rem] leading-[1.25] tracking-[0.01em]">
                            Центр Педагогического<br />Мастерства
                        </h3>
                        <h3 className="mb-[0.65625rem] md:mb-[0.4375rem] font-medium font-onest text-[3.28125rem] md:text-[2.1875rem] leading-[1.33] tracking-[0.01em]">
                            Графический дизайнер
                        </h3>

                        <ul className="font-extralight text-[3.28125rem] md:text-[2.1875rem] list-none relative pl-[4.71rem] md:pl-[3.14rem]">
                            <li className="mb-[0.75rem] md:mb-[0.5rem]">&rarr; Фирменный стиль</li>
                            <li className="mb-[0.75rem] md:mb-[0.5rem]">&rarr; SMM-дизайн (соцсети)</li>
                            <li className="mb-[0.75rem] md:mb-[0.5rem]">&rarr; Презентации</li>
                            <li>&rarr; Полиграфия</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="ml-[30.1025rem] md:ml-[31.875rem] mb-[7.21875rem] md:mb-[4.8125rem]">
                <div className="relative">
                    <div>
                        <p className="mb-[0.1875rem] md:mb-[0.125rem] font-extralight font-onest text-[3.28125rem] md:text-[2.1875rem] leading-[1.33] tracking-[0.01em]">
                            2021-2022
                        </p>
                        <h3 className="mb-[0.65625rem] md:mb-[0.4375rem] font-medium font-onest text-[3.28125rem] md:text-[2.1875rem] leading-[1.25] tracking-[0.01em]">
                            Банк УБРиР
                        </h3>
                        <h3 className="mb-[0.65625rem] md:mb-[0.4375rem] font-medium font-onest text-[3.28125rem] md:text-[2.1875rem] leading-[1.33] tracking-[0.01em]">
                            Ведущий дизайнер<br />отдела коммуникаций
                        </h3>

                        <ul className="font-extralight text-[3.28125rem] md:text-[2.1875rem] list-none relative pl-[4.71rem] md:pl-[3.14rem]">
                            <li className="mb-[0.75rem] md:mb-[0.5rem]">&rarr; Презентации</li>
                            <li className="mb-[0.75rem] md:mb-[0.5rem]">&rarr; Коммуникационный<br />дизайн</li>
                            <li className="mb-[0.75rem] md:mb-[0.5rem]">&rarr; Полиграфия</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Footer() {
    return (
        <footer className="relative mt-[12.375rem] md:mt-[8.25rem] pb-[30.9375rem] md:pb-[20.625rem]">
            <div className="mx-auto px-4 max-w-[75rem]">
                <a
                    href="https://t.me/Koshkinap"
                    target="_blank"
                    rel="noreferrer"
                    className="flex justify-center items-center bg-white hover:bg-[#3624A6] text-[#3624A6] hover:text-white mx-auto md:ml-[25.375rem] rounded-[3.65625rem] md:rounded-[2.4375rem] w-[36.375rem] md:w-[24.25rem] h-[7.3125rem] md:h-[4.875rem] font-medium font-onest text-[3.75rem] md:text-[2.5rem] text-center leading-tight tracking-[0.01em] transition-colors duration-300"
                >
                    связаться
                </a>
            </div>
        </footer>
    );
}

function ProjectModal({ project, isOpen, onClose }) {
    const [show, setShow] = useState(false);
    const [closing, setClosing] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (isOpen) {
            // При открытии показываем модалку без задержки
            setShow(true);
            setClosing(false);
            // Отключаем прокрутку фона
            document.body.style.overflow = 'hidden';
        } else {
            // Когда isOpen становится false, запускаем анимацию закрытия
            if (show) {
                setClosing(true);
                // После анимации (300 мс) убираем модалку
                const timer = setTimeout(() => {
                    setShow(false);
                    document.body.style.overflow = '';
                }, 300); // время должно совпадать с duration-300 у Tailwind
                return () => clearTimeout(timer);
            }
        }
    }, [isOpen, show]);

    if (!show) return null;

    const currentSlide = project.slides[currentIndex];

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + project.slides.length) % project.slides.length);
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % project.slides.length);
    };

    const handleClose = () => {
        setClosing(true);
        // Запускаем таймер, чтобы через 300ms (длительность анимации) снять видимость
        setTimeout(() => {
            onClose();
        }, 300);
    };

    return (
        <div
            className={`
                fixed inset-0 z-50 flex items-center justify-center bg-[#04061B]/90 
                transition-opacity duration-300 
                ${closing ? 'opacity-0' : 'opacity-100'}
            `}
            onClick={handleClose}
        >
            <div
                className={`
                    modal-content inline-block border-white/10 bg-[#04061B] shadow-xl my-4 p-[3.75rem] md:p-[2.5rem] border rounded-[1.875rem] md:rounded-[1.25rem] w-full max-w-[93.75rem] md:max-w-[62.5rem] text-left align-middle relative overflow-y-auto max-h-[90vh]
                    transform transition-all duration-300
                    ${closing ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}
                `}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    tabIndex={-1}
                    onClick={handleClose}
                    className="absolute top-[1.875rem] md:top-[1.25rem] right-[1.875rem] md:right-[1.25rem] flex justify-center items-center border border-white/10 hover:border-white/20 rounded-full w-[10rem] md:w-[2.5rem] h-[10rem] md:h-[2.5rem] transition-all hover:rotate-90 duration-300 outline-none"
                >
                    <svg width="21" height="21" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                        className="scale-125 md:scale-100">
                        <path d="M1 1L13 13M1 13L13 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                </button>

                <div className="space-y-[2.8125rem] md:space-y-[1.875rem]">
                    <h3 className="font-mv-skifer text-[4.6875rem] md:text-[3.125rem] text-white">{project.title}</h3>
                    <h4 className="mb-4 font-medium text-[2.25rem] md:text-[1.5rem] text-white">{project.description}</h4>
                    <p className="font-onest text-[1.875rem] md:text-[1.25rem] text-white/80">
                        <span className="font-semibold text-white">Целевая аудитория:</span> {project.audience}
                    </p>

                    <div className="slider w-full max-w-[93.75rem] mx-auto overflow-hidden group">
                        <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                            {project.slides.map((slide, idx) => (
                                <div key={idx} className="slide w-full flex-shrink-0 rounded-[1.25rem] px-2">
                                    <img src={slide.image} alt={`Slide ${idx + 1}`} className="w-full object-cover rounded-[1.25rem]" />
                                </div>
                            ))}
                        </div>

                        <div
                            className="flex justify-center space-x-6 mt-8 mb-4 text-white font-onest font-thin text-[3.28125rem] md:text-[2.1875rem]">
                            <button onClick={prevSlide}
                                className="border border-white/10 hover:bg-white hover:text-[#3624A6] rounded-full w-[10rem] md:w-[2.5rem] h-[10rem] md:h-[2.5rem] flex items-center justify-center transition-colors duration-300">
                                &larr;
                            </button>
                            <button onClick={nextSlide}
                                className="border border-white/10 hover:bg-white hover:text-[#3624A6] rounded-full w-[10rem] md:w-[2.5rem] h-[10rem] md:h-[2.5rem] flex items-center justify-center transition-colors duration-300">
                                &rarr;
                            </button>
                        </div>

                        <div className="font-onest text-[1.875rem] md:text-[1.25rem] text-white/80 space-y-4">
                            <p><span className="font-semibold text-white">Задача:</span> {currentSlide.task}</p>
                            <p><span className="font-semibold text-white">Решение:</span> {currentSlide.solution}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
