import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import randomColor from 'randomcolor';

import api from '~/services/api';

import Wrapper from '~/components/Wrapper';
import ProductCard from '~/components/ProductCard';
import Filter from '~/components/Search';

import { ProductsContainer, SearchRow, NotFoundText } from './styles';

import { addToCarRequest } from '~/store/modules/car/actions';

export default function Dashboard() {
  const [productsBackup, setProductsBackup] = useState([]);
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getProducts() {
      const response = await api.get('product');
      setProducts(response.data);
      setProductsBackup(response.data);
    }
    getProducts();
  }, []);

  function addToCarShop(product) {
    dispatch(addToCarRequest(product));
  }

  function updateProductList(productsFound, reset) {
    if (productsFound.length > 0) {
      setProducts(productsFound);
    } else if (reset) {
      setProducts(productsBackup);
    } else {
      setProducts([]);
    }
  }

  return (
    <Wrapper
      style={{ justifyContent: 'space-between', margin: '50px 0' }}
      align="stretch"
    >
      <SearchRow>
        <Filter onSearch={updateProductList} products={productsBackup} />
      </SearchRow>
      <ProductsContainer>
        {products.length > 0 ? (
          products.map(product => (
            <ProductCard
              key={product.id}
              image={product.imageUrl}
              name={product.name}
              price={`R$ ${product.price}`}
              rate={product.rate}
              color={randomColor()}
              addToCarShop={() => addToCarShop(product)}
            />
          ))
        ) : (
          <NotFoundText>Nenhum produto encontrado</NotFoundText>
        )}
      </ProductsContainer>
    </Wrapper>
  );
}
