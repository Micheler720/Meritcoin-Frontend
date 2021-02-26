import styled from 'styled-components';
import backgroundImg from '../../assets/ForgotPassword.svg';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100%;

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

export const Background = styled.div`
  flex: 1;

  background: url(${backgroundImg}) no-repeat center;
  background-size: cover;
`;
