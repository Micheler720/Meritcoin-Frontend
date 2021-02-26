import { FormHandles } from '@unform/core';
import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { BiGroup } from 'react-icons/bi';
import Button from '../../../../components/Button';
import Input from '../../../../components/Input';
import Modal from '../../../../components/Modal';
import { Content } from './styles';
import getValidationErrors from '../../../../util/getValidationErrors';
import { useToast } from '../../../../hooks/toast';

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
          <Input placeholder="Nome" name="name" icon={BiGroup} />

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
