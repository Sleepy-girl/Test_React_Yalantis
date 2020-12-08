import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const EmployeesStyled = styled.div`
  padding: 30px;
  list-style: none;
  display: flex;
  justify-content: space-evenly;
`;
export const LinkElem = styled(NavLink)`
  text-decoration: none;
  color: red;
  font-weight: 400;
  line-height: 1.2;
`;
