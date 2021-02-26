import styled, { css, keyframes } from 'styled-components';

interface ContentProps {
  isVisibleMenu: boolean;
}

export const ContainerSection = styled.div`
  position: absolute;

  margin: 0 0 0 0;
`;

const appearFromLeft = keyframes`
  from{
      margin-left: 0;
      width: 100vw;
  }
  to{
      margin-left: 7.5rem;
      width: calc(100vw - 7.5rem);
  }
`;

export const Content = styled.div<ContentProps>`
  position: relative;
  width: 100vw;
  height: 91vh;
  margin: 4rem 0 0rem 0rem;

  background: #eeeeee;
  box-shadow: -5px 4px 20px rgba(38, 145, 240, 0.42);
  border-radius: 0;

  z-index: 88;

  overflow: auto;
  overflow-x: hidden;

  display: flex;
  align-items: center;
  flex-direction: column;
  ${props =>
    props.isVisibleMenu &&
    css`
      //animation: ${appearFromLeft} 1s;
      margin-left: 7.5rem;
      width: calc(100vw - 7.5rem);
      border-radius: 2.5rem 0 0rem 2.5rem;
    `}
`;
