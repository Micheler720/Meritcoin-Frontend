import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFilled: boolean;
  isError: boolean;
}

export const Container = styled.div<ContainerProps>`
  height: 2.5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  box-sizing: border-box;
  border-radius: 0.6rem;
  border: 0.1rem solid #535353;
  padding: 0.4rem;

  & + div {
    margin-top: 0.5rem;
  }

  ${props =>
    props.isError &&
    css`
      border: 0.2rem solid #c53030;
      svg {
        color: #c53030;
      }
    `}
  &:focus-within {
    border-left: 0.3rem solid 000;
    border: 0.2rem solid #0085ff;
    svg,
    label {
      color: #0085ff;
    }
  }
  ${props =>
    props.isFilled &&
    css`
      color: #0085ff;
    `}
  & select {
    width: calc(100% - 1.2rem);
    border: 0;
    outline: 0;
    background: transparent;
    padding-left: 0.3rem;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 1rem;
  svg {
    margin: 0;
  }
  span {
    background: #c53030 !important;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
