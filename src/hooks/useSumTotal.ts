import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { IBasketState } from '../store/basket/basket';
import { RootState } from '../store/store';

export const useSumTotal = () => {
  const { basket } = useSelector<RootState, IBasketState>(
    (state: RootState) => state?.basket
  );

  const [totalPrice, setTotalPrice] = useState<number>(0);

  let totalItem = 0;
  basket.forEach((el) => {
    totalItem += el?.count;
  });

  useEffect(() => {
    let totalPrice = 0;
    basket.map(({ price, count }) => (totalPrice = totalPrice + count * price));

    setTotalPrice(totalPrice);
  }, [basket, totalItem]);

  return Number(totalPrice).toFixed(2).toString();
};

export default useSumTotal;
