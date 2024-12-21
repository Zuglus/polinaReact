import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function ModalSlider({ slides, currentIndex, currentSlide, onPrev, onNext }) {
  return (
    <div className="slider w-full max-w-[93.75rem] mx-auto overflow-hidden group">
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
            border border-white/10 text-9xl md:text-4xl hover:bg-white hover:text-[#3624A6] hover:font-normal
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
            border border-white/10 text-9xl md:text-4xl hover:bg-white hover:text-[#3624A6] hover:font-normal
            rounded-full w-[10rem] md:w-[2.5rem] h-[10rem] md:h-[2.5rem]
            flex items-center justify-center
            transition-colors duration-300
          "
        >
          &rarr;
        </button>
      </div>

      {/* Контейнер для анимации: показываем ровно один актуальный слайд */}
      <TransitionGroup component={null}>
        {/* Меняем ключ, чтобы RTG понимал, что произошла смена слайда */}
        <CSSTransition
          key={currentIndex}
          timeout={300}          // длительность анимации (в мс)
          classNames="slidefade" // префикс для классов анимации (см. ниже)
          unmountOnExit
        >
          <div>
            {/* Изображение */}
            <div className="rounded-[1.25rem] mb-6">
              <img
                src={currentSlide.image}
                alt={`Slide ${currentIndex + 1}`}
                className="w-full object-cover rounded-[1.25rem]"
              />
            </div>

            {/* Текст задачи и решения */}
            <div className="font-onest text-[2.875rem] md:text-[1.25rem] text-white/80 space-y-4">
              <p>
                <span className="font-semibold text-white">Задача:</span>{" "}
                {currentSlide.task}
              </p>
              <p>
                <span className="font-semibold text-white">Решение:</span>{" "}
                {currentSlide.solution}
              </p>
            </div>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default ModalSlider;
