import React, { useCallback } from 'react';
import { useMenu } from '../../hooks/menu';
import Header from '../Header';
import { ContainerSection, Content } from './styles';

const Container: React.FC = ({ children }) => {
  const { isVisibleMenu, setIsVisibleMenu } = useMenu();

  const handleSetMenuVisible = useCallback(() => {
    setIsVisibleMenu(!isVisibleMenu);
  }, [setIsVisibleMenu, isVisibleMenu]);

  return (
    <>
      <Header setIsVisibleMenu={handleSetMenuVisible} />
      <ContainerSection>
        <Content isVisibleMenu={isVisibleMenu}>{children}</Content>
      </ContainerSection>
    </>
  );
};

export default Container;
