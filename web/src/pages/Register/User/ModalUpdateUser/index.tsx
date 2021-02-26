import { FormHandles } from '@unform/core';
import React, { useCallback, useMemo, useRef } from 'react';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { FiCamera, FiMail, FiUser } from 'react-icons/fi';
import { ImProfile } from 'react-icons/im';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FaBirthdayCake } from 'react-icons/fa';
import Button from '../../../../components/Button';
import Input from '../../../../components/Input';
import Modal from '../../../../components/Modal';
import Select from '../../../../components/Select';
import { ProfileAvatar, Content } from './styles';
import getValidationErrors from '../../../../util/getValidationErrors';
import { useToast } from '../../../../hooks/toast';
import FormGroup from '../../../../components/FormGroup';

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleUpdateUser: (data: IFormData) => void;
}

interface IFormData {
  name: string;
  email: string;
  group_user: string;
  profile_access: string;
  inactive_user: boolean;
  profile_sector: string;
}

export const ModalEditUser: React.FC<IModalProps> = ({
  setIsOpen,
  isOpen,
  children,
  handleUpdateUser,
}) => {
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();

  const groupUsers = useMemo(() => {
    return [
      {
        value: '1',
        description: 'Belo Horizonte',
      },
      {
        value: '2',
        description: 'Distrito Federal',
      },
      {
        value: '3',
        description: 'Brasilia',
      },
    ];
  }, []);

  const profilesUser = useMemo(() => {
    return [
      {
        value: '1',
        description: 'Administrador',
      },
      {
        value: '2',
        description: 'Usuário',
      },
    ];
  }, []);

  const handleSubmit = useCallback(
    async (data: IFormData) => {
      formRef.current?.setErrors({});
      try {
        const schema = Yup.object().shape({
          name: Yup.string().required(
            'Obrigatório informar um nome para o usuário',
          ),
          email: Yup.string().email('Digite um e-mail válido'),
          group_user: Yup.string().required(
            'Selecione um grupo para o usuário',
          ),
          profile_access: Yup.string().required(
            'Informe um perfil de acesso para o usuário',
          ),
        });
        await schema.validate(data);

        await handleUpdateUser(data);

        addToast({
          type: 'success',
          title: 'Usuário atualizado com sucesso',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }
        addToast({
          type: 'error',
          title: 'Houve um erro na atualização do usuário',
        });
      }
    },
    [handleUpdateUser, addToast],
  );

  return (
    <Modal setIsOpen={setIsOpen} isOpen={isOpen}>
      {children}
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <ProfileAvatar>
            <img
              src="https://avatars2.githubusercontent.com/u/48379411?s=460&u=94dabeb8a22a6181fc4686a5bee1e608fa477f86&v=4"
              alt="Usuário"
            />
            <label htmlFor="avatar">
              <input type="file" name="avatar" id="avatar" />
              <FiCamera size={25} color="#ffffff" />
            </label>
          </ProfileAvatar>
          <Input placeholder="Nome" name="name" icon={FiUser} />
          <Input type="email" placeholder="E-mail" name="email" icon={FiMail} />

          <FormGroup>
            <Input
              type="date"
              placeholder="Data Nascimento"
              name="day_birth"
              icon={FaBirthdayCake}
            />
            <Select
              name="group_user"
              data={groupUsers}
              icon={AiOutlineUsergroupAdd}
            />
          </FormGroup>

          <FormGroup>
            <Select
              name="profile_access"
              data={profilesUser}
              icon={ImProfile}
            />
            <Select
              name="profile_sector"
              data={profilesUser}
              icon={ImProfile}
            />
          </FormGroup>
          <Input
            placeholder="Inativo"
            type="checkbox"
            name="inactive_user"
            id="inactive_user"
          />

          <Button type="submit" buttonType="success">
            Salvar Alterações
          </Button>
        </Form>
      </Content>
    </Modal>
  );
};
