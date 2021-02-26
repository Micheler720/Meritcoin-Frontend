import React, { useCallback, useRef } from 'react';
import { FaCoins, FaIdBadge } from 'react-icons/fa';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import Container from '../../components/Container/index';
import { Content, Title } from './styles';
import Input from '../../components/Input';
import Select from '../../components/Select';
import getValidationErrors from '../../util/getValidationErrors';
import { useToast } from '../../hooks/toast';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';

interface FormData {
  taxpayer: string | number;
  coins: number;
  comment: string;
  hashtag: string;
}

const DonateCoins: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const taxpayer = [
    {
      description: 'Tiago Almeida',
      value: 1,
    },
    {
      description: 'MIchele',
      value: 2,
    },
    {
      description: 'Tiago Almeida',
      value: 4,
    },
    {
      description: 'Tiago Almeida',
      value: 3,
    },
  ];

  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: FormData) => {
      formRef.current?.setErrors({});
      try {
        const schema = Yup.object().shape({
          taxpayer: Yup.string().required(
            'Obrigatório Informar o contribuinte.',
          ),
          coins: Yup.number().required(
            'Obritório informar um valor de moedas para prosseguir com a doação',
          ),
          comment: Yup.string().required(
            'Obrigatório informar um comentário para prosseguir com a doação',
          ),
          hashtag: Yup.string().required(
            'Obrigatório informar um hashtag para prosseguir com lançamento',
          ),
        });

        await schema.validate(data);
        addToast({
          title: 'Doação realizada com sucesso.',
          type: 'success',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }
        addToast({
          title: 'Houve um erro na doação de coins.',
          type: 'error',
          description:
            'Verifique houve um erro ao tentar realizar a doação dos coins',
        });
      }
    },
    [addToast],
  );

  return (
    <Container>
      <Content>
        <Title>
          <strong>Ola, Fulano de Tal.</strong>
          <p>Você possui 500 coins para doar</p>
        </Title>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Select
            name="taxpayer"
            classNameContainer="taxpayer"
            data={taxpayer}
            icon={FaIdBadge}
          />
          <Input
            type="number"
            name="coins"
            placeholder="Coins"
            icon={FaCoins}
            classNameContainer="coins"
          />
          <TextArea
            name="comment"
            classNameContainer="comment"
            placeholder="Comentário"
          />
          <TextArea
            name="hashtag"
            classNameContainer="hashtag"
            placeholder="HashTag"
          />
          <Button type="submit" buttonType="success" className="button">
            Doar
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default DonateCoins;
