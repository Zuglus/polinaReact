import { useState, useRef } from 'react';
import PropTypes from 'prop-types';

const Modal = ({ isOpen, onClose, project }) => {
  const modalContentRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClose = () => {
    if (modalContentRef.current) {
      modalContentRef.current.style.opacity = '0';
      modalContentRef.current.style.transform = 'translateY(20px)';
      setTimeout(() => {
        onClose();
        modalContentRef.current.style.opacity = '';
        modalContentRef.current.style.transform = '';
      }, 300);
    }
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % project.images.length);
  };

  if (!isOpen) return null;

  return (
    <dialog
      open
      className="bg-transparent p-0 max-w-none w-full h-full outline-none fixed inset-0 z-50"
    >
      <div className="px-4 min-h-screen text-center">
        <span className="inline-block h-screen align-middle" />
        <div
          ref={modalContentRef}
          className="modal-content inline-block border-white/10 bg-[#04061B] shadow-xl my-4 p-[3.75rem] md:p-[2.5rem] border rounded-[1.875rem] md:rounded-[1.25rem] w-full max-w-[93.75rem] md:max-w-[62.5rem] text-left align-middle transform transition-all duration-300 overflow-y-auto max-h-screen"
        >
          {/* Кнопка закрытия */}
          <button
            onClick={handleClose}
            className="absolute top-[1.875rem] md:top-[1.25rem] right-[1.875rem] md:right-[1.25rem] flex justify-center items-center border border-white/10 hover:border-white/20 rounded-full w-[2.5rem] h-[2.5rem] transition-all hover:rotate-90 duration-300 outline-none"
          >
            <svg width="21" height="21" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L13 13M1 13L13 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          <div className="space-y-[2.8125rem] md:space-y-[1.875rem]">
            {/* Заголовок и описание */}
            <h3 className="font-mv-skifer text-[4.6875rem] md:text-[3.125rem] text-white">{project.title}</h3>
            <h4 className="mb-4 font-medium text-[2.25rem] md:text-[1.5rem] text-white">{project.description}</h4>

            {/* Целевая аудитория */}
            <p className="font-onest text-[1.875rem] md:text-[1.25rem] text-white/80">
              <span className="font-semibold text-white">Целевая аудитория:</span> {project.task}
            </p>

            {/* Слайдер */}
            <div className="slider w-full max-w-[93.75rem] mx-auto overflow-hidden group">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {project.images.map((img, index) => (
                  <div key={index} className="slide w-full flex-shrink-0 rounded-[1.25rem]">
                    <img src={img} alt={`Slide ${index + 1}`} className="w-full object-cover rounded-[1.25rem]" />
                  </div>
                ))}
              </div>

              {/* Кнопки управления */}
              <div className="flex justify-center space-x-6 mt-8 mb-4 text-white font-onest font-thin text-[3.28125rem] md:text-[2.1875rem]">
                <button
                  onClick={prevSlide}
                  className="border border-white/10 hover:bg-white hover:text-[#3624A6] rounded-full w-[2.5rem] h-[2.5rem] flex items-center justify-center transition-colors duration-300"
                >
                  &larr;
                </button>
                <button
                  onClick={nextSlide}
                  className="border border-white/10 hover:bg-white hover:text-[#3624A6] rounded-full w-[2.5rem] h-[2.5rem] flex items-center justify-center transition-colors duration-300"
                >
                  &rarr;
                </button>
              </div>
              {/* Описание */}
              <div className="font-onest text-[1.875rem] md:text-[1.25rem] text-white/80 space-y-4">
                <p>
                  <span className="font-semibold text-white">Задача:</span> {project.task}
                </p>
                <p>
                  <span className="font-semibold text-white">Решение:</span> {project.solution}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  project: PropTypes.shape({
    images: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
    description: PropTypes.string,
    task: PropTypes.string,
    solution: PropTypes.string,
  }).isRequired,
};

export default Modal;
