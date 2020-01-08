import React from 'react';
import { MdAddCircle, MdRemoveCircle } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';

import {
  removeFromCarRequest,
  addToCarRequest,
} from '~/store/modules/car/actions';

import {
  Container,
  Title,
  Board,
  Msg,
  Product,
  ImageBox,
  InfoBox,
  Description,
  Operations,
  Button,
  Count,
} from './styles';

import Image from '~/components/Image';

export default function CarShop() {
  const products = useSelector(state => state.car.product);
  const dispatch = useDispatch();

  function addToQuantity(product) {
    dispatch(addToCarRequest(product));
  }

  function removeFromQuantity(product) {
    dispatch(removeFromCarRequest(product));
  }

  return (
    <Container>
      <Title>Carrinho</Title>
      {products.length > 0 ? (
        <Board>
          {products.map(product => (
            <Product key={product.id}>
              <ImageBox>
                <Image src={product.imageUrl} alt={product.name} />
              </ImageBox>
              <InfoBox>
                <Description>
                  <b>{product.name}</b>
                  <p>{product.content}</p>
                </Description>
                <Operations>
                  <Button
                    onClick={() => {
                      removeFromQuantity(product);
                    }}
                  >
                    <MdRemoveCircle size={30} color="#ff3333" />
                  </Button>
                  <Count>{product.quantity}</Count>
                  <Button
                    onClick={() => {
                      addToQuantity(product);
                    }}
                    type="submit"
                  >
                    <MdAddCircle size={30} />
                  </Button>
                </Operations>
              </InfoBox>
            </Product>
          ))}
        </Board>
      ) : (
        <Msg>Nenhum produto adicionado no momento</Msg>
      )}
      {}
    </Container>
  );
}
