import styled from 'styled-components';

export const ProdItemWrapper = styled.div`
  padding: ${(props) => props.theme.gutters.smallBig};
`;

export const ProdItemImg = styled.img`
  max-width: 100%;
`;

export const ProdItemImgWrapper = styled.div`
  width: 92px;
  height: 92px;
  border-radius: ${(props) => props.theme.gutters.regular};
  border: 1px solid ${(props) => props.theme.colors.borderColor};
  padding: ${(props) => props.theme.gutters.smallBig};
  position: relative;
  text-align: center;
`;

export const ProdItemPrice = styled.div`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSizes.regular};
  margin-top: ${(props) => props.theme.gutters.small};
`;
export const ProdItemPriceSpan = styled.span`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSizes.regular};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

export const ProdItemName = styled.div`
  color: ${(props) => props.theme.colors.black};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  font-size: ${(props) => props.theme.fontSizes.regular};
  margin: ${(props) => props.theme.gutters.smaller} 0;
  min-height: 40px;
`;

export const ProdItemButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  font-size: ${(props) => props.theme.fontSizes.smaller};
  border-radius: ${(props) => props.theme.radius.small};
  border: 1px solid ${(props) => props.theme.colors.primary};
  width: 100%;
  padding: ${(props) => props.theme.radius.small};
  cursor: pointer;
`;
