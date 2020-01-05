import React from 'react';
import PropTypes from 'prop-types';

import { Container, Image, Details, ColorBox, AddButton } from './styles';

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
      <Image
        src={
          image || 'https://www.freeiconspng.com/uploads/no-image-icon-4.png'
        }
        onError={e => {
          e.target.error = null;
          e.target.src =
            'https://www.freeiconspng.com/uploads/no-image-icon-4.png';
        }}
      />
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
