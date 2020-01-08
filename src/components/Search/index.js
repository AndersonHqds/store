import React from 'react';
import PropTypes from 'prop-types';
// import { Container } from './styles';

export default function Search({ products, onSearch }) {
  function filterText(event) {
    let productsFound = [];
    let reset = true;
    if (event.target.value.trim() !== '') {
      productsFound = products.filter(
        product =>
          product.name
            .toLowerCase()
            .includes(event.target.value.toLowerCase()) ||
          product.content
            .toLowerCase()
            .includes(event.target.value.toLowerCase())
      );
      reset = false;
    }
    onSearch(productsFound, reset);
    console.log(productsFound);
  }

  return (
    <input
      type="text"
      onChange={filterText}
      placeholder="Digite o nome do produto"
    />
  );
}

Search.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSearch: PropTypes.func.isRequired,
};
