import React from 'react';
import PropTypes from 'prop-types';

import { Container, Details, ColorBox, AddButton } from './styles';

import Image from '~/components/Image';

export default function ProductCard({
  addToCarShop,
  name,
  image,
  price,
  rate,
  color,
}) {
  function addToCar() {
    addToCarShop();
  }

  return (
    <Container>
      <Image src={image} />
      <Details>
        <p>
          <b>Nome: </b>
          {name}
        </p>
        <p>
          <b>Preço: </b>
          {price}
        </p>
        <p>
          <b>Avaliação: </b>
          {rate}
        </p>
        <p>
          <b>Cor: </b>
          <ColorBox color={color} />
        </p>
        <AddButton onClick={addToCar}>Adicionar ao carrinho</AddButton>
      </Details>
    </Container>
  );
}

ProductCard.propTypes = {
  addToCarShop: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  price: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

ProductCard.defaultProps = {
  image: String,
};
