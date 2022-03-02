import React from 'react';
import { StyledHeader } from './styled';
import { Container } from '../../theme';
import Logo from '../../images/Logo';
import Cart from '../../components/Cart';

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Logo />
        <Cart />
      </Container>
    </StyledHeader>
  );
};

export default Header;
