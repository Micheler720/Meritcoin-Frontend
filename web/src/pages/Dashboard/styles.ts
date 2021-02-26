import { shade } from 'polished';
import styled from 'styled-components';

export const Content = styled.main`
  padding: 1rem;
`;

export const Title = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;

  color: #2691f0;

  margin-top: 1rem;
  margin: auto;
  text-align: left;

  @media (max-width: 800px) {
    text-align: center;
  }
`;

export const Subtitle = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;

  padding: 0.8rem;

  background: #ffffff;

  box-shadow: 0px 4px 13px rgba(130, 196, 255, 0.45);
  border-radius: 0.8rem;

  max-width: 68.4rem;

  h2 {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;

    color: #2691f0;
  }
`;

export const Panel = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;

  margin-top: 1rem;
  max-width: 70rem;

  div {
    max-width: 20rem;
    width: 33%;
    height: 14rem;
    box-shadow: 0px 4px 13px rgba(130, 196, 255, 0.45);
    border-radius: 1.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    padding: 1rem;

    & + div {
      margin-left: 2rem;
    }

    span,
    strong {
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 1.5rem;
      line-height: 1.8rem;
      text-align: center;

      color: #ffffff;

      margin-top: 1rem;
    }

    &:hover {
      transform: translateY(0.3rem);
    }
  }

  .coins-donate {
    background: linear-gradient(244.42deg, #ff6948 0.08%, #ff9d00 78.14%);
  }
  .coins-month {
    background: linear-gradient(64.42deg, #5354ff 21.97%, #b75bff 99.92%);
  }
  .coins-balance {
    background: linear-gradient(64.42deg, #00df3e 0%, #42ccd5 99.92%);
    position: relative;
    span {
      margin: 0rem 0 0.5rem 0;
      line-height: 1.3rem;
      font-size: 1rem;
      position: absolute;
      top: 0.5rem;
      left: 1rem;
    }

    strong {
      font-size: 2rem;
    }
  }
  @media (max-width: 800px) {
    flex-wrap: wrap;
    div {
      width: 70%;
      margin: 1rem 0 0 0 !important;
    }
  }
`;

export const Notifications = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 2rem;

  max-width: 70rem;
`;
export const NotificationItem = styled.div`
  display: flex;
  align-items: center;

  padding: 0.8rem;

  background: #ffffff;

  box-shadow: 0px 4px 13px rgba(130, 196, 255, 0.45);
  border-radius: 25px;

  max-width: 100rem;

  img {
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 0.8rem;
    margin: 0 1rem 0 0;
  }

  span {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #2691f0;
  }

  a:hover {
    color: ${shade('0.2', '#2691F0')};
  }

  & + div {
    margin: 1rem 0 0 0;
  }
`;

export const Comments = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;

  max-width: 70rem;
  margin: 2rem 0 5rem 0;

  @media (max-width: 800px) {
    flex-wrap: wrap;
  }
`;
export const CommentItem = styled.div`
  position: relative;
  background: #ffffff;
  border-radius: 0.8rem;

  padding: 1.5rem;

  height: 8rem;
  width: 48%;
  max-width: 70rem;
  box-shadow: 0px 4px 13px rgba(130, 196, 255, 0.45);

  & + div {
    margin-left: 2rem;
  }

  > span {
    position: absolute;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 14px;

    right: 1rem;

    color: #888888;
  }

  @media (max-width: 800px) {
    width: 100%;
    & + div {
      margin: 1rem 0 0 0 !important;
      margin: 1rem 0 0 0 !important;
    }
  }
`;
export const ProfileComment = styled.section`
  display: flex;
  align-items: center;

  margin-top: 0rem;
  img {
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
    margin-right: 1rem;
  }
  strong {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    align-items: center;

    color: #000000;
  }
`;
export const CoinsReceived = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 1rem 0 0 0;

  > span {
    display: flex;
    align-items: center;
    svg {
      margin-right: 1rem;
    }
  }

  strong {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 23px;

    color: #000000;
  }
  p {
    max-width: 10rem;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 20px;

    color: #000000;
  }
`;
