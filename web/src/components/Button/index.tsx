import React, { ButtonHTMLAttributes } from 'react';
import Loading from './Loading';
import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  buttonType: 'success' | 'error' | 'secondary' | 'primary';
  eventLoading?: string;
};

const Button: React.FC<ButtonProps> = ({
  buttonType,
  children,
  eventLoading,
  loading,
  ...rest
}) => (
  <Container
    buttonType={buttonType}
    type="button"
    {...rest}
    isLoading={loading}
    disabled={loading}
  >
    {loading ? <Loading eventLoading={eventLoading} /> : children}
  </Container>
);

export default Button;
