import React from 'react';
import {
  ProdItemButton,
  ProdItemImg,
  ProdItemImgWrapper,
  ProdItemName,
  ProdItemPrice,
  ProdItemPriceSpan,
  ProdItemWrapper,
} from './styled';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../../store/basket/actions';
import { Dispatch } from 'redux';

const ProdItem = ({ item }) => {
  const dispatch: Dispatch = useDispatch();

  return (
    <ProdItemWrapper>
      <ProdItemImgWrapper>
        <ProdItemImg src='https://via.placeholder.com/92' alt='prod' />
      </ProdItemImgWrapper>
      <ProdItemPrice>
        ₺ <ProdItemPriceSpan>{item?.price}</ProdItemPriceSpan>
      </ProdItemPrice>
      <ProdItemName>{item?.name}</ProdItemName>
      <ProdItemButton onClick={() => dispatch(addToCart(item))}>
        Add
      </ProdItemButton>
    </ProdItemWrapper>
  );
};

export default ProdItem;
