import styled from 'styled-components';

export const SelectedFilterButton = styled.div`
  padding: 6px 16px;
  border-radius: 2px;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.primary};
  margin-right: 8px;
  cursor: pointer;
  font-size: ${(props) => props.theme.fontSizes.small};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
`;
export const FilterButton = styled.div`
  padding: 6px 16px;
  border-radius: 2px;
  color: ${(props) => props.theme.colors.primary};
  background-color: #f2f0fd;
  margin-right: 8px;
  cursor: pointer;
  font-size: ${(props) => props.theme.fontSizes.small};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
`;

export const FilterButtonWrapper = styled.div`
  display: flex;
  margin-top: ${(props) => props.theme.gutters.regular};
`;
