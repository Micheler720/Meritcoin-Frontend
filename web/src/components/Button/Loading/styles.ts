import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const ContentLoading = styled.span`
  margin-right: 0.5rem;
  position: relative;
  width: 15px;
  height: 15px;
  border: 4px solid #888888;
  border-radius: 50px;
  animation: loader 1.5s infinite linear;

  @keyframes loader {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
      border-right: 4px solid #f2f2f2;
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes loader_after {
    0% {
      border-top: 10px solid #9b59b6;
      border-bottom: 10px solid #9b59b6;
    }
    50% {
      border-top: 10px solid #3498db;
      border-bottom: 10px solid #3498db;
    }
    100% {
      border-top: 10px solid #9b59b6;
      border-bottom: 10px solid #9b59b6;
    }
  }
`;
