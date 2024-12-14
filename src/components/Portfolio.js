// src/components/Portfolio.js
import React from "react";
import rings from "../assets/images/rings_with_circle.svg";
import center from "../assets/images/center.png";
import day from "../assets/images/day.png";
import niti from "../assets/images/threads.png"
import code from "../assets/images/code.png"

const Portfolio = () => {
    return (

        <section className="relative mx-auto px-4 py-[7.75rem] max-w-[75rem]">
            <div className="relative mb-[4.1875rem] text-center">
                <div
                    className="absolute top-[-2.875rem] md:top-[-1.875rem] left-[50%] z-[-1] w-[25.875rem] md:w-[17.25rem] h-[28.0125rem] md:h-[18.675rem] transform -translate-x-[20.6rem] md:-translate-x-[13.625rem]">
                    <img src={rings} alt="Декоративные кольца"
                        className="w-full h-full object-contain" />
                </div>
                <h2 className="font-mv-skifer text-[4.6875rem] md:text-[3.125rem] leading-[1.24] tracking-[0.01em]">
                    Портфолио
                </h2>
            </div>


            <div
                className="gap-[2.71875rem] md:gap-[1.8125rem] grid grid-cols-1 md:grid-cols-2 mx-auto max-w-[70.65625rem] md:max-w-[64.4375rem]">
                <div
                    className="portfolio-card bg-white/5 hover:shadow-lg rounded-[1.875rem] md:rounded-[1.25rem] transition-all hover:-translate-y-2 duration-300 cursor-pointer overflow-hidden group">
                    <img src={niti} alt="НИТИ"
                        className="group-hover:scale-105 w-full h-full transition-transform duration-300 object-cover" />
                </div>

                <div
                    className="portfolio-card bg-white/5 hover:shadow-lg rounded-[1.875rem] md:rounded-[1.25rem] transition-all hover:-translate-y-2 duration-300 cursor-pointer overflow-hidden group">
                    <img src={code} alt="КОДИИМ"
                        className="group-hover:scale-105 w-full h-full transition-transform duration-300 object-cover" />
                </div>
                <div
                    className="portfolio-card bg-white/5 hover:shadow-lg rounded-[1.875rem] md:rounded-[1.25rem] transition-all hover:-translate-y-2 duration-300 cursor-pointer overflow-hidden group">
                    <img src={center} alt="В центре науки"
                        className="group-hover:scale-105 w-full h-full transition-transform duration-300 object-cover" />
                </div>
                <div
                    className="portfolio-card bg-white/5 hover:shadow-lg rounded-[1.875rem] md:rounded-[1.25rem] transition-all hover:-translate-y-2 duration-300 cursor-pointer overflow-hidden group">
                    <img src={day} alt="День физики"
                        className="group-hover:scale-105 w-full h-full transition-transform duration-300 object-cover" />
                </div>
            </div>
        </section>

    )
};

export default Portfolio;
