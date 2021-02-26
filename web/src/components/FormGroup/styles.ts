import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  div {
    margin-bottom: 0.5rem;
  }
  div + div {
    margin: 0 0 0.5rem 0.2rem;
  }
`;
