import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 350px;
  align-items: space-around;
  border: 1px solid #bdbdbd;
  margin: 10px 0;
  background: rgba(255, 255, 255, 0.5);

  img {
    height: 200px;
    width: 100%;
  }
`;

export const Details = styled.div`
  width: 100%;
  height: 200px;
  padding: 10px;
  p {
    font-size: 18px;
    display: flex;
    b {
      margin-right: 5px;
    }
  }
`;

export const ColorBox = styled.span`
  width: 20px;
  border: 1px solid #000;
  height: 20px;
  border-radius: 50%;
  background: ${props => (props.color ? props.color : 'transparent')};
`;

export const AddButton = styled.button`
  height: 30px;
  width: 100%;
  margin: 10px 0;
  background: #0097a7;
  border: none;
  color: #fff;
  font-weight: bold;

  &:hover {
    opacity: 0.8;
  }
`;
