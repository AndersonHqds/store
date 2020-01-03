import React, { useEffect } from 'react';
import { MdBusiness, MdShoppingCart } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import GlobalStyle from '~/styles/global';
import { Avatar, Container, Logo, Navigation } from './styles';
import Wrapper from '~/components/Wrapper';
import { saveUserDataRequest } from '~/store/modules/user/actions';

export default function Header() {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(saveUserDataRequest());
  }, [dispatch]);

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
              <Avatar
                src={
                  user.avatar ||
                  'https://api.adorable.io/avatars/52/abott@adorable.png'
                }
              />
              <span>{user.name || 'loading...'}</span>
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
