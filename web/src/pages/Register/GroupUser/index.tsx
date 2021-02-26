import React, { useCallback, useState } from 'react';
import { AiOutlineUserAdd, AiOutlineUsergroupAdd } from 'react-icons/ai';
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

const GroupUser: React.FC = () => {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [idGroupUserCurrent, setIdGroupUserCurrent] = useState('');
  const { addAlert } = useAlert();

  const handleUpdateGroupUser = useCallback(
    (userData: Omit<IUserUpdate, 'id'>) => {
      // capturar o id na variável idUserUpdate e chamar API para atualizar
      const userUpdate = {
        ...userData,
        id: idGroupUserCurrent,
      };
    },
    [idGroupUserCurrent],
  );

  const handleCreateGroupUser = useCallback(
    (userData: Omit<IUserUpdate, 'id'>) => {
      // capturar o id na variável idUserUpdate e chamar API para atualizar
      const userCreate = userData;
    },
    [],
  );

  const togleEditModalOpen = useCallback(() => {
    setEditModalOpen(state => !state);
  }, []);

  const togleCreateModalOpen = useCallback(() => {
    setCreateModalOpen(state => !state);
  }, []);

  const handleEditGroupUserModal = useCallback(
    (idUser: string) => {
      togleEditModalOpen();
      setIdGroupUserCurrent(idUser);
    },
    [setIdGroupUserCurrent, togleEditModalOpen],
  );

  const handleCreateGroupUserModal = useCallback(() => {
    togleCreateModalOpen();
  }, [togleCreateModalOpen]);

  const deleteGroupUser = useCallback(() => {
    // chamada da API deletando o usuário, capturar o o ID User da variável idUserCurrent
  }, []);

  const handleDeleteGroupUser = useCallback(
    (idUser: string) => {
      setIdGroupUserCurrent(idUser);
      addAlert({
        message:
          'Deseja realmente excluir o grupo de usuário usuário? Todos os usuários vinculados a este grupo ficarão sem vinculos.',
        titlePrimaryButton: 'Sim',
        titleSecondaryButton: 'Cancelar',
        primaryButton: deleteGroupUser,
        secondaryButton: () => {
          return '';
        },
      });
    },
    [addAlert, setIdGroupUserCurrent, deleteGroupUser],
  );

  const handleFilterTable = useCallback((user_name: string) => {
    /// Chamada da api realizando filtro de usuário
  }, []);

  return (
    <>
      <Container>
        <Content>
          <Title>
            <strong> Grupos Usuários</strong>
            <p>Listagem de Grupos Usuários</p>
          </Title>

          <ButtonGroupUser>
            <Button
              buttonType="success"
              type="button"
              onClick={handleCreateGroupUserModal}
            >
              <AiOutlineUsergroupAdd />
              Adicionar Grupo
            </Button>
          </ButtonGroupUser>

          <Table
            limitPerPage={10}
            totalItens={100}
            filterPlaceholder="Insira o nome do grupo para busca"
            handleFilterTable={handleFilterTable}
          >
            <thead>
              <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Ativo</th>
                <th>Editar</th>
                <th>Excluir</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-left">123</td>
                <td className="text-left">Belo Horizonte</td>
                <td className="text-left">Sim</td>
                <td className="text-center">
                  <EditButton
                    type="button"
                    onClick={() => {
                      handleEditGroupUserModal('787');
                    }}
                  >
                    <FiEdit size={25} />
                  </EditButton>
                </td>
                <td className="text-center">
                  <RemoveButton
                    type="button"
                    onClick={() => {
                      handleDeleteGroupUser('789');
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
        handleUpdateUser={handleUpdateGroupUser}
      />
      <ModalCreateUser
        setIsOpen={togleCreateModalOpen}
        isOpen={createModalOpen}
        handleUpdateUser={handleCreateGroupUser}
      />
    </>
  );
};

export default GroupUser;
