import React from 'react';
import { BiListCheck, BiTask } from 'react-icons/bi';
import { AiOutlineUserAdd, AiOutlineUsergroupAdd } from 'react-icons/ai';
import { MdBusiness, MdLocalGroceryStore } from 'react-icons/md';
import { FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Container from '../../components/Container';
import { Content } from './styles';
import FloatMenu, { FloatMenuItem } from '../../components/FloatMenu';

const Register: React.FC = () => {
  return (
    <Container>
      <Content>
        <Link to="/user-list">
          <FiUser size={45} />
          Usuários
        </Link>
        <Link to="/group-user-list">
          <AiOutlineUsergroupAdd size={45} />
          Grupo Usuários
        </Link>

        <Link to="/products-list">
          <MdLocalGroceryStore size={45} />
          Produtos
        </Link>
        <Link to="/task-list">
          <BiTask size={45} />
          Tarefas
        </Link>
        <Link to="/task-list">
          <MdBusiness size={45} />
          Setor
        </Link>
      </Content>
    </Container>
  );
};

export default Register;
