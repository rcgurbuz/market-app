import React, { FC } from 'react';
import {
  BasketItemInfo,
  BasketItemPrice,
  BasketItemTitle,
  BasketItemWrapper,
  BasketWrapper,
  CartButtonWrapper,
  CartButton,
  CartLabel,
  CartPrice,
  CartPriceWrapper,
  ItemsWrapper,
  EmptyBasket,
} from './styled';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../store/basket/actions';
import { IBasketState } from '../../store/basket/basket';
import useSumTotal from '../../hooks/useSumTotal';
import { Dispatch } from 'redux';

const Basket: FC = () => {
  const dispatch: Dispatch = useDispatch();

  const { basket } = useSelector<RootState, IBasketState>(
    (state: RootState) => state?.basket
  );

  const totalPrice = useSumTotal();

  return (
    <BasketWrapper>
      {basket && basket?.length > 0 ? (
        <>
          <ItemsWrapper>
            {basket?.map((item, index) => (
              <div key={index}>
                {item?.count > 0 && (
                  <BasketItemWrapper>
                    <BasketItemInfo>
                      <BasketItemTitle>{item?.name}</BasketItemTitle>
                      <BasketItemPrice>
                        ₺ {item?.price * (item?.count ? item?.count : 1)}
                      </BasketItemPrice>
                    </BasketItemInfo>
                    <CartButtonWrapper>
                      <CartButton
                        onClick={() => dispatch(removeFromCart(item))}
                      >
                        -
                      </CartButton>
                      <CartLabel>{item?.count}</CartLabel>
                      <CartButton onClick={() => dispatch(addToCart(item))}>
                        +
                      </CartButton>
                    </CartButtonWrapper>
                  </BasketItemWrapper>
                )}
              </div>
            ))}
          </ItemsWrapper>
          <CartPriceWrapper>
            <CartPrice>₺ {totalPrice}</CartPrice>
          </CartPriceWrapper>
        </>
      ) : (
        <EmptyBasket>Cart is empty!</EmptyBasket>
      )}
    </BasketWrapper>
  );
};

export default Basket;
