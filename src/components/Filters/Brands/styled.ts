import styled from 'styled-components';

export const Title = styled.div`
  margin-bottom: ${(props) => props.theme.gutters.small};
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.textColor};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
`;

export const BrandsWrapper = styled.div`
  -webkit-box-shadow: 0px 6px 6px 0px rgba(0, 0, 0, 0.04);
  box-shadow: 0px 6px 6px 0px rgba(0, 0, 0, 0.04);
  background-color: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.gutters.regular};
  margin-bottom: ${(props) => props.theme.gutters.regularBig};
`;

export const CheckboxWrapper = styled.div`
  max-height: 150px;
  overflow-y: scroll;
  margin-top: ${(props) => props.theme.gutters.small};
  scrollbar-width: thin;
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

  .MuiCheckbox-root {
    color: rgba(0, 0, 0, 0.1);
  }
  .MuiCheckbox-colorPrimary.Mui-checked {
    color: ${(props) => props.theme.colors.primary};
  }
  .MuiTypography-body1 {
    font-size: ${(props) => props.theme.fontSizes.regular};
    font-weight: ${(props) => props.theme.fontWeights.normal};
    font-family: ${(props) => props.theme.fontFamily.main};
    color: ${(props) => props.theme.colors.radioTextColor};
  }
  .MuiFormControlLabel-root {
    width: 100%;
    margin: auto;
  }
  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    color: red !important;
  }
`;
