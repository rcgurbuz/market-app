import styled from 'styled-components';

export const Title = styled.div`
  margin-bottom: ${(props) => props.theme.gutters.small};
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.textColor};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
`;

export const SortingWrapper = styled.div`
  -webkit-box-shadow: 0px 6px 6px 0px rgba(0, 0, 0, 0.04);
  box-shadow: 0px 6px 6px 0px rgba(0, 0, 0, 0.04);
  background-color: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.gutters.regular};
  margin-bottom: ${(props) => props.theme.gutters.regularBig};

  .MuiRadio-colorPrimary.Mui-checked {
    font-size: ${(props) => props.theme.fontSizes.regular};
    font-family: ${(props) => props.theme.fontFamily.main};
    color: ${(props) => props.theme.colors.primary};
  }

  .MuiRadio-root {
    color: ${(props) => props.theme.colors.radioBorderColor};
  }

  .MuiTypography-body1 {
    font-size: ${(props) => props.theme.fontSizes.regular};
    font-weight: ${(props) => props.theme.fontWeights.normal};
    color: ${(props) => props.theme.colors.radioTextColor};
    font-family: ${(props) => props.theme.fontFamily.main};
  }
`;
