import { shade } from 'polished';
import styled from 'styled-components';

export const Content = styled.div`
  margin: 2rem 4rem;

  width: 100%;

  display: flex;
  flex-wrap: wrap;

  a + a {
    margin-left: 0.5rem;
  }

  a {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    text-decoration: none;
    text-align: center;
    color: #3172b7;
    font-size: 20px;
    line-height: 22px;

    height: 6rem;
    width: 9rem;

    background-color: transparent;

    strong {
      margin-top: 0.5rem;
    }

    &:hover {
      color: ${shade(0.2, '#3172b7')};
    }
  }

  @media (max-width: 800px) {
    justify-content: center;
    display: block;
    margin: 6rem auto;
    a + a {
      margin: 1rem 0 0 0;
    }
  }
`;
