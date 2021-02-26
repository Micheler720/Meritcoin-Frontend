import styled from 'styled-components';

export const Content = styled.main`
  width: 100%;
  max-width: 70rem;
`;

export const Title = styled.div`
  background-color: #fff;

  height: 4rem;

  padding: 1rem;
  margin: 2rem 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  strong {
    font-family: Roboto;
    font-weight: 800;
    font-size: 1.8rem;
    line-height: 2rem;

    color: #2691f0;
  }
  p {
    font-family: Roboto;
    font-weight: 800;
    font-size: 1.1rem;
    line-height: 1.4rem;

    color: #888888;
  }
`;
export const StoreProducts = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  margin: 1rem;
  @media (max-width: 800px) {
    justify-content: space-around;
  }
`;
export const Product = styled.div`
  width: 13rem;

  padding: 1rem;
  background-color: #fff;

  margin-top: 1rem;

  div + div {
    margin: 0.6rem;
  }
  img {
    width: 100%;
    height: 15rem;
  }

  span {
    margin: 1rem 0;
    font-size: 1rem;
    font-size: 1.1rem;
    line-height: 1.4rem;

    color: #888888;
  }
  :hover {
    transform: translateY(0.5rem);
  }
`;

export const Price = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;

  margin-bottom: 1rem;

  strong {
    margin-left: 1rem;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 1.8rem;
    line-height: 2rem;

    color: #000000;
  }
`;
