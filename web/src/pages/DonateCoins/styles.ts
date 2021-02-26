import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  width: 100%;
  max-width: 70rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  form {
    display: grid;
    background-color: #fff;
    margin: 1rem;
    padding: 1rem;
    .taxpayer {
      grid-area: taxpayer;
    }
    .coins {
      grid-area: coins;
      margin: 0 0 0 1rem;
      width: calc(100% - 1rem);
    }

    .comment {
      grid-area: comment;
    }
    .hashtag {
      grid-area: hashtag;
    }
    .button {
      grid-area: button;
    }

    grid-template-columns: 75% 25%;
    grid-template-areas:
      'taxpayer coins'
      'comment comment'
      'hashtag hashtag'
      'button button';
    @media (max-width: 800px) {
      display: flex;
      flex-direction: column;
      .coins {
        margin: 0.5rem 0 0;
        width: 100%;
      }
    }
  }
`;

export const Title = styled.div`
  background-color: #fff;

  height: 4rem;

  padding: 1rem;
  margin: 2rem 1rem 1rem;

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
