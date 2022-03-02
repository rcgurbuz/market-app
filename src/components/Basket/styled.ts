import styled from 'styled-components';

export const BasketWrapper = styled.div`
  border: 8px solid ${(props) => props.theme.colors.primary};
  height: 340px;
  width: 280px;
  position: relative;
  padding: ${(props) => props.theme.gutters.smallBig};
  border-radius: ${(props) => props.theme.radius.small};
  margin: auto;
  background-color: ${(props) => props.theme.colors.white};
`;

export const BasketItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #f4f4f4;
  padding: ${(props) => props.theme.gutters.smallBig} 0;
`;

export const BasketItemInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BasketItemTitle = styled.div`
  font-size: ${(props) => props.theme.fontSizes.regular};
  font-weight: ${(props) => props.theme.fontWeights.normal};
  color: ${(props) => props.theme.colors.secondary};
  margin-bottom: ${(props) => props.theme.gutters.smaller};
`;

export const BasketItemPrice = styled.div`
  font-size: ${(props) => props.theme.fontSizes.regular};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.primary};
`;

export const CartButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const CartButton = styled.button`
  color: ${(props) => props.theme.colors.primary};
  border: none;
  background-color: transparent;
  font-size: 1.2rem;
  cursor: pointer;
`;

export const CartLabel = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  width: 32px;
  height: 32px;
  margin-right: ${(props) => props.theme.gutters.small};
  margin-left: ${(props) => props.theme.gutters.small};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CartPriceWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: ${(props) => props.theme.gutters.smallBig} 0;
`;
export const CartPrice = styled.div`
  color: ${(props) => props.theme.colors.primary};
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.radius.small};
  width: 92px;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
`;

export const ItemsWrapper = styled.div`
  max-height: 270px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 4px;
    border-radius: ${(props) => props.theme.radius.regular};
  }
  &::-webkit-scrollbar-button {
    background: #fff;
  }
  &::-webkit-scrollbar-track-piece {
    background: #fff;
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.inputBorderColor};
    background-clip: padding-box;
  }
`;

export const EmptyBasket = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;
