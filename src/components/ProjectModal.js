import { useEffect, useState } from "react";

const ProjectModal = ({ project, isOpen, onClose }) => {
    const [show, setShow] = useState(false);
    const [closing, setClosing] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (isOpen) {
            setShow(true);
            setClosing(false);
            document.body.style.overflow = 'hidden';
        } else {
            if (show) {
                setClosing(true);
                const timer = setTimeout(() => {
                    setShow(false);
                    document.body.style.overflow = '';
                }, 300); 
                return () => clearTimeout(timer);
            }
        }
    }, [isOpen, show]);

    if (!show) return null;

    // Логика переключения слайдов
    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + project.slides.length) % project.slides.length);
    };
    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % project.slides.length);
    };
    const currentSlide = project.slides[currentIndex];

    const handleClose = () => {
        setClosing(true);
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
                    inline-block relative w-full max-w-[93.75rem] md:max-w-[62.5rem]
                    align-middle my-4 p-[3.75rem] md:p-[2.5rem]
                    bg-[#04061B] border border-white/10 
                    rounded-[1.875rem] md:rounded-[1.25rem] shadow-xl 
                    text-left overflow-y-auto max-h-[90vh]
                    transform transition-all duration-300
                    ${closing ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}
                `}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Шапка модалки: заголовок, описание, кнопка "закрыть" */}
                <ModalHeader
                    title={project.title}
                    description={project.description}
                    audience={project.audience}
                    onClose={handleClose}
                />

                {/* Слайдер с изображениями, кнопками, текстом задачи/решения */}
                <ModalSlider
                    slides={project.slides}
                    currentIndex={currentIndex}
                    currentSlide={currentSlide}
                    onPrev={prevSlide}
                    onNext={nextSlide}
                />
            </div>
        </div>
    );
};

export default ProjectModal;

/* -------- Подкомпонент для шапки модалки -------- */
function ModalHeader({ title, description, audience, onClose }) {
    return (
        <div className="space-y-[2.8125rem] md:space-y-[1.875rem] mb-8">
            {/* Кнопка закрытия */}
            <button
                tabIndex={-1}
                onClick={onClose}
                className="
                    absolute top-[1.875rem] md:top-[1.25rem] right-[1.875rem] md:right-[1.25rem]
                    flex justify-center items-center
                    border border-white/10 hover:border-white/20
                    rounded-full w-[10rem] md:w-[2.5rem] h-[10rem] md:h-[2.5rem]
                    transition-all hover:rotate-90 duration-300 outline-none
                "
            >
                <svg width="21" height="21" viewBox="0 0 14 14" fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="scale-125 md:scale-100">
                    <path d="M1 1L13 13M1 13L13 1"
                          stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
            </button>

            {/* Основная информация о проекте */}
            <div>
                <h3 className="font-mv-skifer text-[4.6875rem] md:text-[3.125rem] text-white">
                    {title}
                </h3>
                <h4 className="mb-4 font-medium text-[3.25rem] md:text-[1.5rem] text-white">
                    {description}
                </h4>
                <p className="font-onest text-[2.875rem] md:text-[1.25rem] text-white/80">
                    <span className="font-semibold text-white">Целевая аудитория:</span> {audience}
                </p>
            </div>
        </div>
    );
}

/* -------- Подкомпонент для слайдера -------- */
function ModalSlider({ slides, currentIndex, currentSlide, onPrev, onNext }) {
    return (
        <div className="slider w-full max-w-[93.75rem] mx-auto overflow-hidden group">
            {/* Витрина слайдов */}
            <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {slides.map((slide, idx) => (
                    <div 
                        key={idx}
                        className="slide w-full flex-shrink-0 rounded-[1.25rem] px-2"
                    >
                        <img
                            src={slide.image}
                            alt={`Slide ${idx + 1}`}
                            className="w-full object-cover rounded-[1.25rem]"
                        />
                    </div>
                ))}
            </div>

            {/* Кнопки переключения */}
            <div
                className="
                    flex justify-center space-x-6 mt-8 mb-4 text-white
                    font-onest font-thin text-[3.28125rem] md:text-[2.1875rem]
                "
            >
                <button
                    onClick={onPrev}
                    className="
                        border border-white/10 hover:bg-white hover:text-[#3624A6]
                        rounded-full w-[10rem] md:w-[2.5rem] h-[10rem] md:h-[2.5rem]
                        flex items-center justify-center 
                        transition-colors duration-300
                    "
                >
                    &larr;
                </button>
                <button
                    onClick={onNext}
                    className="
                        border border-white/10 hover:bg-white hover:text-[#3624A6]
                        rounded-full w-[10rem] md:w-[2.5rem] h-[10rem] md:h-[2.5rem]
                        flex items-center justify-center
                        transition-colors duration-300
                    "
                >
                    &rarr;
                </button>
            </div>

            {/* Текст задачи и решения */}
            <div className="font-onest text-[2.875rem] md:text-[1.25rem] text-white/80 space-y-4">
                <p>
                    <span className="font-semibold text-white">Задача:</span>{' '}
                    {currentSlide.task}
                </p>
                <p>
                    <span className="font-semibold text-white">Решение:</span>{' '}
                    {currentSlide.solution}
                </p>
            </div>
        </div>
    );
}
