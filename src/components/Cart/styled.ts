import styled from 'styled-components';

export const StyledCart = styled.div`
  background-color: ${(props) => props.theme.colors.primaryDark};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  max-width: 130px;
  width: 100%;

  @media (max-width: 576px) {
    max-width: 80px;
  }
`;

export const StyledPrice = styled.span`
  font-size: ${(props) => props.theme.fontSizes.regular};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
`;
