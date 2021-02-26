import React, { useCallback } from 'react';
import { FaCoins } from 'react-icons/fa';
import Button from '../../components/Button';
import Container from '../../components/Container';
import { useAlert } from '../../hooks/alert';
import { useToast } from '../../hooks/toast';
import { Content, Title, StoreProducts, Product, Price } from './styles';

const Store: React.FC = () => {
  const { addAlert, removeAlert } = useAlert();
  const { addToast } = useToast();

  const submitProductRescue = useCallback(() => {
    addAlert({
      message: 'Produto resgatado com sucesso',
    });
  }, [addAlert]);

  const cancelRescueProduct = useCallback(() => {
    removeAlert();
    addToast({
      title: 'Cancelamento de resgaste de produto :-(',
    });
  }, [addToast, removeAlert]);

  const handleRescue = useCallback(() => {
    addAlert({
      message: 'Deseja resgatar o produto?',
      primaryButton: submitProductRescue,
      titlePrimaryButton: 'Ok',
      titleSecondaryButton: 'Cancelar',
      secondaryButton: cancelRescueProduct,
    });
  }, [addAlert, submitProductRescue, cancelRescueProduct]);

  return (
    <Container>
      <Content>
        <Title>
          <strong>Ola, Fulano de Tal.</strong>
          <p>Você possui 500 coins para resgatar produtos.</p>
        </Title>
        <StoreProducts>
          <Product>
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/513x%2BFUY1kL._AC_SL1000_.jpg"
              alt="Name Product"
            />
            <span> Descrição Produto</span>
            <Price>
              <FaCoins size={30} color="#F0D126" />
              <strong> 150 </strong>
            </Price>
            <Button type="button" buttonType="success">
              Resgatar
            </Button>
          </Product>
          <Product>
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/513x%2BFUY1kL._AC_SL1000_.jpg"
              alt="Name Product"
            />
            <span> Descrição Produto</span>
            <Price>
              <FaCoins size={30} color="#F0D126" />
              <strong> 150 </strong>
            </Price>
            <Button type="button" buttonType="success">
              Resgatar
            </Button>
          </Product>
          <Product>
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/513x%2BFUY1kL._AC_SL1000_.jpg"
              alt="Name Product"
            />
            <span> Descrição Produto</span>
            <Price>
              <FaCoins size={30} color="#F0D126" />
              <strong> 150 </strong>
            </Price>
            <Button type="button" buttonType="success">
              Resgatar
            </Button>
          </Product>
          <Product>
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/513x%2BFUY1kL._AC_SL1000_.jpg"
              alt="Name Product"
            />
            <span> Descrição Produto</span>
            <Price>
              <FaCoins size={30} color="#F0D126" />
              <strong> 150 </strong>
            </Price>
            <Button
              type="button"
              onClick={() => {
                handleRescue();
              }}
              buttonType="success"
            >
              Resgatar
            </Button>
          </Product>
        </StoreProducts>
      </Content>
    </Container>
  );
};

export default Store;
