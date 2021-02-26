import React, { useState } from 'react';
import { IconBaseProps } from 'react-icons';
import { useTransition } from 'react-spring';
import { Link } from 'react-router-dom';
import { Container, Content, MenuItem, ContainerFloatMenu } from './styles';

interface FloatMenuItemProps {
  icon: React.ComponentType<IconBaseProps>;
  name: string;
  url: string;
}

interface FloatMenuProps {
  icon?: React.ComponentType<IconBaseProps>;
  name: string;
}

const FloatMenu: React.FC<FloatMenuProps> = ({
  name,
  icon: Icon,
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const animationTransiton = useTransition(children, null, {
    from: { top: '-120% ', opacity: 0 },
    enter: { top: '0% ', opacity: 1 },
    leave: { top: '-120% ', opacity: 0 },
  });
  return (
    <Container>
      <button type="button" onClick={() => setIsVisible(state => !state)}>
        {Icon && <Icon size={35} />}
        <strong>{name}</strong>
      </button>
      <ContainerFloatMenu>
        {isVisible && (
          <Content style={animationTransiton[0].props}>{children}</Content>
        )}
      </ContainerFloatMenu>
    </Container>
  );
};

export const FloatMenuItem: React.FC<FloatMenuItemProps> = ({
  icon: Icon,
  name,
  url,
}) => {
  return (
    <MenuItem>
      <Link to={url}>
        <Icon size={35} />
        <label>{name}</label>
      </Link>
    </MenuItem>
  );
};
export default FloatMenu;
