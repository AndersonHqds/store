import React from 'react';

import { useSelector } from 'react-redux';
import { Container, Title, Board, Msg, Product } from './styles';

export default function CarShop() {
  const products = useSelector(state => state.car.product);

  return (
    <Container>
      <Title>Carrinho</Title>
      {products.length > 0 ? (
        <Board>
          {products.map(product => (
            <Product key={product.id}>{product.name}</Product>
          ))}
        </Board>
      ) : (
        <Msg>Nenhum produto adicionado no momento</Msg>
      )}
      {}
    </Container>
  );
}
