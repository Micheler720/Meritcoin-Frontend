import React from 'react';
import { BsFillGearFill } from 'react-icons/bs';
import { FaCoins, FaUser } from 'react-icons/fa';
import { RiDashboardFill, RiStore3Fill } from 'react-icons/ri';
import { useLocation, Link } from 'react-router-dom';
import { MenuBar } from './styles';

interface MenuProps {
  style?: object;
  isVisibleMenu?: boolean;
}

const Menu: React.FC<MenuProps> = ({ style }) => {
  const { pathname } = useLocation();
  return (
    <MenuBar style={style}>
      <nav>
        <ul>
          <li className={pathname === '/dashboard' ? 'ative' : ''}>
            <Link to="dashboard">
              <RiDashboardFill size={34} color="#ffffff" />
              <label>Dashboard</label>
            </Link>
          </li>
          <li className={pathname === '/donate-coins' ? 'ative' : ''}>
            <Link to="/donate-coins">
              <FaCoins size={34} color="#ffffff" />
              <label>Doar</label>
            </Link>
          </li>
          <li className={pathname === '/profile' ? 'ative' : ''}>
            <Link to="profile">
              <FaUser size={34} color="#ffffff" />
              <label>Perfil</label>
            </Link>
          </li>
          <li className={pathname === '/store' ? 'ative' : ''}>
            <Link to="/store">
              <RiStore3Fill size={34} color="#ffffff" />
              <label>Loja</label>
            </Link>
          </li>
          <li
            className={
              pathname.indexOf('register') >= 0 || pathname.indexOf('list')
                ? 'ative'
                : ''
            }
          >
            <Link to="/register">
              <BsFillGearFill size={34} color="#ffffff" />
              <label>Cadastros</label>
            </Link>
          </li>
        </ul>
      </nav>
    </MenuBar>
  );
};

export default Menu;
