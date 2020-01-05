import React from 'react';
import { MdBusiness, MdShoppingCart } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

import GlobalStyle from '~/styles/global';
import { Avatar, Container, Logo, Navigation } from './styles';
import Wrapper from '~/components/Wrapper';

export default function Header() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Wrapper>
          <Logo>
            <NavLink to="/">
              <MdBusiness color="#FFF" size={40} />
              <span>Store</span>
            </NavLink>
          </Logo>
          <Navigation>
            <div>
              <Avatar src="https://api.adorable.io/avatars/52/abott@adorable.png" />
              <span>Anderson Silva</span>
              <NavLink to="carshop">
                <MdShoppingCart color="#FFF" size={25} />
              </NavLink>
            </div>
          </Navigation>
        </Wrapper>
      </Container>
    </>
  );
}
