import { useState } from "react";

export const useModal = () => {
  const [stateModal, setStateModal] = useState(false);

  const openModal = () => {
    document.getElementById('modal').classList.add('open-modal')
    setStateModal(true);
  };

  const closeModal = () => {
    document.getElementById('modal').classList.remove('open-modal')
    setStateModal(false);
  };

  const toggleModal = () => {
    setStateModal((prevState) => !prevState);
  };

  return { stateModal, openModal, closeModal, toggleModal };
};
