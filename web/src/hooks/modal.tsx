import React, { createContext, useCallback, useContext, useState } from 'react';
import Modal from '../components/Modal';

interface ICreateModalProps {
  openModal(): void;
  removeModal(): void;
}

const ModalContext = createContext<ICreateModalProps>({} as ICreateModalProps);

export const ModalVisible: React.FC = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const openModal = useCallback(() => {
    setIsVisible(true);
  }, []);

  const removeModal = useCallback(() => {
    setIsVisible(false);
  }, []);

  return (
    <ModalContext.Provider value={{ openModal, removeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export function useModal() {
  const context = useContext(ModalContext);
  return context;
}
