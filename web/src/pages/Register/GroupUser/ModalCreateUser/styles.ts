import { shade } from 'polished';
import styled from 'styled-components';

export const Content = styled.div`
  padding: 1rem;
  position: relative;
  margin-top: 1rem;

  h1 {
    margin-bottom: 1rem;
  }
`;

export const ProfileAvatar = styled.div`
  margin: 0 0 2rem 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    display: none;
  }
  img {
    height: 186px;
    width: 186px;
    border-radius: 50%;
  }
  > label {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    background: #2691f0;

    height: 50px;
    width: 50px;

    margin-left: 100px;
    top: 140px;

    border-radius: 50%;
    :hover {
      background: ${shade('0.2', '#2691f0')};
    }
  }
`;
