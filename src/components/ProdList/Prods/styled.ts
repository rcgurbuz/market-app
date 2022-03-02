import styled from 'styled-components';

export const ProdsWrapper = styled.div`
  padding: ${(props) => props.theme.gutters.regular};
  background-color: ${(props) => props.theme.colors.white};
  margin-bottom: ${(props) => props.theme.gutters.largest};
  margin-top: ${(props) => props.theme.gutters.regularBig};
`;

export const PaginationWrapper = styled.div`
  ul {
    max-width: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    list-style-type: none;
    margin: ${(props) => props.theme.gutters.big} auto;
    padding-left: 0;
    cursor: pointer;
    color: ${(props) => props.theme.colors.textColor};
  }
  li {
    font-size: ${(props) => props.theme.fontSizes.regular};
    margin-right: ${(props) => props.theme.gutters.regularBig};
    font-weight: ${(props) => props.theme.fontWeights.semiBold};
    @media (max-width: 576px) {
      margin-right: ${(props) => props.theme.gutters.small};
    }
  }
  .activePage {
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.primary};
    padding: ${(props) => props.theme.gutters.small};
    border-radius: ${(props) => props.theme.radius.small};
  }
`;
