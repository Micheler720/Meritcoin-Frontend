import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.header`
  height: 4rem;
  display: flex;
  justify-content: space-between;
  width: 100%;

  position: fixed;
  background-color: #ffffff;
  box-shadow: inset 0 0 1em #fff, 0 0 1em #e8e8eb;

  z-index: 99999999999;

  box-shadow: 0px 4px 13px rgba(130, 196, 255, 0.45);

  svg:hover {
    color: ${shade(0.2, '#2691F0')};
  }

  > button {
    background: none;
    border: none;
    margin-left: 1rem;

    transition: all 0.2s;

    &:hover {
      svg {
        color: ${shade(0.2, '#2691F0')};
      }
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  justify-content: space-between;

  margin-right: 1rem;

  a {
    display: flex;
    align-items: center;

    margin-right: 1rem;

    text-decoration: none;
    color: #888888;

    height: 100%;

    strong {
      max-width: 5rem;
    }
    img {
      height: 3rem;
      width: 3rem;
      border-radius: 50%;
      margin-right: 0.5rem;
    }
  }
  a,
  button {
    border: none;
    background: transparent;
    :hover {
      color: ${shade(0.2, '#888888')};
    }
  }
`;
