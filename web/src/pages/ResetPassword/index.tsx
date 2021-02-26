import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import React, { useCallback, useRef, useState } from 'react';
import * as Yup from 'yup';
import { FiLock } from 'react-icons/fi';
import { useHistory, useParams } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container, Content, Background } from './styles';
import api from '../../services/api';
import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../util/getValidationErrors';

interface RouteParams {
  token: string;
}

interface ResetPasswordFormData {
  password: string;
  password_confirmation: string;
}

const ResetPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { token } = useParams<RouteParams>();
  const { addToast } = useToast();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = useCallback(
    async (data: ResetPasswordFormData) => {
      formRef.current?.setErrors({});
      setIsLoading(true);

      try {
        const schema = Yup.object().shape({
          password: Yup.string().required('Obrigátorio informar a senha.'),
          password_confirmation: Yup.string().oneOf(
            [Yup.ref('password')],
            'Senhas não coincideem',
          ),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const { password, password_confirmation } = data;
        await api.post('password/resetPassword', {
          token,
          password,
          password_confirmation,
        });

        addToast({
          title: 'Senha alterada com sucesso!',
          type: 'success',
        });
        history.push('/');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }
        addToast({
          title: 'Houve um erro ao resetar sua senha.',
          type: 'error',
        });
      } finally {
        setIsLoading(false);
      }
    },
    [addToast, token, history],
  );
  return (
    <Container>
      <Content>
        <h1>Informe a nova Senha</h1>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            type="password"
            name="password"
            placeholder="Senha"
            icon={FiLock}
          />
          <Input
            type="password"
            name="password_confirmation"
            placeholder="Confirmar Senha"
            icon={FiLock}
          />
          <Button buttonType="success" type="submit" loading={isLoading}>
            Resetar Senha
          </Button>
        </Form>
      </Content>
      <Background />
    </Container>
  );
};

export default ResetPassword;
