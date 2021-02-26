import styled from 'styled-components';
import { shade } from 'polished';

interface IButtonProps {
  buttonType: 'success' | 'error' | 'secondary' | 'primary';
  isLoading?: boolean;
}

const colorButton = {
  success: '#0085ff',
  error: '#F50213',
  secondary: '#797375',
  primary: '#0A02AD',
};

const colorTextButton = {
  success: '#ffffff',
  error: '#ffffff',
  secondary: '#000000',
  primary: '#ffffff',
};

export const Container = styled.button<IButtonProps>`
  background-color: ${props => colorButton[props.buttonType]};
  color: ${props => colorTextButton[props.buttonType]};

  border: none;

  margin-top: 0.5rem;

  height: 2.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0.6rem;

  transition: all 0.2s ease;

  &:hover {
    background-color: ${props => shade(0.2, colorButton[props.buttonType])};
  }
`;
