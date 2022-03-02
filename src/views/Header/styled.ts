import styled from 'styled-components';

export const StyledHeader = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  height: 4.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${(props) => props.theme.gutters.large};
`;
