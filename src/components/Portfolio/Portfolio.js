import React, { useState } from "react";
import PortfolioHeader from "./PortfolioHeader";
import PortfolioGrid from "./PortfolioGrid";
import Modal from "../Modal";
import { portfolioItems } from "./PortfolioData";

const Portfolio = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const openModal = (item) => {
    setActiveItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setActiveItem(null);
    setIsModalOpen(false);
  };

  return (
    <section className="relative mx-auto px-4 py-[7.75rem] max-w-[75rem]">
      <PortfolioHeader />
      <PortfolioGrid items={portfolioItems} onCardClick={openModal} />
      {activeItem && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          project={activeItem}
        />
      )}
    </section>
  );
};

export default Portfolio;
