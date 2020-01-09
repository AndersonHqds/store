import styled from 'styled-components';

export const ProductsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: flex-start;
  margin: 50px 0px;
  @media (max-width: 550px) {
    justify-content: center;
  }
`;

export const SearchRow = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  @media (max-width: 550px) {
    justify-content: center;
  }
  input {
    border-radius: 4px;
    height: 45px;
    width: 300px;
  }
`;

export const NotFoundText = styled.h1``;
