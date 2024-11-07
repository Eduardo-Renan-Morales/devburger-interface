import { ArrowLeft } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.svg';

import { CartItems } from '../../components/CartItems';
import { CartResume } from '../../components/CartResume';
import { Banner, Container, Content, Title } from "./styles";

export function Cart() {
  const navigate = useNavigate()
  return (
    <Container>
      <Banner>
        <img src={Logo} alt='foto-logo-carrinho' />
      </Banner>
      <Title>Checkout - Pedido</Title>
      <ArrowLeft className='arrow-back' onClick={() => navigate('/')} />

      <Content>
        <CartItems />
        <CartResume />
      </Content>

    </Container>
  )
}
