import styled from 'styled-components';

export const BackgroundTransparent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999999;

  width: 100vw;
  height: auto;

  position: absolute;

  top: 0;
  bottom: 0;

  background-color: #ccc;
  opacity: 0.7;
`;

export const Container = styled.div`
  position: absolute;
  z-index: 88888888;

  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Content = styled.div`
  margin: auto;
  padding: 0.8rem;
  height: 15rem;
  width: 25rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #f2f2f2;
  box-shadow: inset 0 0 1em #e8e8eb;
  border-radius: 1rem;

  svg {
    margin-top: 1rem;
  }

  span {
    margin-top: 2rem;
    font-size: 20px;

    color: #000;
  }

  footer {
    display: flex;
    padding: 0.2rem;
    width: 100%;

    display: flex;
    justify-content: flex-end;

    margin-top: auto;
    button {
      width: 5rem;
      height: 2rem;
      & + button {
        margin-left: 0.5rem;
      }
    }
  }
`;
