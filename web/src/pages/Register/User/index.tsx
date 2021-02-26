import React, { useCallback, useState } from 'react';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { HiUserRemove } from 'react-icons/hi';
import Button from '../../../components/Button';
import Container from '../../../components/Container/index';
import Table from '../../../components/Table';
import { useAlert } from '../../../hooks/alert';
import { ModalEditUser } from './ModalUpdateUser';
import { ModalCreateUser } from './ModalCreateUser';
import {
  Content,
  Title,
  ButtonGroupUser,
  EditButton,
  RemoveButton,
} from './styles';

interface IUserUpdate {
  id: string;
  name: string;
  group_user: string;
  profile_access: string;
  email: string;
}

const UserList: React.FC = () => {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [idUserCurrent, setIdUserCurrent] = useState('');
  const { addAlert } = useAlert();

  const handleUpdateUser = useCallback(
    (userData: Omit<IUserUpdate, 'id'>) => {
      // capturar o id na variável idUserUpdate e chamar API para atualizar
      const userUpdate = {
        ...userData,
        id: idUserCurrent,
      };
    },
    [idUserCurrent],
  );

  const handleCreateUser = useCallback((userData: Omit<IUserUpdate, 'id'>) => {
    // capturar o id na variável idUserUpdate e chamar API para atualizar
    const userCreate = userData;
  }, []);

  const togleEditModalOpen = useCallback(() => {
    setEditModalOpen(state => !state);
  }, []);

  const togleCreateModalOpen = useCallback(() => {
    setCreateModalOpen(state => !state);
  }, []);

  const handleEditUserModal = useCallback(
    (idUser: string) => {
      togleEditModalOpen();
      setIdUserCurrent(idUser);
    },
    [setIdUserCurrent, togleEditModalOpen],
  );

  const handleCreateUserModal = useCallback(() => {
    togleCreateModalOpen();
  }, [togleCreateModalOpen]);

  const deleteUser = useCallback(() => {
    // chamada da API deletando o usuário, capturar o o ID User da variável idUserCurrent
  }, []);

  const handleDeleteUser = useCallback(
    (idUser: string) => {
      setIdUserCurrent(idUser);
      addAlert({
        message:
          'Deseja realmente excluir o usuário? Todas as movimentações referentes a este usuário não estarão disponiveis na plataforma',
        titlePrimaryButton: 'Sim',
        titleSecondaryButton: 'Cancelar',
        primaryButton: deleteUser,
        secondaryButton: () => {
          return '';
        },
      });
    },
    [addAlert, setIdUserCurrent, deleteUser],
  );

  const handleFilterTable = useCallback((user_name: string) => {
    /// Chamada da api realizando filtro de usuário
  }, []);

  return (
    <>
      <Container>
        <Content>
          <Title>
            <strong> Usuários</strong>
            <p>Listagem de usuários</p>
          </Title>

          <ButtonGroupUser>
            <Button
              buttonType="success"
              type="button"
              onClick={handleCreateUserModal}
            >
              <AiOutlineUserAdd />
              Adicionar Usuário
            </Button>
          </ButtonGroupUser>

          <Table
            limitPerPage={10}
            totalItens={100}
            filterPlaceholder="Insira o nome do usuário para busca"
            handleFilterTable={handleFilterTable}
          >
            <thead>
              <tr>
                <th>Avatar</th>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Perfil</th>
                <th>Grupo</th>
                <th>Editar</th>
                <th>Excluir</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img
                    src="https://avatars2.githubusercontent.com/u/48379411?s=460&u=94dabeb8a22a6181fc4686a5bee1e608fa477f86&v=4"
                    alt="Michele de Freitas"
                  />
                </td>
                <td className="text-left">Jhonh Doe</td>
                <td className="text-left">jhondoe@example.com.br</td>
                <td className="text-left">Administrador</td>
                <td className="text-left">Belo Horizonte</td>
                <td className="text-center">
                  <EditButton
                    type="button"
                    onClick={() => {
                      handleEditUserModal('787');
                    }}
                  >
                    <FiEdit size={25} />
                  </EditButton>
                </td>
                <td className="text-center">
                  <RemoveButton
                    type="button"
                    onClick={() => {
                      handleDeleteUser('789');
                    }}
                  >
                    <HiUserRemove size={27} />
                  </RemoveButton>
                </td>
              </tr>
            </tbody>
          </Table>
        </Content>
      </Container>

      <ModalEditUser
        setIsOpen={togleEditModalOpen}
        isOpen={editModalOpen}
        handleUpdateUser={handleUpdateUser}
      />
      <ModalCreateUser
        setIsOpen={togleCreateModalOpen}
        isOpen={createModalOpen}
        handleUpdateUser={handleCreateUser}
      />
    </>
  );
};

export default UserList;
