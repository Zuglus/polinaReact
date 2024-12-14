import React from 'react';

const Modal = ({ open, onClose, children }) => {
  return (
    <dialog open={open} className="backdrop:opacity-90">
      <div className="modal-content p-4 bg-white rounded">
        {children}
        <button onClick={onClose}>Закрыть</button>
      </div>
    </dialog>
  );
};

export default Modal;
