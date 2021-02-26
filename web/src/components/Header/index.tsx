import React, { useCallback } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { BiPowerOff } from 'react-icons/bi';
import { Container, Profile } from './styles';
import { useAlert } from '../../hooks/alert';
import { useAuth } from '../../hooks/auth';
//  import { useAuth } from '../../hooks/auth';

interface HeaderProps {
  setIsVisibleMenu(): void;
}

const Header: React.FC<HeaderProps> = ({ setIsVisibleMenu }) => {
  // const { user } = useAuth();

  const { addAlert } = useAlert();

  const { signOut } = useAuth();

  const handleSignOutConfirm = useCallback(() => {
    signOut();
  }, [signOut]);

  const handleSignOut = useCallback(() => {
    signOut();
    addAlert({
      message: 'Deseja realmente sair do sistema?',
      type: 'confirmation',
    });
    signOut();
    handleSignOutConfirm();
  }, [addAlert, handleSignOutConfirm, signOut]);

  return (
    <>
      <Container>
        <button type="button" onClick={setIsVisibleMenu}>
          <GiHamburgerMenu size={25} color="#2691F0" />
        </button>
        <Profile>
          <Link to="/profile" title="Perfil">
            <img
              src="https://avatars2.githubusercontent.com/u/48379411?s=460&u=94dabeb8a22a6181fc4686a5bee1e608fa477f86&v=4"
              alt="Michele de Freitas"
            />
            <strong>Michele de Freitas</strong>
          </Link>
          <button type="button" title="Sair" onClick={handleSignOut}>
            <BiPowerOff color="#2691F0" size={32} />
          </button>
        </Profile>
      </Container>
    </>
  );
};
export default Header;
