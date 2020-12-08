import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavigationStyled = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const LinkElem = styled(NavLink)`
  text-decoration: none;
  color: cornflowerblue;
  font-weight: 400;
  line-height: 1.2;

  margin-bottom: 6px;
`;
