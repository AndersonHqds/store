import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import randomColor from 'randomcolor';

import api from '~/services/api';
import Wrapper from '~/components/Wrapper';
import ProductCard from '~/components/ProductCard';

import { addToCarRequest } from '~/store/modules/car/actions';
// import { Container } from './styles';

export default function Dashboard() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getProducts() {
      const response = await api.get('product');
      setProducts(response.data);
    }
    getProducts();
  }, []);

  function addToCarShop(product) {
    dispatch(addToCarRequest(product));
  }

  return (
    <Wrapper
      style={{ justifyContent: 'space-between', margin: '50px 0' }}
      align="stretch"
    >
      {products.map(product => (
        <ProductCard
          key={product.id}
          image={product.imageUrl}
          name={product.name}
          price={`R$ ${product.price}`}
          rate={product.rate}
          color={randomColor()}
          addToCarShop={() => addToCarShop(product)}
        />
      ))}
    </Wrapper>
  );
}
