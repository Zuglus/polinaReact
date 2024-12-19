import React from "react";

const PortfolioCard = ({ image, alt, onClick }) => (
  <div
    onClick={onClick}
    className="portfolio-card bg-white/5 hover:shadow-lg rounded-[1.875rem] md:rounded-[1.25rem] transition-all hover:-translate-y-2 duration-300 cursor-pointer overflow-hidden group"
  >
    <img
      src={image}
      alt={alt}
      className="group-hover:scale-105 w-full h-full transition-transform duration-300 object-cover"
    />
  </div>
);

export default PortfolioCard;
