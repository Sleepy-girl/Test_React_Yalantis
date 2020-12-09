import styled from 'styled-components';

export const EmployeesStyled = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 30px;

  li {
    display: flex;
    justify-content: space-between;
    width: 250px;
  }

  input[type='checkbox']:checked,
  input[type='checkbox']:not(:checked) {
    width: 10px;
    height: 10px;
    cursor: pointer;
  }
`;
