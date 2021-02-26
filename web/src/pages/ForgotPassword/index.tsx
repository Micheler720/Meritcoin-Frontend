import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import React, { useCallback, useRef, useState } from 'react';
import * as Yup from 'yup';
import { FiMail } from 'react-icons/fi';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container, Background, Content, AnimationContainer } from './styles';
import getValidationErrors from '../../util/getValidationErrors';
import { useToast } from '../../hooks/toast';
import api from '../../services/api';

interface ForgotPasswordFormData {
  email: string;
}

const ForgotPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = useCallback(
    async (data: ForgotPasswordFormData) => {
      formRef.current?.setErrors({});
      setIsLoading(true);
      try {
        const schema = Yup.object().shape({
          email: Yup.string()
            .email('Informe um e-mail válido.')
            .required('Obrigatório preencher o e-mail'),
        });
        await schema.validate(data, {
          abortEarly: false,
        });
        const { email } = data;
        await api.post('/password/forgot', {
          email,
        });
        addToast({
          type: 'success',
          title: 'E-mail enviado!',
          description: 'Verifique seu e-mail para resetar sua senha',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }
        addToast({
          type: 'error',
          title: 'Houve um erro ao enviar email, verifique o email.',
        });
      } finally {
        setIsLoading(false);
      }
    },
    [addToast],
  );
  return (
    <Container>
      <Content>
        <AnimationContainer>
          <h1>Digite seu e-mail</h1>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input icon={FiMail} name="email" placeholder="E-mail" />
            <Button
              type="submit"
              buttonType="success"
              loading={isLoading}
              eventLoading="Enviando..."
            >
              Enviar
            </Button>
          </Form>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default ForgotPassword;
