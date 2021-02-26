import React, { createContext, useContext, useState } from 'react';
import { useSpring } from 'react-spring';
import Menu from '../components/Menu';

interface IMenuContextCreate {
  isVisibleMenu: boolean;
  setIsVisibleMenu(isVisible: boolean): void;
}

const MenuContext = createContext<IMenuContextCreate>({} as IMenuContextCreate);

export const MenuVisible: React.FC = ({ children }) => {
  const [isVisibleMenu, setIsVisibleMenu] = useState(false);

  const menuTransictions = useSpring({
    /* to: {
      opacity: isVisibleMenu ? 1 : 0,
      display: isVisibleMenu ? 'flex' : 'none',
      transition: '0.2s',
    },
    from: {
      opacity: isVisibleMenu ? 0 : 1,
      display: isVisibleMenu ? 'none' : 'flex',
      transition: '2s',
    }, */
  });

  return (
    <MenuContext.Provider value={{ isVisibleMenu, setIsVisibleMenu }}>
      {isVisibleMenu && (
        <Menu style={menuTransictions} isVisibleMenu={isVisibleMenu} />
      )}
      {children}
    </MenuContext.Provider>
  );
};

export function useMenu(): IMenuContextCreate {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenu must be used within an AuthProvider.');
  }
  return context;
}
