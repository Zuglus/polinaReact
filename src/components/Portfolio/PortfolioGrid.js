import React from "react";
import PortfolioCard from "./PortfolioCard";

const PortfolioGrid = ({ items, onCardClick }) => (
  <div className="gap-[2.71875rem] md:gap-[1.8125rem] grid grid-cols-1 md:grid-cols-2 mx-auto max-w-[70.65625rem] md:max-w-[64.4375rem]">
    {items.map((item) => (
      <PortfolioCard
        key={item.id}
        image={item.image}
        alt={item.alt}
        onClick={() => onCardClick(item)}
      />
    ))}
  </div>
);

export default PortfolioGrid;
