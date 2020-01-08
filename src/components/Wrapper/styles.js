import styled from 'styled-components';

export const WrapperContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 100px;
  display: flex;
  flex-wrap: wrap;
  align-items: ${props => (props.align ? props.align : 'center')};
  @media (max-width: 550px) {
    padding: 0 10px;
  }
`;
