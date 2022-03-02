import styled from 'styled-components';

export const Title = styled.div`
  font-size: ${(props) => props.theme.fontSizes.bigger};
  color: ${(props) => props.theme.colors.textColor};
  font-weight: ${(props) => props.theme.fontWeights.normal};
`;

export const ProdListWrapper = styled.div`
  padding-right: ${(props) => props.theme.gutters.regular};
  padding-left: ${(props) => props.theme.gutters.regular};
`;
