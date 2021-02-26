import styled from 'styled-components';

export const TableFilter = styled.div`
  display: flex;
  margin: 0.9rem 0;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0.2rem solid #fff;
    border-radius: 0.2rem;
    height: 2rem;
    flex: 1;

    background: #fff;
    svg {
      margin: 0 0 0 0.15rem;
    }
    select {
      height: 2rem;
    }

    input {
      border: none;
      padding: 0 0.4rem;
      height: 1.5rem;
      width: 100%;
      color: #969cb3;
      background: transparent;
    }
    &:focus-within {
      border: 0.2rem solid #2691f0;
      border-radius: 0.2rem;
      svg {
        color: #2691f0;
      }
    }
  }
`;

export const LimitePerPage = styled.select`
  margin-bottom: 0.5rem;
  margin-right: 0.5rem;
  color: #969cb3;
  background-color: #fff;
  border: 0.2rem solid #fff;
  height: 2.4rem;

  &:focus {
    border: 0.2rem solid #2691f0;
    border-radius: 0.2rem;
    svg {
      color: #2691f0;
    }
  }
`;

export const TableStyle = styled.table`
  width: 100%;
  border-collapse: collapse;
  thead {
    background: #2691f0;
  }
  th {
    color: #fff;
    font-weight: normal;
    padding: 0.8rem 1.5rem;
    text-align: center;
    font-size: 1.2rem;
    line-height: 1rem;
    font-family: Roboto;

    text-align: center;
  }
  td {
    padding: 0.6rem 2rem;
    border: 0;
    background: #fff;
    font-size: 1rem;
    font-weight: normal;
    color: #969cb3;
  }
  @media (max-width: 800px) {
    td {
      padding: 0.2rem 1.5rem;
    }

    th {
      padding: 0.4rem 1.5rem;
    }
  }

  .text-left {
    text-align: left;
  }
  .text-right {
    text-align: right;
  }
  .text-center {
    text-align: center;
  }
`;

export const Pagination = styled.div`
  margin: 1rem 0;

  button {
    background: transparent;
    border: 0.05rem solid #2691f0;
    height: 2rem;
    width: 2rem;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-right: 0.1rem;
    color: #969cb3;

    svg {
      color: #969cb3;
    }
    &:hover {
      background-color: #ccc;
    }
  }
  .pageCurrent {
    background: #2691f0;
    color: #fff;
  }
  div {
    margin-top: 0.5rem;
    display: flex;
  }
`;
