import { FormHandles } from '@unform/core';
import React, { useCallback, useRef, useState } from 'react';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { FiLock, FiMail } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import Input from '../../components/Input';
import { Container, Content, Background, PageAnimation } from './styles';
import getValidationErrors from '../../util/getValidationErrors';
import Button from '../../components/Button';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

interface SigInFormData {
  email: string;
  password: string;
}

const SigIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = useCallback(
    async (data: SigInFormData) => {
      setIsLoading(true);
      formRef.current?.setErrors({});
      try {
        const schema = Yup.object().shape({
          email: Yup.string()
            .email('Digite um email válido')
            .required('Obrigatório informar o e-mail'),
          password: Yup.string().required('Obrigatório informar a senha'),
        });
        await schema.validate(data, {
          abortEarly: false,
        });
        const { email, password } = data;
        await signIn({ email, password });
        addToast({
          title: 'Usuario autenticado com sucesso.',
          type: 'success',
        });

        history.push('/dashboard');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }

        addToast({
          type: 'error',
          description:
            'Ocorreu um erro ao fazer login, cheque as crendenciais.',
          title: 'Erro na autenticação',
        });
      } finally {
        setIsLoading(false);
      }
    },
    [signIn, history, addToast],
  );
  return (
    <Container>
      <Content>
        <PageAnimation>
          <h1>Faça seu Login</h1>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="email" placeholder="E-mail" icon={FiMail} />
            <Input
              placeholder="Senha"
              type="password"
              name="password"
              icon={FiLock}
            />
            <Button
              buttonType="success"
              type="submit"
              loading={isLoading}
              eventLoading="Entrando..."
            >
              Entrar
            </Button>
          </Form>
          <a href="password-forgot"> Esqueci minha senha</a>
        </PageAnimation>
      </Content>
      <Background />
    </Container>
  );
};

export default SigIn;
