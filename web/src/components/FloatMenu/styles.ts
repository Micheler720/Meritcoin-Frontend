import { shade } from 'polished';
import { animated } from 'react-spring';
import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 1rem;
  button {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    text-decoration: none;
    text-align: center;
    color: #3172b7;
    font-size: 20px;
    line-height: 22px;

    border: none;

    height: 6rem;
    width: 8rem;

    background-color: transparent;

    strong {
      margin-top: 0.5rem;
    }

    &:hover {
      color: ${shade(0.2, '#3172b7')};
    }
  }
`;

export const ContainerFloatMenu = styled.div`
  max-width: 8rem;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
`;

/* const appearFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to{
    opacity: 1;
    transform: translateY(3px);
  }

`; */

export const Content = styled(animated.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  background-color: #fff;
  border-radius: 0.8rem;
  margin-top: 0.2rem;

  div + div {
    margin-top: 0.4rem;
  }
  div:first-child:hover {
    a {
      border-radius: 0.8rem 0.8rem 0 0;
    }
  }
  div:last-child:hover {
    a {
      border-radius: 0rem 0rem 0.8rem 0.8rem;
    }
  }
  &::before {
    border-style: solid;
    border-color: #fff transparent;
    border-width: 0 6px 6px 6px;
    content: '';
    position: absolute;
    top: -3px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const MenuItem = styled.div`
  width: 8rem;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 100%;

    cursor: pointer;

    label {
      margin-top: 0.5rem;
    }
    svg {
      color: #2691f0;
    }
    :hover {
      background-color: ${shade('0.2', '#f2f2f2')};
    }
  }
`;
