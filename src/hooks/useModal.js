import { useState } from "react";

export const useModal = ()=>{
  const [isOpen, setIsOpen] = useState('d-none');

  const openModal = ()=>{
    setIsOpen('d-block')
  }

  const closeModal = ()=> {
    setIsOpen('d-none')
  }

  return {isOpen, openModal, closeModal}
}