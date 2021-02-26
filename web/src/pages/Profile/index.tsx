import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import React, { useCallback, useRef } from 'react';
import * as Yup from 'yup';
import { FiCamera, FiLock } from 'react-icons/fi';
import Container from '../../components/Container';
import Input from '../../components/Input';
import { Content, ProfileAvatar, Subtitle } from './styles';
import getValidationErrors from '../../util/getValidationErrors';
import { useToast } from '../../hooks/toast';
import Button from '../../components/Button';

interface FormData {
  password: string;
  old_password: string;
  password_confirmation: string;
}

const Profile: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: FormData) => {
      formRef.current?.setErrors({});

      try {
        const schema = Yup.object().shape({
          old_password: Yup.string(),
          // confirmar está validação
          password: Yup.string(),
          password_confirmation: Yup.string().oneOf(
            [Yup.ref('password')],
            'Senhas não coincidem',
          ),
        });

        await schema.validate(data);

        // chamada da api
        addToast({
          title: 'Usuário atualizado com sucesso',
          type: 'success',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }
        addToast({
          title: 'Erro ao atualizar Perfil',
          type: 'error',
          description: 'Houve um erro ao atualizar perfil do usuário',
        });
      }
    },
    [addToast],
  );
  return (
    <>
      <Container>
        <Content>
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
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input
              name="old_password"
              type="password"
              placeholder="Senha Atual"
              icon={FiLock}
            />
            <Input
              name="password"
              type="password"
              placeholder="Nova Senha"
              icon={FiLock}
            />
            <Input
              name="password_confirmation"
              type="password"
              placeholder="Confirmar Senha"
              icon={FiLock}
            />
            <Button type="submit" buttonType="success">
              Atualizar Perfil
            </Button>
          </Form>
          <Subtitle>
            <h2>Meus Pedidos</h2>
          </Subtitle>
          <table>
            <thead>
              <tr>
                <th>Produto</th>
                <th>Data Pedido</th>
                <th>Situação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Carregador Portátil</td>
                <td>06/01/2021</td>
                <td>Previsão de chegada: 28/01/2021</td>
              </tr>
              <tr>
                <td>Carregador Portátil</td>
                <td>06/01/2021</td>
                <td>Previsão de chegada: 28/01/2021</td>
              </tr>
            </tbody>
          </table>
        </Content>
      </Container>
    </>
  );
};

export default Profile;
