import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: #0097a7;
  height: 100px;
`;

export const Logo = styled.div`
  width: 50%;
  display: flex;
  flex-wrap: nowrap;
  span {
    font-size: 40px;
    color: #fff;
  }
`;

export const Navigation = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 200px;
    color: #fff;
  }
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
