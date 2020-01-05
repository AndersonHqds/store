import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Title = styled.h1`
  text-align: center;
  margin: 10px auto;
  color: #fff;
`;

export const Board = styled.div`
  width: 80%;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 4px;
  div + div {
    border-top: 1px solid rgba(0, 0, 0, 0.2);
  }
`;

export const Product = styled.div`
  width: 100%;
  height: 100px;
`;

export const Msg = styled.p`
  text-align: center;
  margin: 0 auto;
  color: #fff;
  font-size: 15px;
`;
