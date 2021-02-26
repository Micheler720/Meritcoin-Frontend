import { shade } from 'polished';
import styled from 'styled-components';

export const Content = styled.div`
  margin-top: 2rem;
  width: 100%;
  max-width: 70rem;

  table {
    button {
      border: none;
      background: transparent;
    }
    img {
      height: 2.5rem;
      width: 2.5rem;
      border-radius: 0.5rem;
    }
  }
`;

export const ButtonGroupUser = styled.div`
  display: flex;
  justify-content: flex-start;

  margin-bottom: 1.5rem;

  button {
    max-width: 10rem;
    border-radius: 0;

    svg {
      color: #fff;
      margin-right: 0.3rem;
    }
  }
`;

export const RemoveButton = styled.button`
  svg {
    color: #c53030;
    :hover {
      color: ${shade('0.2', '#c53030')};
    }
  }
`;

export const EditButton = styled.button`
  svg {
    color: #009000;
    :hover {
      color: ${shade('0.2', '#009000')};
    }
  }
`;

export const Title = styled.div`
  background-color: #fff;

  height: 4rem;

  width: calc(100% - 1.6rem);
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-bottom: 1rem;
  padding: 0 0.8rem;

  strong {
    font-family: Roboto;
    font-weight: 800;
    font-size: 1.8rem;
    line-height: 2.3rem;

    text-align: left;

    color: #2691f0;
  }
`;
