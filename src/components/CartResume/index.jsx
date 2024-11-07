import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useCart } from '../../hooks/CartContext';
import { api } from '../../services/api';
import { formatPrice } from '../../utils/formatPrice';
import { Button } from '../Button';
import { Body, BottomPart, Container, Header } from "./styles";

export function CartResume() { // Remova "async" daqui

  const [finalPrice, setFinalPrice] = useState(0);
  const [deliveryTax] = useState(500);
  const { cartProducts } = useCart();

  useEffect(() => {
    const sumAllItems = cartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc;
    }, 0);

    setFinalPrice(sumAllItems);
  }, [cartProducts]);

  const submitOrder = async () => {

    const order = cartProducts.map(product => ({
      id: product.id,
      quantity: product.quantity
    }));



    await toast.promise(api.post('orders', { products: order }), {
      pending: 'Realizando o seu pedido...',
      success: 'Pedido realizando com sucesso',
      error: ' Falha ao realizar seu pedido, tente novamente.'
    })

  };

  return (
    <div>
      <Container>
        <Header>
          <p className='title'>Resumo do pedido</p>
        </Header>

        <Body>
          <p className='items'>Itens</p>
          <p className='items-price'>{formatPrice(finalPrice)}</p>
          <p className='delivery-tax'>Taxa de entrega</p>
          <p className='delivery-tax-price'>{formatPrice(deliveryTax)}</p>
        </Body>
        <BottomPart>
          <p>Total</p>
          <p>{formatPrice(finalPrice + deliveryTax)}</p>
        </BottomPart>
      </Container>
      <Button style={{ width: '100%', marginTop: 30 }} onClick={submitOrder}>
        Continuar
      </Button>
    </div>
  );
}
