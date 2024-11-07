import { Trash } from '@phosphor-icons/react';
import { useCart } from '../../hooks/CartContext';
import { formatPrice } from '../../utils/formatPrice';

import { Body, Container, EmptyCart, Header } from "./styles";

export function CartItems() {

  const { cartProducts, inCreaseProducts, deCreaseProducts, deleteProducts } = useCart()

  return (

    <Container>
      <Header>
        <p>Itens </p>
        <p>Preço </p>
        <p>Quantidade </p>
        <p>Total </p>
      </Header>

      {cartProducts && cartProducts.length > 0 ?
        cartProducts.map(product => (
          <Body key={product.id}>
            < img src={product.url} />
            <p>{product.name}</p>
            <p>{formatPrice(product.price)}</p>
            <div className='quantity-container'>
              <button onClick={() => deCreaseProducts(product.id)}> - </button>
              <p>{product.quantity}</p>
              <button onClick={() => inCreaseProducts(product.id)}> + </button>
            </div>

            <p > {formatPrice(product.quantity * product.price)}
              <Trash className='trash' onClick={() => deleteProducts(product.id)} />
            </p>

          </Body>
        )) : (<EmptyCart> Carrinho vazio </EmptyCart>)
      }
    </Container>
  )
}
