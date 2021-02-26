import styled, { keyframes } from 'styled-components';
import login from '../../assets/login.svg';

export const Container = styled.div`
  display: flex;

  width: 100vw;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  min-width: 30rem;
  h1 {
    font-weight: 500;
    color: #223970;
  }

  form {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;

    min-width: 20rem;

    margin-top: 2rem;
  }
  a {
    margin-top: 1rem;
    text-decoration: none;

    :hover {
      color: #223970;
    }
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`;

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

export const PageAnimation = styled.div`
  animation: ${appearFromLeft} 1s;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Background = styled.div`
  flex: 1;
  background: url(${login}) no-repeat center;
  background-size: cover;
`;
