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
  & > div {
    border-top: 1px solid rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 550px) {
    width: 95%;
  }
`;

export const Product = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  @media (max-width: 550px) {
    height: 100%;
    align-items: center;
  }
`;

export const Msg = styled.p`
  text-align: center;
  margin: 0 auto;
  color: #fff;
  font-size: 15px;
`;

export const ImageBox = styled.div`
  width: 100px;
  height: 100%;
  background-color: #333;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const InfoBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  @media (max-width: 550px) {
    height: 100%;
    align-items: center;
  }
`;

export const Description = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;
  @media (max-width: 550px) {
    width: 70%;
    justify-content: stretch;
  }
`;

export const Operations = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 550px) {
    width: 30%;
  }
`;

export const Button = styled.button`
  background: none;
  border: none;
`;

export const Count = styled.p`
  font-size: 20px;
  font-weight: bold;
`;
