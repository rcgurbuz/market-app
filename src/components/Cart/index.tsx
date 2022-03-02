import React, { FC } from 'react';
import CartLogo from '../../images/CartLogo';
import { StyledCart, StyledPrice } from './styled';
import useSumTotal from '../../hooks/useSumTotal';

const Cart: FC = () => {
  const totalPrice = useSumTotal();

  return (
    <StyledCart>
      <CartLogo /> <StyledPrice>₺ {totalPrice}</StyledPrice>
    </StyledCart>
  );
};

export default Cart;
