import { animated } from 'react-spring';
import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999999999999999999;

  width: 100vw;
  height: 100vh;

  position: absolute;

  top: 0;
  bottom: 0;

  background-color: #ccc;
  opacity: 0.7;
`;

export const ModalContent = styled.div`
  width: 100vw;
  height: 100vh;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const appFromTop = keyframes`
  from{
    opacity: 0;
    transform: translateY(-200px);
  }
  to{
    opacity: 1;
    transform: translate(0);
  }
`;

export const Content = styled(animated.div)`
  background: #fff;
  border-radius: 0.8rem;
  z-index: 9999999999999;

  min-height: 5rem;
  width: 60rem;

  position: absolute;

  animation: ${appFromTop} 2s;
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;

  background: transparent;
  border: none;

  z-index: 8888888888888888888888;

  svg {
    color: #888888;
    &:hover {
      color: #2691f0;
    }
  }
`;
