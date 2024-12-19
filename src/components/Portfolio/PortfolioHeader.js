import React from "react";
import rings from "../../assets/images/rings_with_circle.svg";

const PortfolioHeader = () => (
  <div className="relative mb-[4.1875rem] text-center">
    <div className="absolute top-[-2.875rem] md:top-[-1.875rem] left-[50%] z-[-1] w-[25.875rem] md:w-[17.25rem] h-[28.0125rem] md:h-[18.675rem] transform -translate-x-[20.6rem] md:-translate-x-[13.625rem]">
      <img src={rings} alt="Декоративные кольца" className="w-full h-full object-contain" />
    </div>
    <h2 className="font-mv-skifer text-[4.6875rem] md:text-[3.125rem] leading-[1.24] tracking-[0.01em]">
      Портфолио
    </h2>
  </div>
);

export default PortfolioHeader;
