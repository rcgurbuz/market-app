import styled from 'styled-components';

export const StyledFooter = styled.div`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSizes.small};
  text-align: center;
  padding-top: ${(props) => props.theme.gutters.big};
  padding-bottom: ${(props) => props.theme.gutters.big};
  margin-top: ${(props) => props.theme.gutters.largest};
  span {
    margin-right: ${(props) => props.theme.gutters.small};
  }
`;

export const FooterLink = styled.a`
  text-decoration: none;
  &:visited {
    color: ${(props) => props.theme.colors.primary};
  }
`;
