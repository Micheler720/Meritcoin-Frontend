import React from 'react';
import { Container, ContentLoading } from './styles';

interface LoadingProps {
  eventLoading?: string;
}

const Loading: React.FC<LoadingProps> = ({ eventLoading }) => {
  return (
    <Container>
      <ContentLoading />
      {eventLoading || 'Carregando...'}
    </Container>
  );
};

export default Loading;
