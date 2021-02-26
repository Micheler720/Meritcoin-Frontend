import { shade } from 'polished';
import styled from 'styled-components';

export const Content = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 70rem;
  width: 90%;
  flex-direction: column;

  margin: 1rem;

  form {
    width: 100%;
    display: flex;

    div + div,
    button {
      margin: 0 0 0 1rem;
    }

    @media (max-width: 800px) {
      flex-direction: column;

      div + div,
      button {
        margin: 1rem 0 0 0;
      }
    }
  }

  table {
    border-spacing: 0 8px;
    width: 100%;
    thead {
      background: linear-gradient(64.42deg, #35cfff 21.97%, #2691f0 99.92%);
    }
    th {
      color: #fff;
      font-weight: normal;
      padding: 0.8rem 2rem;
      text-align: left;
      font-size: 1.3rem;
      line-height: 1rem;
      font-family: Roboto;
    }
    td {
      padding: 0.6rem 2rem;
      border: 0;
      background: #fff;
      font-size: 1rem;
      font-weight: normal;
      color: #969cb3;
    }
    td:first-child,
    th:first-child {
      border-radius: 0.5rem 0 0 0.5rem;
    }

    td:last-child,
    th:last-child {
      border-radius: 0 0.5rem 0.5rem 0;
    }
    @media (max-width: 800px) {
      td {
        padding: 0.2rem 1.5rem;
      }

      th {
        padding: 0.4rem 1.5rem;
      }
    }
  }
  @media (max-width: 800px) {
    padding: 0 8rem;
  }
`;

export const ProfileAvatar = styled.div`
  margin: 2rem 0;
  position: relative;
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

    right: 0;
    top: 140px;

    border-radius: 50%;
    :hover {
      background: ${shade('0.2', '#2691f0')};
    }
  }
`;
export const Subtitle = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.4rem 0;

  background: #ffffff;

  box-shadow: 0px 4px 13px rgba(130, 196, 255, 0.45);
  border-radius: 0.8rem;

  width: 100%;

  h2 {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;

    color: #2691f0;
  }
`;
