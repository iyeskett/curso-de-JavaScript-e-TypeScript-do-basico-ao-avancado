// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line no-unused-vars
import { Container } from '../../styles/GlobalStyles';
// eslint-disable-next-line no-unused-vars
import { Title, Paragrafo } from './styled';

export default function Login() {
  return (
    <Container>
      <Title>
        Login
        <small>Olá</small>
      </Title>
      <Paragrafo>Lorem ipsum dolor sit amet</Paragrafo>
      <button type="button">Enviar</button>
    </Container>
  );
}
