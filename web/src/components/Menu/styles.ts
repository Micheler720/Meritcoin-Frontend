import { shade } from 'polished';
import styled, { keyframes } from 'styled-components';
import { animated } from 'react-spring';

const appearFromLeft = keyframes`
  from{
    opacity: 0;
    transform: translateX(-50px);
  }
  to{
    opacity: 1;
    transform: translateX(0);
  }
`;

export const MenuBar = styled(animated.aside)`
  position: fixed;
  width: 12rem;
  background-color: #2691f0;
  height: 100vh;
  z-index: 5;

  animation: ${appearFromLeft} 1s;

  nav ul {
    margin: 6rem 0 0 2rem;
  }

  nav ul li {
    height: 5rem;
    width: 6rem;
    border-radius: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;

    transition: 0.2s;
    :hover {
      background: ${shade('0.1', '#2691f0')};
    }

    a {
      cursor: pointer !important;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;

      text-decoration: none;

      svg {
        transition: 0.2s;
      }
      label {
        margin-top: 0.4rem;

        font-size: 0.9rem;
        color: #fff;
      }
      &:hover {
        svg {
          color: ${shade('0.2', '#f2f2f2')};
          height: 2.6rem;
          width: 2.6rem;
        }
        label {
          font-size: 1.1rem;
        }
      }
    }
  }
  .ative {
    background: #eeeeee;
    :hover {
      background: #eeeeee;
    }
    a {
      svg {
        color: #2691f0 !important;
        &:hover {
          color: ${shade('0.2', '#2691f0')};
        }
      }
      label {
        color: #2691f0;
        font-weight: 500;
      }
    }
  }
`;
