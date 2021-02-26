import React from 'react';
import { FaCoins, FaMoneyBillWave, FaSmile } from 'react-icons/fa';
import Container from '../../components/Container';
import {
  Content,
  Title,
  Panel,
  Notifications,
  NotificationItem,
  Comments,
  CommentItem,
  ProfileComment,
  CoinsReceived,
  Subtitle,
} from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Container>
        <Content>
          <Title>Dashboard</Title>
          <Panel>
            <div className="coins-donate">
              <FaMoneyBillWave size={85} color="#ffffff" />
              <span>Você possui 500 coins para doar!!!</span>
            </div>
            <div className="coins-month">
              <FaSmile size={85} color="#ffffff" />
              <span>Você possui 500 coins para doar!!!</span>
            </div>
            <div className="coins-balance">
              <span>saldo disponivel:</span>
              <FaCoins size={85} color="#ffffff" />
              <strong>500 coins</strong>
            </div>
          </Panel>
          <Notifications>
            <NotificationItem>
              <img
                src="https://avatars2.githubusercontent.com/u/48379411?s=460&u=94dabeb8a22a6181fc4686a5bee1e608fa477f86&v=4"
                alt="Imagem Noticia"
              />
              <span>
                Plataforma Disponibiliza Cursos online gratuitos de tecnologias.
                <a href=" ">Clique aqui e saiba mais </a>
              </span>
            </NotificationItem>
            <NotificationItem>
              <img
                src="https://avatars2.githubusercontent.com/u/48379411?s=460&u=94dabeb8a22a6181fc4686a5bee1e608fa477f86&v=4"
                alt="Imagem Noticia"
              />
              <span>
                Plataforma Disponibiliza Cursos online gratuitos de tecnologias.
                <a href=" ">Clique aqui e saiba mais </a>
              </span>
            </NotificationItem>
            <NotificationItem>
              <img
                src="https://avatars2.githubusercontent.com/u/48379411?s=460&u=94dabeb8a22a6181fc4686a5bee1e608fa477f86&v=4"
                alt="Imagem Noticia"
              />
              <span>
                Plataforma Disponibiliza Cursos online gratuitos de tecnologias.
                <a href=" ">Clique aqui e saiba mais </a>
              </span>
            </NotificationItem>
            <NotificationItem>
              <img
                src="https://avatars2.githubusercontent.com/u/48379411?s=460&u=94dabeb8a22a6181fc4686a5bee1e608fa477f86&v=4"
                alt="Imagem Noticia"
              />
              <span>
                Plataforma Disponibiliza Cursos online gratuitos de tecnologias.
                <a href=" ">Clique aqui e saiba mais </a>
              </span>
            </NotificationItem>
            <NotificationItem>
              <img
                src="https://avatars2.githubusercontent.com/u/48379411?s=460&u=94dabeb8a22a6181fc4686a5bee1e608fa477f86&v=4"
                alt="Imagem Noticia"
              />
              <span>
                Plataforma Disponibiliza Cursos online gratuitos de tecnologias.
                <a href=" ">Clique aqui e saiba mais </a>
              </span>
            </NotificationItem>
          </Notifications>
          <Subtitle>
            <h2>Feedbacks Recebidos</h2>
          </Subtitle>
          <Comments>
            <CommentItem>
              <span>07/12/2020 09:00</span>
              <ProfileComment>
                <img
                  src="https://avatars2.githubusercontent.com/u/48379411?s=460&u=94dabeb8a22a6181fc4686a5bee1e608fa477f86&v=4"
                  alt="Avatar"
                />
                <strong> Nome do Usuário </strong>
              </ProfileComment>
              <CoinsReceived>
                <span>
                  <FaCoins size={25} color="#F0D126" />
                  <strong>10 coins</strong>
                </span>
                <p>#financeiroResolvido #problemaResolvido</p>
              </CoinsReceived>
            </CommentItem>
            <CommentItem>
              <span>07/12/2020 09:00</span>
              <ProfileComment>
                <img
                  src="https://avatars2.githubusercontent.com/u/48379411?s=460&u=94dabeb8a22a6181fc4686a5bee1e608fa477f86&v=4"
                  alt="Avatar"
                />
                <strong> Nome do Usuário </strong>
              </ProfileComment>
              <CoinsReceived>
                <span>
                  <FaCoins size={25} color="#F0D126" />
                  <strong>10 coins</strong>
                </span>
                <p>#financeiroResolvido #problemaResolvido</p>
              </CoinsReceived>
            </CommentItem>
          </Comments>
        </Content>
      </Container>
    </>
  );
};

export default Dashboard;
