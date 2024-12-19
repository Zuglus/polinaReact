import React from "react";

const Footer = () => {
  return (
    <footer className="relative mt-[12.375rem] md:mt-[10.25rem] pb-[30.9375rem] md:pb-[20.625rem]">
      <div className="mx-auto px-4 max-w-[75rem]">
        <a
          href="https://t.me/Koshkinap"
          target="_blank"
          rel="noreferrer"
          aria-label="Связаться через Telegram"
          className="flex justify-center items-center mx-auto md:ml-[25.375rem]
                     bg-white text-[#3624A6] hover:bg-[#3624A6] hover:text-white
                     rounded-[3.65625rem] md:rounded-[2.4375rem]
                     w-[36.375rem] md:w-[24.25rem] h-[7.3125rem] md:h-[4.875rem]
                     font-onest font-medium text-[3.75rem] md:text-[2.5rem] 
                     leading-tight tracking-[0.01em] text-center 
                     transition-colors duration-300"
        >
          связаться
        </a>
      </div>
    </footer>
  );
};

export default Footer;
