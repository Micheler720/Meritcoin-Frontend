import React, { useCallback } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { useTransition } from 'react-spring';
import { Container, Content, ModalContent, CloseButton } from './styles';

interface IModalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  children: Object;
}

const Modal: React.FC<IModalProps> = ({ children, isOpen, setIsOpen }) => {
  const transitions = useTransition(isOpen, null, {
    from: { opacity: 0, transitionDuration: '2s' },
    enter: { opacity: 1, transitionDuration: '2s' },
    leave: { opacity: 0, transitionDuration: '2s' },
  });

  const handleCloseModal = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);
  if (isOpen) {
    return (
      <>
        <Container />
        <ModalContent>
          {transitions.map(({ key, props }) => {
            return (
              <Content key={key} style={props}>
                <CloseButton type="button" onClick={handleCloseModal}>
                  <RiCloseCircleLine size={25} />
                </CloseButton>
                {children}
              </Content>
            );
          })}
        </ModalContent>
      </>
    );
  }
  return <> </>;
};

export default Modal;
