import styled, { keyframes } from 'styled-components';
import forgotPasswordImg from '../../assets/ForgotPassword.svg';

export const Container = styled.div`
  display: flex;

  height: 100vh;
  width: 100vw;
`;
export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
  margin: 0.5rem;

  width: 30rem;
  h1 {
    font-weight: 500;
    color: #223970;
  }

  form {
    margin-top: 1rem;
    width: 20rem;
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

export const AnimationContainer = styled.div`
  animation: ${appearFromLeft} 2s;
`;

export const Background = styled.div`
  flex: 1;

  background: url(${forgotPasswordImg}) no-repeat center;
  background-size: cover;
`;
